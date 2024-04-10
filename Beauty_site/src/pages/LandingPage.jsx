import React from 'react'
import Navbar from '../components/Navbar'
import HeroHome from '../components/HeroHome'
import InfoCircleBanner from '../components/InfoCircleBanner'
import InfoBeauty from '../components/InfoBeauty'
import BestSellersContainer from '../components/BestSellersContainer'

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <HeroHome />
      <InfoCircleBanner />
      <InfoBeauty />
      <BestSellersContainer />
    </div>
  )
}

export default LandingPage
