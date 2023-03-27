import React from 'react'
import { gnbMenu } from '../data/gnbData'

const GnbMenu = () => {
  return (
    <nav className='gnb'>
      <ul>
          {/* map이나 스크립트 문법 같은 것을 쓰려면 {}안에 써줘야함 */}
          {
              gnbMenu.map((item,index)=>{
                  // 태그 나오게 하려면 return 써주기
                  return(
                      <li key={index}><a href='#'>{item.depth1}</a></li>
                  )
              })
          }
      </ul>
    </nav>
  )
}

export default GnbMenu
