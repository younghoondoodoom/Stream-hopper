import React from "react";
import { Navigate } from "react-router-dom";
import { useRecoilValue } from "recoil";

//로그인 후 페이지 권한을 제한
import { validLogin } from "../../api/api";

const PrivateRoute = ({ children }) => {
  const auth = useRecoilValue(validLogin);

  if (auth) {
    return <Navigate to="/main" />;
  }

  return children;
};

export default PrivateRoute;
