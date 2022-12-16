import React from 'react'
import Attraction from './Attraction'
import BannerSlide from './BannerSlide'
import Benefit from './Benefit'
import News from './News'
import ParkDate from './ParkDate'

const Container = () => {
  return (
    <div id='container'>
        <BannerSlide></BannerSlide>
        <ParkDate></ParkDate>
        <Benefit></Benefit>
        <Attraction></Attraction>
        <News></News>
    </div>
  )
}

export default Container
