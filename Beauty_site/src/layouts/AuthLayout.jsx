import React from 'react'
import AuthNavbar from '../components/AuthNavbar'
import AuthFooter from '../components/AuthFooter'

const AuthLayout = ({children}) => {
    return (
        <div>
        <AuthNavbar />
        {children}
        <AuthFooter />
        </div>
    )
}

export default AuthLayout
