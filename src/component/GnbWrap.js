import React from 'react'
import { gnbMenu } from '../data/gnbData'
import GnbMenu from './GnbMenu'

const GnbWrap = () => {
  return (
    <div className='gnbWrap'>
        {/* depth1 */}
        <GnbMenu></GnbMenu>
    </div>
  )
}

export default GnbWrap
