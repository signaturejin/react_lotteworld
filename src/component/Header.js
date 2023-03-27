import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import GnbMenu from './GnbMenu'
import GnbWrap from './GnbWrap'
// import { Link } from 'react-router-dom'

const Header = () => {
    
    useEffect(()=>{
    
      const header = document.querySelector("#header");
      const cont2 = document.querySelector(".bannerSlide");

      window.addEventListener("scroll",()=>{

        let scTop = window.scrollY;
        let cont2Top = cont2.offsetTop;

        if(scTop >= 146){
            header.classList.add("on");
        }
        else {
            header.classList.remove("on");
        }

      });
    })

  return (
    <header id='header'>
        <section className='h-top'>
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
        </section>
        <section className='h-bot'>
            <div className='center'>
                <h1 className='logo'><Link to={"/"}><img src='/img/logo.png' alt="롯데월드"/></Link></h1>
                {/* <div className='gnb_wrap'>
                    <GnbMenu></GnbMenu>
                    <div className='gnb_bg'>

                    </div>
                </div> */}
                <GnbWrap></GnbWrap>
                <ul className='b-r-ul'>
                    <li><a href='#'><img src='/img/h-icon1.png' alt='검색' /><p>검색</p></a></li>
                    <li><a href='#'><img src='/img/h-icon2.png' alt='예매' /><p>예매</p></a></li>
                    <li><a href='#'><img src='/img/h-icon3.png' alt='단체' /><p>단체</p></a></li>
                    <li><a href='#'><img src='/img/h-icon4.png' alt='기업체' /><p>기업체</p></a></li>
                    <li><a href='#'><img src='/img/h-icon5.png' alt='상품몰' /><p>상품몰</p></a></li>
                </ul>
            </div>
        </section>
    </header>
  )
}

export default Header
