import React from 'react'
import About from '../Components/About/About'
import Cards from '../Components/Cards/Cards'
import Footer from '../Components/footer/Footer'
import HersoSection from '../Components/HeroSection/HersoSection'
import KnowOurCommunity from '../Components/KnowOurCommunity/KnowOurCommunity'
import Navbar from '../Components/Navbar/Navbar'
import Profiles from '../Components/Profiles/Profiles'
import SocialIcons from '../Components/SocialIcons/SocialIcons'
import Stores from '../Components/Stores/Stores'

const HomePage = () => {
  return (
    <>
    <Navbar />
    <HersoSection />
    <Cards />
    <KnowOurCommunity />
    <Stores />
    <Profiles />
    <About />
    <Footer />
    <SocialIcons />

    </>
  )
}

export default HomePage