import React from 'react'
import Footer from '../shared/Footer'
import Header from '../shared/Header'
import Banner from './Banner'
import ShowDoc from './ShowDoc'
import OurDoctors from './OurDoctors'
import OurServices from './OurServices'
import Review from './Review'
import SecBanner from './SecBanner'

const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      <OurServices />     
      <OurDoctors />
      <SecBanner />
      <Review />
      <ShowDoc />
      <Footer />
    </div>
  )
}

export default Home