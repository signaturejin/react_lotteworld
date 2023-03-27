import React from 'react'
import { benefit } from '../data/bnfitData'

const Benefit = () => {
  return (
    <section className='benefit'>
        <div className='center'>
            <h2 className='title' data-aos="fade-up" data-aos-duration="500" data-aos-delay="1000"><span>나에게 꼭 맞는 혜택</span> 알아볼까요?</h2>
            <p data-aos="fade-up" data-aos-duration="500" data-aos-delay="1100">현재 진행 중인 할인혜택을 알아보세요.</p>
            <div className='list-wrap' data-aos="fade-up" data-aos-duration="500" data-aos-delay="1200">
                {
                    benefit.map((item,index)=>{
                        return(
                            <div className='list'>
                                <a href='#'>
                                    <img src={`/img/bene${index + 1}.jpg`} alt={item.title} />
                                    <p className='price'>{item.price}</p>
                                    <h3 className='sub-title'>{item.title}</h3>
                                </a>
                            </div>
                        )
                    })
                }
            </div>
            <a className='more-btn' href='#'>더 많은 혜택 보기</a>
        </div>
    </section>
  )
}

export default Benefit
