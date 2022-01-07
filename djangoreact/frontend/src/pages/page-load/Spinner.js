import React from "react";
import logo from "../../images/logo.png";
// 로딩 페이지
const Spinner = () => {
  return (
    <div className="Spinner">
      <div className="container">
        <img src={logo} alt="logo" className="img-fluid" />
        <h3>로딩중 입니다.</h3>
        <div className="spinner-grow text-success" role="status"></div>
        <div className="spinner-grow text-danger" role="status"></div>
        <div className="spinner-grow text-warning" role="status"></div>
      </div>
    </div>
  );
};

export default Spinner;
