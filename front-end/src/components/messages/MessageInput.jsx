import React from 'react'
import { BeSend } from "react-icons/bs"

const MessageInput = () => {
  return (
    <form className='px-4 my-3'>
        <div className='px-4 my-3'>
            <input 
                type="text" 
                className='border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white' 
                placeholder='Send a message..'
            />
            <button>
                <BeSend />
            </button>
        </div>
    </form>
  )
}

export default MessageInput