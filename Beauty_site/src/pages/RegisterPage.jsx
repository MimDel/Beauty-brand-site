import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import { useAuth } from '../contexts/AuthContext'

const RegisterPage = () => {

    let navigate = useNavigate()

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const {login} = useAuth()

    const handleRegister = async () => {
        if (password !== confirmPassword) {
            setErrorMessage("Passwords do not match.");
            return; // Stop the registration process
        }
        setErrorMessage(''); // Clear any previous errors
        // Proceed with further actions here, like making an API call to register the user

        try {
            const response = await axios.post('http://localhost:3000/users/register', {
                email: email,
                password: password
            })
            console.log('Registration successful: ', response.data)
            login()
            navigate('/')
        } catch (error) {
            console.error('Registration error: ', error)
            setErrorMessage(error.response ? error.response.data.message : 'Registration failed')
        }
    };

    return (
        <div className='flex justify-center items-center w-full h-[630px]'>
            <div className='flex flex-col justify-start items-start w-[370px] h-[500px] bg-primary text-white text-md py-4 px-6'>
                <p className='text-lg'>Register</p>
                <div className='flex text-s mb-6 space-x-2'>
                    <p className='text-gray-500'>Already have an account?</p>
                    <p className='cursor-pointer hover:text-gray-300' onClick={() => navigate('/Login')}>Log in</p>
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
                    <input 
                        type="password" 
                        className='w-full bg-white p-2'
                        placeholder='Confirm password'
                        value={confirmPassword}
                        onChange={e => setConfirmPassword(e.target.value)}
                    />
                </div>
                <div className='text-center w-full bg-white text-primary font-semibold my-10 cursor-pointer hover:bg-gray-300' onClick={handleRegister}>Register</div>
                <p className='cursor-pointer text-s pt-6 hover:text-gray-300'>Forgot password?</p>
                {errorMessage && <p className='text-red-500 text-sm'>{errorMessage}</p>}
            </div>
        </div>
    )
}

export default RegisterPage
