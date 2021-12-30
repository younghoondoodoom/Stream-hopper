import React from 'react';
import { Link } from "react-router-dom";
import { validLogin } from '../../api/api';
import { logout } from '../../api/api';

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
      {/* 변수명 명확하게, 2개 이상 줄바꿈 */}
      {/* 로고 & 이미지 슬라이더 */}
      <img 
        src={logo} 
        className="img-fluid" 
        alt="logo"></img>

      <BackgroundSlider
        images={[main1, main2, main3,]}
        duration={5} transition={2} />

      {/* 로그인/로그아웃 버튼 */}
      <div className='container'>
          {!auth?
            <Link to="/login"><button className="w-btn" type="button">로그인</button></Link>
            : null
          }

          {auth?
            <button className="w-btn" type="button" onClick={logout}>로그아웃</button>
            : null
          }
          <Link to="/register"><button className="w-btn w-btnreg" type="button" hidden={auth}>회원가입</button></Link>
          <div>
            <Link to="/intro"><button className="w-btn w-btnintro" type="button">서비스소개</button></Link>
          </div>
      </div>

    </div>

  
  )
}

export default HomePage
