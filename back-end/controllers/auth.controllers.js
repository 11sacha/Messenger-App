export const signUp = (req, res) => {
    try {
        const {fullName, userName, password, passwordConfirm, gender} = req.body
    } catch (error) {
        
    }
}

export const logIn = (req, res) => {
    console.log('log In')
}

export const logOut = (req, res) => {
    console.log('Log out')
}