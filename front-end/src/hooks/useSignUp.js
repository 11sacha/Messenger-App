import React, { useState } from 'react'
import toast from 'react-hot-toast';

const useSignUp = () => {
  const [loading, setLoading] = useState(false);

  const signup = async({ fullname, username, password, confirmPass, gender }) => {
    const success = handleInputErrors({fullname, username, password, confirmPass, gender});
    if (!success) return;

    setLoading(true);
    try {
        const res = await fetch("http://localhost:1234/api/auth/signup", {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify({ fullname, username, password, confirmPass, gender })
        });

        const data = await res.json();
    } catch (error) {
        toast.error(error.message);
        console.log(error.message)
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
        toast.error('Passwords do not match.')
        return false
    }

    if(password.length < 6) {
        toast.error('Password must be atleast 6 characters')
        return false
    }
    return true;
}