import React from 'react';
import { Link } from "react-router-dom";
import { validLogin } from '../../api/api';

//슬라이드 라이브러리
import BackgroundSlider from 'react-background-slider';

//이미지
import main1 from '../../images/main1.jpg';
import main2 from '../../images/main2.jpg';
import main3 from '../../images/main3.jpg';
import logo from '../../images/logo.png';
import { useRecoilValue } from 'recoil';


const HomePage = () => {
  const auth = useRecoilValue(validLogin)
  return (
    <div className='HomePage container'>

      {/* 로고 & 이미지 슬라이더 */}
      <img src={logo} className="img-fluid" alt="logo"></img>

      <BackgroundSlider
        images={[main1, main2, main3,]}
        duration={5} transition={2} />

      {/* 버튼 컴포넌트 */}
      <div className='container'>
          <Link to="/login"><button className="w-btn" type="button" hidden={auth}>로그인</button></Link>
          <Link to="/register"><button className="w-btn w-btnreg" type="button" hidden={auth}>회원가입</button></Link>
          <div>
            <Link to="/intro"><button className="w-btn w-btnintro" type="button">서비스소개</button></Link>
          </div>
      </div>

    </div>

  
  )
}

export default HomePage
