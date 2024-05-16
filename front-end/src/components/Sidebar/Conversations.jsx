import React from 'react'
import Conversation from './Conversation'

const Conversations = () => {
  return (
    <div className='py-1 flex flex-col flex-1 overflow-auto'>
        <Conversation />
        <Conversation />
        <Conversation />
        <Conversation />
    </div>
  )
}

export default Conversations