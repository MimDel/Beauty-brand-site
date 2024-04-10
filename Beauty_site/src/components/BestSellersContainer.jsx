import React from 'react'
import Card from './Card'
import BestSellers from '../utils/BestSellers'

const BestSellersContainer = () => {
  return (
    <div className='flex flex-row justify-center w-full h-[750px] py-20 mb-[20px]'>
        <div className='flex flex-col items-center w-[80%]'>
            <p className='text-xl font-bold'> 
            <span className='text-tertiary'>Best </span>
            <span className='text-primary'>Sellers</span> </p>
            <hr class="w-full h-1 bg-secondary mt-0 mb-8"/>
            <div className='flex flex-row w-full justify-evenly overflow-x-auto custom-scrollbar'>
                {BestSellers.map((bestSeller) =>(
                    <div><Card image1={bestSeller.cover} image2={bestSeller.coverHovered} title={bestSeller.title} /></div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default BestSellersContainer
