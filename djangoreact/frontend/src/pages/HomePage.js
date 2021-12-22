import React from 'react';
import { Link } from "react-router-dom";
import BackgroundSlider from 'react-background-slider';

import main1 from '../images/main1.jpg';
import main2 from '../images/main2.jpg';
import main3 from '../images/main3.jpg';

import logo from '../images/logo.png';

const HomePage = () => {
  return (
    <div className='HomePage container'>

      <img src={logo} className="img-fluid" alt="logo"></img>

      <BackgroundSlider
        images={[main1, main2, main3,]}
        duration={5} transition={2} />

      <div className='container'>
          <Link to="/login"><button className="w-btn" type="button">로그인</button></Link>
          <Link to="/register"><button className="w-btn w-btnreg" type="button">회원가입</button></Link>
        
          <div>
            <Link to="/intro"><button className="w-btn w-btnintro" type="button">서비스소개</button></Link>
          </div>
      </div>

    </div>

    
  )
}

export default HomePage
