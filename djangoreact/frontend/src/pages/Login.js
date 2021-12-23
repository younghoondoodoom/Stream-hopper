import React from 'react'
import { GoogleLogin, GoogleLogout } from 'react-google-login';

const clientId = '970376354873-eevp45047onshbf3g59gipef5orr7eq4.apps.googleusercontent.com'

const Login = () => {
  const Googlelogin = () => {
    const onSuccess = useCallback(
      response => {
        const idToken = response.tokenId;
        const data = {
          email: response.profileObj.email,
          first_name: response.profileObj.givenName,
          last_name: response.profileObj.familyName
        };
    
        validateTokenAndObtainSession({ data, idToken })
      },
    );
  
    const onFailure = (res) => {
      console.log('[Login failed] res:', res);
    };
    return (
      <div>
        <GoogleLogin
          clientId={clientId}
          buttonText='Login'
          onSuccess={onSuccess}
          onFailure={onFailure}
        />  
      </div>
    );
  };

  const Googlelogout = () => {
    const onSuccess = res => {
      alert('Logout made successfully');
    };
  
    return (
      <div>
        <GoogleLogout
          clientId={clientId}
          buttonText='Logout'
          onSuccess={onSuccess}
        ></GoogleLogout>  
      </div>
    );
  };

  return (
    <div className='container'>
      <Googlelogin></Googlelogin>
      <Googlelogout></Googlelogout>
    </div>
  )
}

export default Login
