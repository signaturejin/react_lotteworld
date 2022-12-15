import React from 'react'
import { Link } from 'react-router-dom'
import GnbMenu from './GnbMenu'
import GnbWrap from './GnbWrap'
// import { Link } from 'react-router-dom'

const header = () => {
  return (
    <div id='header'>
        <div className='h-top'>
            <div className='center'>
                <div className='left'>
                    <ul>
                        <li><a href='https://seoulsky.lotteworld.com/ko/main/index.do' target="_blank"><img src='/img/h-top1.png' /><span>SEOUL SKY</span></a></li>
                        <li><a href='http://www.lotteworld.com/aquarium/index.asp' target="_blank"><img src='/img/h-top2.png' /><span>롯데월드 아쿠아리움</span></a></li>
                        <li><a href='http://www.lotteworld.com/waterpark/index.asp' target="_blank"><img src='/img/h-top3.png' /><span>김해롯데워터파크</span></a></li>
                        <li><a href="https://adventurebusan.lotteworld.com/kor/main/index.do" target="_blank"><img src='/img/h-top4.png' /><span>롯데월드 어드벤처 부산</span></a></li>
                    </ul>
                </div>
                <div className='right'>
                    <ul className='l-ul'>
                        <li><a href='#'>민속박물관</a></li>
                        <li><a href='#'>아이스링크</a></li>
                    </ul>
                    <ul className='r-ul'>
                        <li><a href='#'>Login</a></li>
                        <li><a href='#'>회원가입</a></li>
                    </ul>
                    <select className='language'>
                        <option value=''>KOR</option>
                        <option value=''>ENG</option>
                        <option value=''>CHN(Traditional)</option>
                        <option value=''>CHN(Simplified)</option>
                        <option value=''>JPN</option>
                    </select>
                </div>
            </div>
        </div>
        <div className='h-bot'>
            <div className='center'>
                <h1 className='logo'><Link to={"/"}><img src='/img/logo.png' /></Link></h1>
                {/* <div className='gnb_wrap'>
                    <GnbMenu></GnbMenu>
                    <div className='gnb_bg'>

                    </div>
                </div> */}
                <GnbWrap></GnbWrap>
                <ul className='b-r-ul'>
                    <li><a href='#'><img src='/img/h-icon1.png' /><p>검색</p></a></li>
                    <li><a href='#'><img src='/img/h-icon2.png' /><p>예매</p></a></li>
                    <li><a href='#'><img src='/img/h-icon3.png' /><p>단체</p></a></li>
                    <li><a href='#'><img src='/img/h-icon4.png' /><p>기업체</p></a></li>
                    <li><a href='#'><img src='/img/h-icon5.png' /><p>상품몰</p></a></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default header
