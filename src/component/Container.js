import React from 'react'
import Attraction from './Attraction'
import BannerSlide from './BannerSlide'
import Benefit from './Benefit'
import News from './News'
import Parade from './Parade'
import ParkDate from './ParkDate'

const Container = () => {
  return (
    <main id='container'>
        <BannerSlide></BannerSlide>
        <ParkDate></ParkDate>
        <Benefit></Benefit>
        <Parade></Parade>
        <Attraction></Attraction>
        <News></News>
    </main>
  )
}

export default Container
