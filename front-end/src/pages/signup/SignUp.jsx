import React, { useState } from 'react'
import GenderCheckBox from './GenderCheckBox.jsx'
import { Link } from 'react-router-dom'
import useSignup from '../../hooks/useSignUp.js'

const SignUp = () => {

  const [inputs, setInputs] = useState({
    fullname: "",
    username: "",
    password: "",
    confirmPass: "",
    gender: ""
  });

  const { loading, signup } = useSignup();

  const handleCheckBoxChange = (gender) => {
    setInputs({ ...inputs, gender });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    //console.log(inputs)
    await signup(inputs)
    console.log(inputs)
  }

  return (
    <div className='flex flex-col items-center justify-center space-between max-w-[475px] mx-auto' style={{ width: 'clamp(300px, 50%, 600px)' }}>
      <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 transition-all duration-300 ease-in-out'>
        <h1 className='sm:text-xl md:text-2xl lg:text-3xl font-semibold text-center text-white'>
          Sign Up
          <span className='text-customBlue pl-3 sm:text-xl md:text-2xl lg:text-3xl'>iMessenger</span>
        </h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label className='label p-2'>
              <span className='text-base label-text text-white'>Full Name</span>
            </label>
            <input 
              type="text" 
              placeholder='Enter full name' 
              className='w-full input input-bordered h-10 text-black'
              value={inputs.fullname}
              onChange={(e) => setInputs({...inputs, fullname: e.target.value})}
            />
          </div>

          <div>
            <label className='label p-2'>
              <span className='text-base label-text text-white'>Username</span>
            </label>
            <input 
              type="text" 
              placeholder='Enter username' 
              className='w-full input input-bordered h-10 text-black'
              value={inputs.username}
              onChange={(e) => setInputs({...inputs, username: e.target.value})}
             />
          </div>

          <div>
            <label className='label p-2'>
              <span className='text-base label-text text-white'>Password</span>
            </label>
            <input 
              type="password" 
              placeholder='Enter password' 
              className='w-full input input-bordered h-10 text-black'
              value={inputs.password}
              onChange={(e) => setInputs({...inputs, password: e.target.value})}
            />
          </div>

          <div>
            <label className='label p-2'>
              <span className='text-base label-text text-white'>Confirm Password</span>
            </label>
            <input 
              type="password" 
              placeholder='Enter password confirmation' 
              className='w-full input input-bordered h-10 text-black'
              value={inputs.confirmPass}
              onChange={(e) => setInputs({...inputs, confirmPass: e.target.value})} />
          </div>

          <GenderCheckBox onCheckboxChange={handleCheckBoxChange} selectedGender={inputs.gender} />

          <Link 
            to={'/login'} 
            className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>
            Already have an account?
          </Link>

          <div>
            <button className='btn btn-block btn-sm mt-2 border' disabled={loading}>
              {loading ? <span className='loading loading-spinner'></span> : "Sign Up"}
            </button>
          </div>

        </form>
      </div>
    </div>
  )
}

export default SignUp