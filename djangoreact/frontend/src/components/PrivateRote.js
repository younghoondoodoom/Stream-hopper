import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import { authAtom } from '../store/userStore'

// function PrivateRoute({ children, ...rest }) {
  
//   return (
//     <Route
//       {...rest}
//       render={
//         ({ location }) => (
//           auth
//             ? (
//               children
//             ) : (
//               <Navigate
//                 to={{
//                   pathname: '/login',
//                   state: { from: location }
//                 }}
//               />
//             ))
//       }
//     />
//   );
// }

// const PrivateRoute = ({children}) => {
//   const auth = useRecoilValue(authAtom);
      
//   if (auth !== null) {
//     return children
//   } 
//     return <Navigate to="/login" />
  
// }

// export default PrivateRoute;


const PrivateRoute = ({ children }) => {

  const auth = useRecoilValue(authAtom);
  

  if (!auth) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default PrivateRoute;