import React from 'react'

const TimeRevolutionHero = ({title, text, image}) => {
  return (
    <div className='w-full h-[500px] -mt-16'>
        <div className='relative'>
            <img src={image} alt="" className= "w-full h-[500px]" />
            <div className='absolute flex flex-col top-0 left-10 justify-center h-full'>
                <p className='text-xl text-white font-bold mb-8'>{title}</p>
                <p className='text-lg text-white w-[60%] leading-none '>{text}</p>
            </div>
        </div>
    </div>
  )
}

export default TimeRevolutionHero
