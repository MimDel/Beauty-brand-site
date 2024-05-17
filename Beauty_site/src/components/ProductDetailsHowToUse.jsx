import React from 'react'

const ProductDetailsHowToUse = () => {
    return (
        <div className='flex w-full justify-center bg-secondary'>
            <div className='flex flex-row justify-evenly w-[80%]'>
                <div className='flex flex-col'>
                    <div className='bg-primary text-md text-white shadow-custom px-10 py-1 cursor-pointer text-center hover:bg-blue-900'>
                        Details & Care
                    </div>
                    
                </div>
                <div className='flex flex-col'>
                    <div className='bg-primary text-md text-white shadow-custom px-10 py-1 cursor-pointer text-center hover:bg-blue-900'>
                        How To Use
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetailsHowToUse
