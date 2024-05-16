import React from 'react'
import SearchInput from './SearchInput'
import Conversations from './Conversations'
import LogOutButton from './LogOutButton'

const SideBar = () => {
  return (
    <div className='relative h-full border-r-2 border-gray-500'>
      <SearchInput />
      <div className='divider px-2 my-1'></div>
      <div className='overflow-y-auto h-full pb-16'>
        <Conversations />
      </div>
      <div className='absolute bottom-0 px-3 py-2 w-full'>
        <LogOutButton />
      </div>
    </div>
  )
}

export default SideBar