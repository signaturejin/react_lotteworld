import React from 'react'

const News = () => {
  return (
    <section className='news'>
        <div className='center'>
            <h2 className='title' data-aos="fade-up" data-aos-duration="500" data-aos-delay="1500">롯데월드를 좀 더<br/><span>특별하게 즐기고 싶다면!</span></h2>
            <p data-aos="fade-up" data-aos-duration="500" data-aos-delay="1600">오늘 롯데월드의 소식을 만나보세요.</p>
            <div className='exper'>
                <h3 className='sub-title' data-aos="fade-up" data-aos-duration="500" data-aos-delay="1700">특별한 경험</h3>
                <div className='list-wrap' data-aos="fade-up" data-aos-duration="500" data-aos-delay="1800">
                    <div className='list'>
                        <a href='#'>
                            <img src='/img/exper1.jpg' alt='로티로리룸' />
                            <p>롯데호텔 월드 로티로리룸</p>
                        </a>
                    </div>
                    <div className='list'>
                        <a href='#'>
                            <img src='/img/exper2.jpg' alt='프리미엄 라운지' />
                            <p>샤론캣 프리미엄라운지</p>
                        </a>
                    </div>
                    <div className='list'>
                        <a href='#'>
                            <img src='/img/exper3.jpg' alt='어드벤처 선물권' />
                            <p>롯데월드 어드벤처 선물권</p>
                        </a>
                    </div>
                    <div className='list'>
                        <a href='#'>
                            <img src='/img/exper4.jpg' alt='연간이용안내' />
                            <p>연간이용안내</p>
                        </a>
                    </div>
                </div>
                <article className='bot' data-aos="fade-up" data-aos-duration="500" data-aos-delay="1900">
                    <section className='notice'>
                        <div className='n-top'>
                            <h3 className='sub-title'>롯데월드 소식</h3>
                            <a className='more-btn' href='#'>더보기<img src='/img/more-btn.png' alt='더보기 버튼'/></a>
                        </div>
                        <div className='list-wrap'>
                            <div className='list'>
                                <a href='#'>
                                    <h4 className='list-title'>마법 성냥과 꿈꾸는 밤</h4>
                                    <p className='date'>2023.01.28</p>
                                </a>
                            </div>
                            <div className='list'>
                                <a href='#'>
                                    <h4 className='list-title'>매직패스 프리미엄 운영 변경 안내</h4>
                                    <p className='date'>2023.01.20</p>
                                </a>
                            </div>
                            <div className='list'>
                                <a href='#'>
                                    <h4 className='list-title'>2023 산타의 미라클 프레젠트</h4>
                                    <p className='date'>2023.01.11</p>
                                </a>
                            </div>
                            <div className='list'>
                                <a href='#'>
                                    <h4 className='list-title'>개인정보처리방침 변경 안내</h4>
                                    <p className='date'>2023.01.08</p>
                                </a>
                            </div>
                        </div>
                    </section>
                    <figure className='ad'>
                        <a href='#'><img src='/img/app-download.jpg' alt='앱 다운로드'/></a>
                    </figure>
                </article>
            </div>
        </div>
    </section>
  )
}

export default News
