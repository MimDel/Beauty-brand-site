import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import { useAuth } from '../contexts/AuthContext'

const LoginPage = () => {

    let navigate = useNavigate()
    const { login } = useAuth()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://localhost:3000/users/login', {
                email: email,
                password: password
            })
            
            const token = response.data.token;
            localStorage.setItem('token', token);
            
            console.log(response.data)
            login()
            navigate('/')
        } catch (error) {
            console.error('Login error: ', error)
            alert(error.response ? error.response.data.message : 'Login failed')
        }
        console.log("Attempting to log in with:", email, password);
    }

    return (
        <div className='flex justify-center items-center w-full h-[630px]'>
            <div className='flex flex-col justify-start items-start w-[370px] h-[500px] bg-primary text-white text-md py-4 px-6'>
                <p className='text-lg'>Log in</p>
                <div className='flex text-s mb-6 space-x-2'>
                    <p className='text-gray-500'>New user?</p>
                    <p className='cursor-pointer hover:text-gray-300' onClick={() => navigate('/Register')}>Create account</p>
                </div>
                <div className='flex flex-col justify-center w-full items-center text-gray-500 space-y-4 pt-6'>
                    <input 
                        type="email" 
                        className='w-full bg-white p-2' 
                        placeholder='Email '
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <input 
                        type="password" 
                        className='w-full bg-white p-2' 
                        placeholder='Password'
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                </div>
                <div className='text-center w-full bg-white text-primary font-semibold my-10 cursor-pointer hover:bg-gray-300' onClick={handleLogin}>Log in</div>
                <p className='cursor-pointer text-s pt-6 hover:text-gray-300'>Forgot password?</p>
            </div>
        </div>
    )
}

export default LoginPage
