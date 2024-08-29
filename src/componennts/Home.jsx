import React from 'react'
import NavBar from './NavBar'
import UnitingPage from '../pages/UnitingPage'
import SocailProofSection from '../pages/SocailProofSection'
import TheadvantageSection from '../pages/TheadvantageSection'
import ShopifySection from '../pages/ShopifySection'
import FaqsSection from '../pages/FaqsSection'

const Home = () => {
  return (
    <div>
        <NavBar/>
        <UnitingPage/>
        <SocailProofSection/>
        <TheadvantageSection/>
        <ShopifySection/>
        <FaqsSection/>
    </div>
  )
}

export default Home