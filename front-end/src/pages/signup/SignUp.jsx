import React from 'react'
import GenderCheckBox from './GenderCheckBox.jsx'

const SignUp = () => {
  return (
    <div className='flex flex-col items-center justify-center space-between min-w-96 mx-auto'>
      <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
        <h1 className='text-3xl font-semibold text-center text-white'>
          Sign Up
          <span className='text-blue-600 pl-3'>iMessenger</span>
        </h1>
        <form>
          <div>
            <label className='label p-2'>
              <span className='text-base label-text text-white'>Full Name</span>
            </label>
            <input 
              type="text" 
              placeholder='Enter full name' 
              className='w-full input input-bordered h-10'
            />
          </div>

          <div>
            <label className='label p-2'>
              <span className='text-base label-text text-white'>Username</span>
            </label>
            <input 
              type="text" 
              placeholder='Enter username' 
              className='w-full input input-bordered h-10' />
          </div>

          <div>
            <label className='label p-2'>
              <span className='text-base label-text text-white'>Password</span>
            </label>
            <input 
              type="text" 
              placeholder='Enter password' 
              className='w-full input input-bordered h-10' />
          </div>

          <div>
            <label className='label p-2'>
              <span className='text-base label-text text-white'>Confirm Password</span>
            </label>
            <input 
              type="text" 
              placeholder='Enter password confirmation' 
              className='w-full input input-bordered h-10' />
          </div>

          <GenderCheckBox/>

          <a href="#" className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>
            Already have an account?
          </a>

          <div>
            <button className='btn btn-block btn-sm mt-2 border text-white'>Sign Up</button>
          </div>

        </form>
      </div>
    </div>
  )
}

export default SignUp