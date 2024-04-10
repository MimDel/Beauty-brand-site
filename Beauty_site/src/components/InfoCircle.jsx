import React from 'react';

const InfoCircle = ({title, description}) => {
  return (
    <div className="flex flex-col items-center justify-center border-8 border-tertiary rounded-full w-[340px] min-h-[340px] p-8 text-center">
      <h1 className='text-lg font-bold'>{title}</h1>
      <p className='text-md pt-4'>{description}</p>
    </div>
  );
}

export default InfoCircle;