import React from 'react'
import InfoCircle from './InfoCircle'

const InfoCircleBanner = () => {
  return (
    <div className='flex justify-center w-full items-center py-20'>
      <div className="flex flex-col lg:flex-row w-[80%]  justify-center lg:justify-evenly items-center space-y-4 lg:space-y-0">
        <InfoCircle title="Focus On Effects" description="We deliver the best results with safe and advanced solutions."/>
        <InfoCircle title="Exclusive Origin" description="We focus on essence and function with ingredients focused on core 
        functions."/>
        <InfoCircle title="Patented Technology" description="We provide skin-safe benefits with customized patented absorption technology."/>
      </div>        
    </div>
  )
}
1
export default InfoCircleBanner
