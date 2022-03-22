import React from 'react'
import Footer from '../shared/Footer'
import Header from '../shared/Header'
import Banner from './Banner'
import OurDoctors from './OurDoctors'
import OurServices from './OurServices'
import SecBanner from './SecBanner'

const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      <OurServices />
      <SecBanner />
      <OurDoctors />
      <Footer />
    </div>
  )
}

export default Home