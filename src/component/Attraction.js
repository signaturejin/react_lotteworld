import React, { useEffect } from 'react'
import { tData1, tData2, tData3 } from '../data/tabMenuData'

const Attraction = () => {

  useEffect(()=>{
    const menu = document.querySelectorAll(".tab-menu li");
    const tabBox = document.querySelectorAll(".tab-wrap .tab-box");

    menu.forEach((item,index)=>{
        item.addEventListener("click",(e)=>{
            //페이지 이동 방지
            e.preventDefault();

            //비활성화
            menu.forEach((item,index)=>{
                item.classList.remove("on");
                tabBox[index].classList.remove("on");
            });
            item.classList.add("on");
            tabBox[index].classList.add("on");
        });
    });

  })

  return (
    <section className='attraction' style={{backgroundImage: "url(/img/attr_bg.jpg)"}}>
      <div className='center'>
        <h2 className='title' data-aos="fade-up" data-aos-duration="500" data-aos-delay="1100">재미있고 즐거운 <span>다양한 어트랙션!</span></h2>
        <ul className='tab-menu' data-aos="fade-up" data-aos-duration="500" data-aos-delay="1200">
            <li className='on'><a href='#'>아이와 함께</a></li>
            <li><a href='#'>야외에서 신나게</a></li>
            <li><a href='#'>실내에서 쾌적하게</a></li>
        </ul>
        <div className='tab-wrap' data-aos="fade-up" data-aos-duration="500" data-aos-delay="1300">
            <div className='tab-box on'>
                {
                    tData1.map((item,index)=>{
                        return(
                            <div className='list' key={index}>
                                <a href='#'>
                                    <img src={`/img/tab1-${index + 1}.jpg`} alt={item.title}/>
                                    <h3 className='ride-title'>{item.title}</h3>
                                    <p className='text'>{item.text}</p>
                                </a>
                            </div>
                        )
                    })
                }
            </div>
            <div className='tab-box'>
                {
                    tData2.map((item,index)=>{
                        return(
                            <div className='list' key={index}>
                                <a href='#'>
                                    <img src={`/img/tab2-${index + 1}.jpg`} />
                                    <h3 className='ride-title'>{item.title}</h3>
                                    <p className='text'>{item.text}</p>
                                </a>
                            </div>
                        )
                    })
                }
            </div>
            <div className='tab-box'>
                {
                    tData3.map((item,index)=>{
                        return(
                            <div className='list' key={index}>
                                <a href='#'>
                                    <img src={`/img/tab3-${index + 1}.jpg`} />
                                    <h3 className='ride-title'>{item.title}</h3>
                                    <p className='text'>{item.text}</p>
                                </a>
                            </div>
                        )
                    })
                }
            </div>
        </div>
      </div>
    </section>
  )
}

export default Attraction
