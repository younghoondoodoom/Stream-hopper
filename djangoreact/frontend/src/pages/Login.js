import React, { useCallback } from 'react'
import { loginState }  from '../store/userStore'
import { useRecoilState, useRecoilValue, useResetRecoilState } from 'recoil'
import { useNavigate, Navigate } from 'react-router-dom'
import axios from 'axios'
import {signIn} from "../api/api"
import { validLogin } from '../api/api';


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
          <div className='login-section'>
            <div className="row mb-3">
              <label
                htmlFor="email"
                className="form-label">
                Email
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
                Password
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
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
