import React from 'react'
import Button from './Button'
import { useNavigate } from 'react-router-dom'

const Card = ({image1, image2, title, category, id}) => {
  let navigate = useNavigate()

  return (  
      <div className='flex flex-col items-center justify-evenly border-2 border-secondary rounded-lg w-[260px] h-[450px]'>
        <img className='w-[200px] h-[200px] cursor-pointer' src={image2} alt="" onClick={() => navigate(`/${category}/ProductInfo/${id}`)} />
        <hr className='w-[90%] h-1 bg-tertiary' />
        <p className='text-primary text-md text-center'>{title}</p>
        <div  onClick={() => navigate(`/${category}/ProductInfo/${id}`)}><Button title= "SHOP NOW" /></div>
      </div>
  )
}

export default Card
