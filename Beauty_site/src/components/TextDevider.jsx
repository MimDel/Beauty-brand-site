import React from 'react'
import Sea from '../assets/sea.jpg'

const TextDevider = () => {
  return (
    <div className='relative w-full h-[170px] mb-20'>
        <img src={Sea} alt="" className='w-full h-[170px]' />
            <div className='absolute inset-0 flex items-center justify-center'>
                <p className='text-lg text-center text-white font-semibold w-[80%]'>
                    Based on the needs and data of over <span className='text-tertiary'> 10 million customers </span>, 
                    we continue to develop <span className='text-tertiary'> safe and advanced </span> solutions to deliver 
                    the most effective results.</p>
            </div>
    </div>
  )
}

export default TextDevider
