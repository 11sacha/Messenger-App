import React from 'react'

const GenderCheckBox = ({ onCheckboxChange, selectedGender }) => {
  return (
    <div className='flex  mb-2 mt-4'>
        <div className='form-control'>
            <label htmlFor="label gap-2 cursor-pointer">
                <span className='label-text text-white pr-2'>Male</span>
                <input 
                    type="checkbox" 
                    className='checkbox border-slate-900' 
                    checked={selectedGender === 'male'} 
                    onChange={() => onCheckboxChange('male')} 
                />
            </label>
        </div>
        <div className='form-control'>
            <label htmlFor="label gap-2 cursor-pointer">
                <span className='label-text text-white px-2'>Female</span>
                <input 
                    type="checkbox" 
                    className='checkbox border-slate-900' 
                    checked={selectedGender === 'female'} 
                    onChange={() => onCheckboxChange('female')} 
                />
            </label>
        </div>
    </div>
  )
}

export default GenderCheckBox