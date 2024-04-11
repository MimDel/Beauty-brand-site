import React from 'react';
import AboutImg from '../assets/about_hero.png';

const HeroAbout = () => {
  return (
    <div className='w-full h-[450px] -mt-16 flex justify-center items-center'>
        <div className='relative w-full h-full'>
            <img src={AboutImg} alt="Missha technology" className='w-full h-full object-cover' />
            <div className="absolute inset-0 flex justify-center items-center">
                <div className="flex justify-center items-center w-[1000px] h-[215px] bg-gradient-to-r from-primary to-blue-500 opacity-60">
                    <p className="text-stroke text-xl font-bold">
                        BEAUTY IS NEVER A PRIVILEGE
                    </p>
                </div>
            </div>
        </div>
    </div>
  );
}

export default HeroAbout;