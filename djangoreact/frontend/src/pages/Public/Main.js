import React from 'react'
import BackgroundSlider from 'react-background-slider';

import main1 from '../../images/main1.jpg';
import main2 from '../../images/main2.jpg';
import main3 from '../../images/main3.jpg';

import logo from '../../images/logo.png';


const Main = () => {
const onClick = () => {
  console.log(localStorage.getItem('key'))
}
  return (
    <div className='Main'>
      {/* 로고 & 이미지 슬라이더 */}
      <img src={logo} className="img-fluid" alt="logo"></img>

      <BackgroundSlider
        images={[main1, main2, main3,]}
        duration={5} transition={2} />

        <button onClick={onClick}>눌러</button>
    </div>
  )
}

export default Main
