import React from 'react'
import { gnbMenu } from '../data/gnbData'
import GnbMenu from './GnbMenu'

const GnbWrap = () => {
  return (
    <div className='gnbWrap'>
        {/* depth1 */}
        <GnbMenu></GnbMenu>
        <div className='gnbBg'>
            {/* left */}
            {/* <div className='left'>
                <img src='/img/gnb-timer.png' />
            </div> */}

            {/* mid */}
            <ul className='sub'>
                {
                    gnbMenu.map((gnb,index)=>{
                        gnb.depth2.map((sub,index)=>{
                            return(
                                <li key={index}><a href='#'>{sub}</a></li>
                            )
                        })
                    })
                }
            </ul>
        </div>
    </div>
  )
}

export default GnbWrap
