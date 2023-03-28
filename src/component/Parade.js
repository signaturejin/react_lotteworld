import React, { useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import { paradeData } from '../data/paradeData';

function Parade() {

  return (
    <section className='parade' style={{backgroundImage: "url(/img/parade_bg.jpg)"}}>
        <div className='center'>
            <h2 className='title' data-aos="fade-up" data-aos-duration="500" data-aos-delay="1000"><span>다양한 공연 및 퍼레이드</span> 정보를 한눈에!</h2>
            <p data-aos="fade-up" data-aos-duration="500" data-aos-delay="1100">다양한 공연정보를 확인해보세요.</p>

            <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={20}
            slidesPerView={6}
            scrollbar={{ draggable: true }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            >
                
            {
                paradeData.map((item,index)=>{
                    return(
                        <SwiperSlide>
                            <div className='swiper_box' data-aos="fade-up" data-aos-duration="500" data-aos-delay="1300">
                                <a href='#'>
                                    <img src={`/img/parade${index + 1}.jpg`}></img>
                                    <h3 className='pr_title'>{item}</h3>
                                </a>
                            </div>
                        </SwiperSlide>
                    )
                })
            }
            </Swiper>
        </div>
    </section>
  )
}

export default Parade