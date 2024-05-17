import React from 'react'
import { FaFacebookSquare, FaInstagram, FaTwitter, FaTiktok } from "react-icons/fa";

const Footer = () => {
return (
    <div className='flex items-start justify-center h-[284px] w-full bg-primary'>
        <div className='flex justify-between items-start w-[80%] text-white pt-6'>
            <div className='flex flex-col space-y-2'>
                <p className='text-lg'>Contacts:</p>
                <div className='text-md'>
                    <p>misshabiz@missha.com</p>
                    <p>088 993 8899</p>
                    <p>PO: Debar 6, Krasno selo,</p>
                    <p>Sofia 1000</p>
                </div>
            </div>
            <div className='flex flex-col space-y-2'>
                <p className='text-lg'>Follow us:</p>
                <div className='flex justify-between items-center text-lg space-x-1'>
                    <div className='cursor-pointer hover:text-gray-300'><FaFacebookSquare /></div>
                    <div className='cursor-pointer hover:text-gray-300'><FaInstagram /></div>
                    <div className='cursor-pointer hover:text-gray-300'><FaTwitter /></div>
                    <div className='cursor-pointer hover:text-gray-300'><FaTiktok /></div>
                </div>
                <p className='text-[10px] pt-12'>© Missha 2024, all rights reserved.</p>
            </div>
        </div>
    </div>
)
}

export default Footer
