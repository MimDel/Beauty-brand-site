import React from 'react'
import TagComponent from './TagComponent' 
import BeautyWoman from '../assets/woman.png'

const InfoBeauty = () => {
  return (
    <div className='flex flex-row items-center justify-center w-full h-[600px] bg-secondary'>
        <div className='flex w-[80%]  justify-evenly'>
            <img className='w-[525px] h-[541px] rounded-2xl' src={BeautyWoman} alt="beauty woman" />
            <div className='flex flex-col w-[525px] justify-center'>
                <div className='flex justify-between flex-wrap mb-10'>
                    <TagComponent title = "DRY" />
                    <TagComponent title = "OILY" />
                    <TagComponent title = "SENSITIVE" />
                </div>
                <p className='text-xl font-bold leading-none mb-10'>Beauty is neither a privilege</p>
                <p className='text-md'>MISSHA has now become a global beauty brand that goes beyond K-beauty,
                 trusted and chosen by over 10 million customers around the world.</p>
            </div>
        </div>
    </div>
  )
}

export default InfoBeauty
