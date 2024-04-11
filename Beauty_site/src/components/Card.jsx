import React from 'react'
import Button from './Button'

const Card = ({image1, image2, title}) => {
  return (  
      <div className='flex flex-col items-center justify-evenly border-2 border-secondary rounded-lg w-[260px] h-[450px]'>
        <img className='w-[200px] h-[200px]' src={image1} alt="" />
        <hr className='w-[90%] h-1 bg-tertiary' />
        <p className='text-primary text-md text-center'>{title}</p>
        <Button title= "SHOP NOW" />
      </div>
  )
}

export default Card
