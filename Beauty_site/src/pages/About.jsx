import React from 'react'
import Navbar from '../components/Navbar'
import HeroAbout from '../components/HeroAbout'
import BrandStory from '../assets/missha_brand_story.mp4'
import VideoPoster from '../assets/video_poster.png'
import TextDevider from '../components/TextDevider'

const About = () => {
  return (
    <div>
      <Navbar />
      <HeroAbout />
      <div className='flex flex-col justify-center items-center my-20 w-full'>
        <div className='flex flex-col items-end w-[60%]'>
          <video controls poster={VideoPoster} src={BrandStory}></video>
            <p className='text-primary text-lg font-semibold mt-3'>Beauty that begins with the customer</p>
        </div>
      </div>
      <TextDevider />
    </div>
  )
}

export default About
