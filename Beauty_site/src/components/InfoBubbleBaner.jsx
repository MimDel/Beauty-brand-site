import React from 'react'
import InfoBubble from './InfoBubble'
import WomanAbout from '../assets/woman_about.jpg'

const InfoBubbleBaner = () => {
  return (
    <div className='flex w-full justify-center'>
        <div className='flex flex-row justify-evenly w-[80%]'>
            <div className='flex flex-col w-[50%] justify-evenly'>
                <InfoBubble
                    title="Triple Bio-concentration processing method" 
                    text="Extracted in gentle heat after going through
                    3 stages including freezing and a vacuum process, it is infused with highly concentrated 
                    ingredients of traditional herbal medicine to fully delivery effects to the skin."/>
                <InfoBubble
                    title="Low-temperature processing method (below 15℃)" 
                    text="It restores a healthy and revitalized
                    skin condition with rare, premium ingredients
                    extracted and concentrated at low temperatures."/>
            </div>
            <img className='w-[525px] h-[670px] rounded-lg' src={WomanAbout} alt="" />
        </div>
    </div>
  )
}

export default InfoBubbleBaner
