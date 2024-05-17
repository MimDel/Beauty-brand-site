import React from 'react'

const AuthFooter = () => {
    return (
        <div className='flex justify-center items-center bg-primary text-white text-s w-full h-[100px]'>
            <div className='flex justify-between items-center w-[80%]'>
                <p className='cursor-pointer hover:underline'>Terms & Conditions</p>
                <p className='cursor-pointer hover:underline'>Privacy notice</p>
                <p className='cursor-pointer hover:underline'>Cookie preferences</p>
                <p className='cursor-pointer hover:underline'>Support</p>
                <p>Copyright © 2024 Missha Cosmetics. All Rights Reserved.</p>
            </div>
        </div>
    )
}

export default AuthFooter
