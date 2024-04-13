import React from 'react'

const InfoBubble = ({title, text}) => {
  return (
    <div className='flex flex-col border-2 border-secondary rounded-lg items-center p-8'>
       <div className=''>
            <p className='text-lg leading-tight font-semibold mb-6'>{title}</p>
            <p className='text-md'>{text}</p>
       </div>
    </div>
  )
}

export default InfoBubble
