import React from 'react'
import HeroHome from '../components/HeroHome'
import InfoCircleBanner from '../components/InfoCircleBanner'
import InfoBeauty from '../components/InfoBeauty'
import BestSellersContainer from '../components/BestSellersContainer'
import ImageMasonry from '../components/ImageMasonry'


const LandingPage = () => {
  return (
    <div>
      <HeroHome />
      <InfoCircleBanner />
      <InfoBeauty />
      <BestSellersContainer />
      <ImageMasonry/>
    </div >
  )
}

export default LandingPage
