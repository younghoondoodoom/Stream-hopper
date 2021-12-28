import React, { useCallback } from 'react'
import { loginState }  from '../store/userStore'
import { useRecoilState } from 'recoil'
import {signIn} from "../api/api"
import logo from '../images/logo2.png'
import Google from '../components/Google/GoogleLogin'

const Login = () => {
  // userStore에 있는 loginstate를 가져옴
  const [login, setLogin] = useRecoilState(loginState)
  

  // loginState에 값 저장
  const onChange = useCallback((e) => {
    const {name, value} = e.target;
    setLogin({
      ...login,
      [name]: value,
    })
    console.log(login)
  },[login]);

 // 로그인 시 성공하면 메인페이지로 이동
  function onClick (e) {
    e.preventDefault()
    signIn(login)
  }

  return (
    <div className='Login'>
      <div className="wrap">
        <form className='container'>
          <img src={logo} className="img-fluid rounded mx-auto d-block" alt="logo"></img>
          <h1>Stream Hopper</h1>
          
          <div className='login-section'>
            <div className="row mb-3">
              <label
                htmlFor="email"
                className="form-label">
                이메일
              </label>
             
                <input
                  type="email"
                  id="email"
                  className="form-control"
                  name="email"
                  autoComplete='off'
                  onChange={onChange} />
              </div>
            <div className="row mb-3">
              <label
                htmlFor="password"
                className="form-label">
                비밀번호
              </label>
              <input
                  type="password"
                  id="password"
                  className="form-control"
                  name="password"
                  autoComplete='off'
                  onChange={onChange} />
            </div>
            <button className="btn btn-primary" onClick={onClick}>로그인</button>
            {/* <Google /> */}
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login


