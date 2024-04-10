import React from 'react'

const TagComponent = ({title}) => {
    return (
        <div className='border-4 border-primary rounded-full text-md px-10 font-bold text-primary'>
            {title}
        </div>
    )
}

export default TagComponent
