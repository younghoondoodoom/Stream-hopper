import React, { useCallback } from 'react'
import { loginState }  from '../store/userStore'
import { useRecoilState } from 'recoil'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Login = () => {
  const [login, setLogin] = useRecoilState(loginState)

  const navigate = useNavigate()

  const onChange = useCallback((e) => {
    const {name, value} = e.target;
    setLogin({
      ...login,
      [name]: value,
    })
    console.log(login)
  },[login]);

  
  async function log(e) {
    e.preventDefault();
   try {
    const key = await axios.post("http://127.0.0.1:8000/users/auth/login/", login)
    const data = key.data
    const ax = await axios.create({
      headers: { "Authorization" : `Token ${data["key"]}` },
    });
    console.log(data)
    await ax.get("http://127.0.0.1:8000/review/")

    navigate("/main")
   } catch(e) {
     console.log(e)
   } 
  }; 
 
  return (
    <div className='Login'>
      <div className="wrap">
        <form className='container'>
          <div className='login-section'>
            <div class="row mb-3">
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
            <div class="row mb-3">
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
            <button className="btn btn-primary" onClick={log}>로그인</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
