import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import useLogIn from '../../hooks/useLogin';

const LogIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { loading, login } = useLogIn();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login({ username, password })
  }

  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
        <h1 className='text-3xl font-semibold text-center text-white'>
          Log In  
          <span className='text-blue-600 pl-3'>iMessenger</span>
        </h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label className='label p-2'>
              <span className='text-base label-text text-white'>Username</span>
            </label>
            <input
                value={username} 
                type="text" 
                placeholder='Enter Username' 
                className='w-full input input-bordered h-10 text-black' 
                onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div>
            <label className='label'>
              <span className='text-base label-text text-white'>Password</span>
            </label>
            <input
                value={password}
                type="password" 
                placeholder='Enter Password' 
                className='w-full input input-bordered h-10 text-black'
                onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Link to={'/signup'} className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>
            Don't have an account?
          </Link>

          <div>
            <button className='btn btn-block btn-sm mt-2' disabled={loading}>
              {loading ? <span className='loading loading-spinner'></span> : "Log In"}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default LogIn;