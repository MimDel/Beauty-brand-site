import React from 'react'

const HeroProduct = ({title, text, image, isAqua}) => {
  return (
    <div className='w-full h-[500px] -mt-16'>
        <div className='relative'>
            <img src={image} alt="" className= "w-full h-[500px]" />
            <div className={`absolute flex flex-col top-0 left-10 justify-center h-full ${isAqua ? 'text-primary' : 'text-textBrown'}`}>
                <p className='text-xl font-bold mb-8'>{title}</p>
                <p className='text-lg w-[60%] leading-none '>{text}</p>
            </div>
        </div>
    </div>
  )
}

export default HeroProduct
