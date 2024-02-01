import React from 'react'
import NavbarHome from './components/navbarHome'
import Footer from './components/footer'
import Navbar from './components/navbarHome'
import LandingPage from './LandingPage/page'

const Home = () => {

  return (
    <div className=' flex flex-col justify-between h-full'>
      <LandingPage />
    </div>

  )
}

export default Home