import React from "react";
import logo from "../../images/logo2.png";
// 에러 페이지
const NotFound = () => {
  return (
    <div>
      <h1 style={{ paddingTop: "100px" }}>Page Not Found 404</h1>
      <img src={logo} alt="logo" />
      <h3>잘못된 접근경로 입니다.</h3>
    </div>
  );
};

export default NotFound;
