import React from "react";
import logo from "../../images/logo.png";
import intro1 from "../../images/intro1.png";

const Intro = () => {
  return (
    <div className="Intro">
      <img src={logo} alt="logo" className="logo" />

      <h3>서비스 소개</h3>
      <img src={intro1} alt="intro1" className="img-fluid" />
    </div>
  );
};

export default Intro;
