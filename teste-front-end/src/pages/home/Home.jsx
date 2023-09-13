import React from 'react'
import './home.scss'

import Header from './components/header/Header'
import Banner from './components/banner/Banner'

function Home() {
  return (
    <div className="home">
      <Header />
      <Banner />
    </div>
  )
}

export default Home
