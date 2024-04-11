import React from 'react'
import TimeRev from '../assets/time_revolution.webp'

const TimeRevolutionHero = () => {
  return (
    <div className='w-full h-[500px] -mt-16'>
        <div className='relative'>
            <img src={TimeRev} alt="" className= "w-full h-[500px]" />
            <div className='absolute flex flex-col top-0 left-10 justify-center h-full'>
                <p className='text-xl text-white font-bold mb-8'>Time Revolution</p>
                <p className='text-lg text-white w-[60%] leading-none '> <span className='text-primary'>Comforts the skin </span> 
                all day long! Soothing <span className='text-primary'>Artemisia Care</span> Line.</p>
            </div>
        </div>
    </div>
  )
}

export default TimeRevolutionHero
