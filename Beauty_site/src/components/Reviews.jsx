import React from 'react'
import Review from './Review';

const Reviews = ({prod}) => {
  const {id} = prod;
  return (
    <div className='flex justify-center w-full my-16'>
      <div className='flex flex-col justify-center w-[80%]'>
        <div className='rounded bg-primary text-white border-primary border-2 px-16 py-1 cursor-pointer text-center text-lg'>Add review</div>
        <div>
          <Review productId={id}/>
        </div>
      </div>
    </div>
  )
}

export default Reviews
