import React from 'react'
import './home.scss'

import Header from './components/header/Header'
import Banner from './components/banner/Banner'
import Content from './components/content/MainContent'

function Home() {
  return (
    <div className="home">
      <Header />
      <Banner />
      <Content />
    </div>
  )
}

export default Home
