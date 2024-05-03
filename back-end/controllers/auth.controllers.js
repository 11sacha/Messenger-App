import  User from '../models/user.model.js';
import bcrypt from "bcryptjs";
import generateToken from '../utils/generateJwt.js'

export const signUp = async (req, res) => {
    try {
        const {fullName, username, password, passwordConfirm, gender} = req.body;

        if(password !== passwordConfirm){
            return res.status(400).json({error: "Passwords don't match."})
        }
        const user = await User.findOne({username});

        if (user) {
            return res.status(400).json({error: "User already exists."})
        }
        //Hashing password here
        const hash = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, hash)

        const manProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`
        const womanProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`

        const newUser = new User({
            fullName,
            username,
            password: hashedPassword,
            gender,
            profilePic: gender === "male" ? manProfilePic : womanProfilePic,
        })

        if(newUser) {
            generateToken(newUser._id, res);
            await newUser.save();

        res.status(201).json({
            _id: newUser._id,
            fullname: newUser.fullName,
            username: newUser.username,
            profilePic: newUser.profilePic,           
        });
        } else {
            res.status(400).json({error: "Invalid user data" })
        }
    } catch (error) {
        console.log("Error in signup controller", error.message)
        res.status(500).json({ error: "Internal Server Error."})   
    }
}

export const logIn = async (req, res) => {
    try {
        const { username, password } =req.body;
        const user = await User.findOne({ username });
        const validPassword = await bcrypt.compare(password, user?.password || "");

        if(!user || !validPassword) {
            return res.status(400).json({ error: "Invalid username or password" });
        }

        generateToken(user._id, res);

        res.status(200).json({
            _id: user._id,
            fullname: user.fullName,
            username: user.username,
            profilePic: user.profilePic,
        });

    } catch (error) {
        console.log("Error in login controller", error.message)
        res.status(500).json({ error: "Internal Server Error."}) 
    }
};

export const logOut = (req, res) => {
    try {
        res.cookie("jwt", "", { maxAge: 0 });
        res.status(200).json({ message: "Logged out successfully" })
    } catch (error) {
        console.log("Error in logout controller", error.message)
        res.status(500).json({ error: "Internal Server Error."})
    }
};