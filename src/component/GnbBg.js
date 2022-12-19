import React from 'react'

const GnbBg = () => {
  return (
    <div className='gnbBg'>
        <div className='center'>
            <div className='left'>
                <div className='l-left'>
                    <img src='/img/gnb-timer.png' />
                    <h3 className='date-title'>오늘의 파크<br/><span>운영시간</span></h3>
                    <p className='date'>10:00 - 22:00</p>
                </div>
                <div className='l-right'>
                    {/* sub */}
                    서브메뉴
                </div>
            </div>
            <div className='right' style={{backgroundImage:"url(/img/gnb_bg.jpg)"}}>
                <h3 className='right-title'><span>앱 다운로드</span>로<br/>더 스마트하게!</h3>
                <ul>
                    <li><a href='#'>모바일 예매</a></li>
                    <li><a href='#'>모바일 티켓발권</a></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default GnbBg
