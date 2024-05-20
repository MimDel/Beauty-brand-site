import React, { useState, useEffect } from 'react'
import ButtonSecondary from './ButtonSecondary'
import ImageHowToUse from '../assets/how_to_use.webp'

const ProductDetailsHowToUse = ({ prod }) => {
    const [activeTab, setActiveTab] = useState('details')

    const { descriptionLong, instructions, images } = prod;
    const image = images && images.length > 0 ? images[1].url : 'default-image-url.jpg';

    return (
        <div className='flex w-full justify-center bg-secondary p-10'>
            <div className='flex flex-row justify-evenly w-[80%]'>
                <div className='flex flex-col w-[40%]'>
                    <div className='pb-10' onClick={() => setActiveTab('details')}>
                        <ButtonSecondary title={"Details & Care"} isActive={activeTab === 'details'}/>
                    </div>
                    <div className='text-md'>
                        {activeTab === 'details' ?
                            <p>{descriptionLong}</p>
                            :
                            <p>{instructions}</p>}
                    </div>
                </div>
                <div className='flex flex-col w-[40%]'>
                    <div className='pb-10' onClick={() => setActiveTab('instructions')}>
                        <ButtonSecondary title={"How To Use"} isActive={activeTab === 'instructions'}/>
                    </div>
                    <div className='flex justify-center items-center'>
                        {activeTab === 'details' ?
                            <img className='w-full h-[500px]' src={image} alt="" />
                            :
                            <img className='w-full h-[500px]' src={ImageHowToUse} alt="" />
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetailsHowToUse
