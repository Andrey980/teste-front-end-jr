import React from 'react'
import './home.scss'

import Header from './components/header/Header'
import Banner from './components/banner/Banner'
import Content from './components/content/MainContent'
import Footer from './components/footer/Footer'

function Home() {
  return (
    <div className="home">
      <Header />
      <Banner />
      <Content />
      <Footer />
    </div>
  )
}

export default Home
