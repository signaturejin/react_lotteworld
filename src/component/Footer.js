import React from 'react'

const Footer = () => {
  return (
    <footer id='footer'>
      <section className='f-top'>
        <div className='center'>
            <ul className='f-menu'>
                <li><a href='#'>롯데월드 소개</a></li>
                <li><a href='#'>기업 제휴 및 입점 문의</a></li>
                <li><a href='#'>이용약관</a></li>
                <li><a href='#'><span>개인정보처리방침</span></a></li>
                <li><a href='#'>이메일무단수집거부</a></li>
                <li><a href='#'>Compliance Program</a></li>
                <li><a href='#'>사이트맵</a></li>
                <li><a href='#'>인재채용</a></li>
                <li><a href='#'>그룹PR</a></li>
                <li><a href='#'>(주)호텔롯데 소개</a></li>
            </ul>
        </div>
      </section>
      <section className='f-bot'>
        <div className='center'>
            <div className='left'>
                <div className='l-top'>
                    <img className='f-logo' src='/img/f-logo.png' alt='롯데월드 로고' />
                    <div className='info-copy'>
                        <div className='info'>
                            <div className='wrap'>
                                <address>서울특별시 송파구 올림픽로 240 호텔롯데 롯데월드</address>
                                <p>대표자:최홍훈</p>
                            </div>
                            <div className='wrap'>
                                <p>사업자등록번호:219-85-00014</p>
                                <p>통신판매업신고번호:송파 제5513호</p>
                                <p>전화:1661-2000</p>
                            </div>
                        </div>
                        <p className='copy'>COPYRIGHT 2023 LOTTEWORLD.ALL RIGHTS RESERVED.</p>
                    </div>
                </div>
                <div className='l-bot'>
                    <div className='f-wrap'>
                        <div className='f-icon'><img src='/img/f-icon1.png' alt='isms 로고' /></div>
                        <div>
                        <p><span>인승범위</span><span>온라인 예매 서비스 운영(롯데월드)</span></p>
                        <p><span>유효기간</span><span>2020.11.18~2023.11.17</span></p>
                        </div>
                    </div>
                    <div className='f-wrap'>
                        <div className='f-icon'><img src='/img/f-icon2.png' alt='명예의 전당 로고' /></div>
                        <p>한국서비스대상 명예의전당</p>
                    </div>
                </div>
            </div>
            <div className='right'>
                <div className='r-top'>
                    <ul className='f-sns'>
                        <li><a href='#'><img src='/img/f-sns1.png' alt='페이스북' /></a></li>
                        <li><a href='#'><img src='/img/f-sns2.png' alt='인스타그램' /></a></li>
                        <li><a href='#'><img src='/img/f-sns3.png' alt='유튜브' /></a></li>
                    </ul>
                    <select>
                        <option value=''>계열사 관련 사이트</option>
                    </select>
                </div>
                <div className='r-bot'>
                    <a href='#'><img src='/img/hotel-ad.jpg' alt='롯데월드 호텔 예약' /></a>
                </div>
            </div>
        </div>
      </section>
    </footer>
  )
}

export default Footer
