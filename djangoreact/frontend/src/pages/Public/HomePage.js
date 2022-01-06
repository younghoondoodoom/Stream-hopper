import React from "react";
import { Link } from "react-router-dom";
import { validLogin, signOut } from "../../api/api";

//슬라이드 라이브러리
import BackgroundSlider from "react-background-slider";

//이미지
import main1 from "../../images/main1.jpg";
import main2 from "../../images/main2.jpg";
import main3 from "../../images/main3.jpg";
import logo from "../../images/logo.png";
import { useRecoilValue } from "recoil";

const HomePage = () => {
  const isLogin = useRecoilValue(validLogin);

  function handleSignOut() {
    signOut();
    localStorage.removeItem("key");
    window.location.replace("/");
  }

  return (
    <div className="HomePage container">
      {/* 로고 & 이미지 슬라이더 */}
      <img src={logo} className="img-fluid" alt="logo"></img>

      <BackgroundSlider
        className="background"
        images={[main1, main2, main3]}
        duration={5}
        transition={2}
      />

      {/* 로그인/로그아웃 버튼 */}
      <div className="container">
        {!isLogin ? (
          <Link to="/login">
            <button className="w-btn" type="button">
              로그인
            </button>
          </Link>
        ) : null}

        {isLogin ? (
          <button className="w-btn" type="button" onClick={handleSignOut}>
            로그아웃
          </button>
        ) : null}
        <Link to="/register">
          <button className="w-btn w-btnreg" type="button" hidden={isLogin}>
            회원가입
          </button>
        </Link>
        <div>
          <Link to="/main">
            <button className="w-btn w-btnintro" type="button">
              go Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
