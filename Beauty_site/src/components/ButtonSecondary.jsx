import React from 'react'

const ButtonSecondary = ({title, isActive}) => {
    return (
        <div>
            <div className={`
            rounded border-primary border-2 px-16 py-1 cursor-pointer text-center text-md
            ${isActive ? 'hover:bg-transparent hover:text-primary hover:font-semibold hover:border-primary hover:border-2':'bg-primary text-white'}
            `}>
                {title}
            </div>
        </div>
    )
}

export default ButtonSecondary
