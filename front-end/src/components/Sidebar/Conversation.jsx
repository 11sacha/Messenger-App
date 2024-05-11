import React from 'react'

const Conversation = () => {
  return (
    <>
        <div className='flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer'>
            <div className='avatar online'>
                <div className='w-12 rounded-full'>
                    <img 
                        src="https://www.google.com/imgres?q=profile%20user%20contact&imgurl=https%3A%2F%2Fcdn1.iconfinder.com%2Fdata%2Ficons%2Fui-colored-1-of-3%2F100%2FUI_1__11-512.png&imgrefurl=https%3A%2F%2Fwww.iconfinder.com%2Ficons%2F1516678%2Faccount_contact_person_profile_representation_user_icon&docid=o43iJSDg1kS2DM&tbnid=syg_3XDuyZ40hM&vet=12ahUKEwjqp7W8_IWGAxXTrpUCHb-oDioQM3oECGQQAA..i&w=512&h=512&hcb=2&ved=2ahUKEwjqp7W8_IWGAxXTrpUCHb-oDioQM3oECGQQAA" 
                        alt="user avatar" 
                    />
                </div>
            </div>

            <div className='flex flex-col flex-1'>
                <div className='flex gap-3 justify-between'>
                    <p className='font-bold text-gray-200'>John Doe</p>
                    <span className='text-xl'>👽</span>
                </div>
            </div>
        </div>

        <div className='divider my-0 py-0 h-1'></div>
    </>
  )
}

export default Conversation
