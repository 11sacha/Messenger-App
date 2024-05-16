import React from 'react'

const MessageContainer = () => {
  return (
    <div className='md:min-w-[450px] flex flex-col'>
        <>
            {/* Header */}
            <div>
                <span className='label-text'>To:</span> <span className='text-gray-900 font-bold'>John Doe</span>
            </div>
        </>
    </div>
  )
}

export default MessageContainer