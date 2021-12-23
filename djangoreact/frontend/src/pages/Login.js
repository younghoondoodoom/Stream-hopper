import React from 'react'
import { GoogleLogin, GoogleLogout } from 'react-google-login';

const clientId = '970376354873-eevp45047onshbf3g59gipef5orr7eq4.apps.googleusercontent.com'

const Login = () => {
  const Googlelogin = () => {
    const onSuccess = res => {
      console.log('[Login Success] currentUser:', res.profileObj);
    };
  
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
          cookiePolicy={'single_host_origin'}
          style={{ marginTop:'100px' }}
          isSignedIn={true}
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
