import React from "react";
import { Navigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { validLogin } from "../../api/api";

//로그인 유무에 따른 페이지 권한 제한
const PrivateRoute = ({ children }) => {
  const isLogin = useRecoilValue(validLogin);

  if (!isLogin) {
    return <Navigate to="/login" />;
  }
  return children;
};

export default PrivateRoute;
