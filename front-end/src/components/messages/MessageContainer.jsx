import React from 'react'
import Messages from './Messages'

const MessageContainer = () => {
  return (
    <div className='md:min-w-[450px] flex flex-col'>
        <>
            {/* Header */}
            <div className='bg-slate-400 px-4 py-2 mb-2'>
                <span className='label-text text-gray-900'>To:</span> <span className='text-gray-900 font-bold'>John Doe</span>
            </div>

            <Messages />
        </>
    </div>
  )
}

export default MessageContainer