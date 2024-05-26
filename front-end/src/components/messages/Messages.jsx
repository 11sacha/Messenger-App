import React from 'react'
import Message from './Message'
import useGetMessages from '../../hooks/useGetMessages'
import ChatSkeleton from '../skeleton/ChatSkeleton'

const Messages = () => {
  const {messages, loading} =  useGetMessages();
  return (
    <div className='px-4 flex-1 overflow-auto'>
        {loading && [...Array(3)].map((_, idx) => <ChatSkeleton key={idx} />)}

        {!loading && messages.length === 0 && (
          <p className='text-center'>Send a message to start the conversation.</p>
        )}
    </div>
  )
}

export default Messages