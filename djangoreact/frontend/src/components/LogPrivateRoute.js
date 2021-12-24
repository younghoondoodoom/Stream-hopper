import React from 'react';
import { Navigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import { authAtom } from '../store/userStore'

const PrivateRoute = ({ children }) => {

  const auth = useRecoilValue(authAtom);
  

  if (auth) {
    return <Navigate to="/main" />;
  }

  return children;
};

export default PrivateRoute;