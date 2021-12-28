import React from 'react'
import BackgroundSlider from 'react-background-slider';

import main1 from '../../images/main1.jpg';
import main2 from '../../images/main2.jpg';
import main3 from '../../images/main3.jpg';

import logo from '../../images/logo.png';


import { logout } from '../../api/api';

const Main = () => {


  return (
    <div className='Main'>

      <BackgroundSlider
        images={[main1, main2, main3,]}
        duration={5} transition={2} />


      <div className='container'>
        
        <div className='inputDiv'>
          <input type="text" placeholder='제목, 감독, 배우, 영화를 입력하세요' />
          
        </div>
        
        
        <h1>TOP rated</h1>
        
      </div>


    </div>
  )
}

export default Main
