import React from 'react'
import { BsHandbag } from "react-icons/bs";
import Logo from "../assets/logo.png";
import {useNavigate} from 'react-router-dom'


const Navbar = () => {

    let navigate = useNavigate()

  return (
    <nav className="flex flex-col items-center w-full h-[200px] sticky top-0 z-50">
        <div className="flex items-center justify-center bg-primary w-full h-[45px] text-white">
            <p className='text-md' >Free shipping on order above 60 EUR</p>
        </div>
        <div className='flex flex-row bg-secondary w-full h-[100px] '>
            <ul className='flex flex-row items-center justify-around w-[40%] space-x-10 shadow-custom'>
                <li className='text-primary text-md font-bold cursor-pointer' onClick={() => navigate('/TimeRevolution')}>TIME REVOLUTION</li>
                <li className='text-primary text-md font-bold cursor-pointer'>SUPER AQUA</li>
            </ul>
            <div className='flex flex-row items-start justify-center bg-primary w-[20%] h-[150px] cursor-pointer' onClick={() => navigate('/')}>
                <img className='px-10' src = {Logo} alt="missha logo" />
            </div>
            <ul className='flex flex-row items-center justify-around w-[40%] shadow-custom'>
                <li className='text-primary text-md font-bold cursor-pointer'>ABOUT</li>
                <li className='text-primary text-md font-bold cursor-pointer'>CONTACT</li>
                <li className="text-primary font-bold text-[32px] cursor-pointer"><BsHandbag /></li>
            </ul>
        </div>
        
    </nav>
  )
}

export default Navbar

