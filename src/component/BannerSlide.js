import { bannerCount } from '../data/bannerData';

import React, { useEffect, useRef, useState } from "react";
import { Autoplay, Controller } from 'swiper';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

const BannerSlide = () => {

  useEffect(()=>{

    const prevBtn = document.querySelector(".swiper-button-prev");
    const nextBtn = document.querySelector(".swiper-button-next");
    prevBtn.style.backgroundImage = "url(/img/prev-btn.png)";
    nextBtn.style.backgroundImage = "url(/img/next-btn.png)";

  });

  return (
    <section className='bannerSlide'>
        <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        navigation={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination = {{clickable: true}}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        >
        {
            bannerCount.map((item,index)=>{
                return(
                    <SwiperSlide key={index}>
                        <a href='#'><img src={`/img/banner${index + 1}.jpg`} alt='배너 이미지' /></a>
                    </SwiperSlide>
                )
            })
        }
        </Swiper>
    </section>
  )
}

export default BannerSlide
