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
      <div>
        <h4>찾고싶은 영화를 검색하세요.</h4>
        <input type="text" />
      </div>


    </div>
  )
}

export default Main
