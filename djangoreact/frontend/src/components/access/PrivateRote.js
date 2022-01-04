import React from "react";
import { Navigate } from "react-router-dom";
import { useRecoilValue } from "recoil";

import { validLogin } from "../../api/api";

//로그인 하지 않으면 페이지 권한을 제한
const PrivateRoute = ({ children }) => {
  const isLogin = useRecoilValue(validLogin);

  // localstorage에 값이 유효한지 확인 후 유효하지 않으면 login 페이지로 이동
  if (!isLogin) {
    return <Navigate to="/login" />;
  }
  return children;
};

export default PrivateRoute;
