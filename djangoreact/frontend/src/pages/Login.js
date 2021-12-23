import React, { useCallback } from 'react'
import logo from '../images/logo.png'
import { loginState }  from '../store/userStore'
import { useRecoilState } from 'recoil'
import axios from 'axios'

const Login = () => {
  const [login, setLogin] = useRecoilState(loginState)

  const onChange = useCallback((e) => {
    const {name, value} = e.target;
    setLogin({
      ...login,
      [name]: value,
    })
    console.log(login)
  },[login]);

  function log(e) {
    e.preventDefault();
    axios.post("http://127.0.0.1:8000/users/auth/login/", login)
  }

  return (
    <div className='Login'>
      <div className="container">
        <div>
          <label htmlFor="email">아이디</label>
          <input onChange={onChange} name="email" type="id" />
        </div>

        <div>
          <label htmlFor="password">비밀번호</label>
          <input onChange={onChange} name="password" type="password" />
        </div>
      </div>

      <button onClick={log}>로그인</button>
    </div>
  )
}

export default Login
