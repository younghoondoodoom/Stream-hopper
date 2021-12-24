import React from 'react';
import { Route, Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import { authAtom } from '../store/userStore'

function PrivateRoute({ children, ...rest }) {
  const auth = useRecoilValue(authAtom);
  return (
    <Route
      {...rest}
      render={
        ({ location }) => (
          auth
            ? (
              children
            ) : (
              <Link
                to={{
                  pathname: '/login',
                  state: { from: location }
                }}
              />
            ))
      }
    />
  );
}

export default PrivateRoute;