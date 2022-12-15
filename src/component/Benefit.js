import React from 'react'
import { benefit } from '../data/bnfitData'

const Benefit = () => {
  return (
    <div className='benefit'>
        <div className='center'>
            <h2 className='title'><span>나에게 꼭 맞는 혜택</span> 알아볼까요?</h2>
            <p>현재 진행 중인 할인혜택을 알아보세요.</p>
            <div className='list-wrap'>
                {
                    benefit.map((item,index)=>{
                        return(
                            <div className='list'>
                                <a href='#'>
                                    <img src={`/img/bene${index + 1}.jpg`} />
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
    </div>
  )
}

export default Benefit
