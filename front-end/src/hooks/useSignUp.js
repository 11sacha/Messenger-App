import { useState } from 'react'
import toast from 'react-hot-toast';
import axios from 'axios';
import { useAuthContext } from '../context/AuthContext';

const useSignUp = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();
  console.log('pase las constantes')

  const signup = async({ fullname, username, password, confirmPass, gender }) => {
    const success = handleInputErrors({fullname, username, password, confirmPass, gender});
    if (!success) return;
    
    setLoading(true);
    try {
        const res = await fetch("http://localhost:1234/api/auth/signup", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ fullname, username, password, confirmPass, gender })
        });
        console.log('pase el fetch')

        const data = await res.json();
        if(data.error) {
            console.log('Error en la data')
            throw new Error(data.error)
            
        }
        console.log('response saved en data')

        localStorage.setItem("chat-user", JSON.stringify(data));
        setAuthUser(data);

        toast.success('Sign Up successful!');
        
    } catch (error) {
        console.log('Error en el sign up')
        toast.error(error.message);
        console.log(error.message);
    } finally {
        setLoading(false)
    }
  };

  return { loading, signup };
}

export default useSignUp

function handleInputErrors({fullname, username, password, confirmPass, gender}) {
    if(!fullname || !username || !password || !confirmPass || !gender) {
        toast.error('Please fill in all fields.')
        return false
    }

    if(password !== confirmPass) {
        toast.error('Passwords do not match.');
        return false
    }

    if(password.length < 6) {
        toast.error('Password must be atleast 6 characters');
        return false
    }

    console.log('pase input errors')
    return true;
}


// const res = await fetch("http://localhost:1234/api/auth/signup", {
//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify({ fullname, username, password, confirmPass, gender })
//         });
// const res = await axios.post("http://localhost:1234/api/auth/signup",
//             { fullname, username, password, gender }
//         );