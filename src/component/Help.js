import React, { useEffect } from 'react'

const Help = () => {

  useEffect(()=>{
    const top = document.querySelector("#help .bot p");
    console.log(top);

    top.addEventListener("click",()=>{

      window.scrollTo({
        top: 0,
        behavior: "smooth"
      })
    });
  })

  return (
    <div id='help'>
      <div className='top'>
        <a href='#'><img src='/img/chatbot.png' /></a>
      </div>
      <div className='mid'>
        <a href='#'>
            <img src='/img/quick_btn.png' />
            <p className='q1'>QUICK</p>
            <p className='q2'>QUICK</p>
        </a>
      </div>
      <div className='bot'>
        <p>TOP</p>
      </div>
    </div>
  )
}

export default Help