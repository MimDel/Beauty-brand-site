import React from 'react'
import Logo from "../assets/logo.png";
import {useNavigate} from 'react-router-dom'

const AuthNavbar = () => {
    let navigate = useNavigate()

    return (
        <div className='flex justify-center items-center w-full h-[100px] bg-primary'>
            <div className='flex justify-start items-center w-[80%] h-[80px]'>
                <img src={Logo} alt="Missha logo" className='w-auto h-full cursor-pointer' onClick={() => navigate('/')}/>
            </div>
        </div>
    )
}

export default AuthNavbar
