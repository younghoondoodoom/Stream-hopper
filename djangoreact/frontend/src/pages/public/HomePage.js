import React from "react";
import { Link } from "react-router-dom";
import { validLogin, signOut } from "../../api/api";
import BackgroundSlider from "react-background-slider";
import main1 from "../../images/main1.jpg";
import main2 from "../../images/main2.jpg";
import main3 from "../../images/main3.jpg";
import logo from "../../images/logo.png";
import { useRecoilValue } from "recoil";

const HomePage = () => {
  const isLogin = useRecoilValue(validLogin);

  const handleSignOut = () => {
    signOut();
    localStorage.removeItem("key");
    window.location.replace("/");
  };

  return (
    <div className="HomePage container">
      <img src={logo} className="img-fluid" alt="logo"></img>

      <BackgroundSlider
        className="background"
        images={[main1, main2, main3]}
        duration={5}
        transition={2}
      />

      <div className="container">
        {!isLogin ? (
          <Link to="/login">
            <button className="w-btn" type="button">
              로그인
            </button>
          </Link>
        ) : null}

        <div>
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
        </div>

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
