import React from 'react'
import { BsHandbag } from "react-icons/bs";
import Logo from "../assets/logo.png";
import {useNavigate} from 'react-router-dom'
import { CgProfile } from "react-icons/cg";
import { useAuth } from '../contexts/AuthContext';
import { IoIosLogOut } from "react-icons/io";

const Navbar = () => {

    let navigate = useNavigate()
    const { isLoggedIn, logout } = useAuth()

    const handleLogout = () => {
        logout()
        navigate('/Login')
    }

  return (
    <nav className="flex flex-col items-center w-full h-[200px] sticky top-0 z-50">
        <div className="flex items-center justify-center bg-primary w-full h-[45px] text-white">
            <p className='text-md' >Free shipping on order above 100 EUR</p>
        </div>
        <div className='flex flex-row bg-secondary w-full h-[100px] '>
            <ul className='flex flex-row items-center justify-around w-[40%] space-x-10 shadow-custom'>
                <li className='text-primary text-md font-bold cursor-pointer' onClick={() => navigate('/TimeRevolution')}>TIME REVOLUTION</li>
                <li className='text-primary text-md font-bold cursor-pointer' onClick={() => navigate('/SuperAqua')}>SUPER AQUA</li>
            </ul>
            <div className='flex flex-row items-start justify-center bg-primary w-[20%] h-[150px] cursor-pointer' onClick={() => navigate('/')}>
                <img className='px-10' src = {Logo} alt="missha logo" />
            </div>
            <ul className='flex flex-row items-center justify-around w-[40%] shadow-custom'>
                <li className='text-primary text-md font-bold cursor-pointer' onClick={()=>navigate('/About')}>ABOUT</li>
                <li className='text-primary text-md font-bold cursor-pointer'>CONTACT</li>
                <ul className='flex flex-row space-x-6'>
                    <li className="text-primary font-bold text-[32px] cursor-pointer" onClick={()=>navigate('/ShoppingCart')}><BsHandbag /></li>
                    {isLoggedIn ? (
                        <li className="text-primary font-bold text-[32px] cursor-pointer" onClick={() => handleLogout()}><IoIosLogOut /></li> // Logout button if logged in
                    ) : (
                        <li className="text-primary font-bold text-[32px] cursor-pointer" onClick={()=>navigate('/Login')}><CgProfile /></li> // Login button if not logged in
                    )}
                </ul>
            </ul>
        </div>
        
    </nav>
  )
}

export default Navbar

