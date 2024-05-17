import React from 'react'
import Missha from '../assets/missha.png'
import { useNavigate } from 'react-router-dom'

const HeroHome = () => {
  let navigate = useNavigate()

  return (
    <div className='w-full h-[700px] -mt-16'>
      <div className="relative">
        <img src={Missha} alt="Missha hero" className='w-full h-[700px]' />
        <div className="absolute flex flex-col h-full top-0 left-10 items-left justify-center">
          <div className="text-xl font-bold leading-none mb-10">
            <p className="text-tertiary">MISSHA</p>
            <p className='text-white'>Proven by its effects</p>
          </div>
          <p className='text-lg text-white w-[50%]'> We have listened closely to the 
          <span className='text-tertiary'> skin-related concerns </span>
          of our customers to create effects that <span className='text-tertiary'> satisfy </span> them.</p>
          <button className='w-[250px] mt-10 py-2 bg-tertiary rounded-full text-md text-white font-bold cursor-pointer' 
           onClick={() => navigate(`/SuperAqua`)}
          >
            Shop now
          </button>
        </div>
      </div>
    </div>
  )
}

export default HeroHome
