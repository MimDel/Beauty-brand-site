import React from 'react'

const Button = ({title}) => {
  return (
    <div className='bg-primary text-md text-white shadow-custom px-10 py-1'>
      {title}
    </div>
  )
}

export default Button
