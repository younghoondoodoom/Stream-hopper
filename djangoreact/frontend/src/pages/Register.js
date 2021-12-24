import React, { useCallback } from 'react'
import { registerState }  from '../store/userStore'
import { useRecoilState } from 'recoil'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Register = () => {
  // recoil에 저장한 state 가져옴
  const [register, setRegister] = useRecoilState(registerState)

  
  // history.push와 같은 기능 
  const navigate = useNavigate()


  //onChane 될 때마다 registerState에 유저 정보를 담음. 
  const onChange = useCallback((e) => {
    const {name, value} = e.target;
    setRegister({
      ...register,
      [name]: value,
    })
    console.log(register)
  },[register]);


  // 회원가입 및 register error 처리!
  async function signUp (e)  {
    e.preventDefault();
    try {
      const res = await axios.post("http://127.0.0.1:8000/users/auth/register", register)
      console.log(res)
      alert("회원가입에 성공하였습니다.")
      navigate("/login")

    } catch (error) {
      const errorList = error.response.data
      for (const [key, value] of Object.entries(errorList)) {
        alert(`${key} : ${value}`);
      }
    }
  }

  return (
    <div className='Register'>
       <form onSubmit={signUp}>
         <div className='container'>
          <h1>회원가입</h1>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">이름</label>
            <input
              type="text"
              id="username"
              className="form-control"
              name="username"
              placeholder="이름을 입력해주세요."
              autoComplete='off'
              onChange={onChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">이메일</label>
            <input
              type="text"
              id="email"
              className="form-control"
              name="email"
              placeholder="이메일을 입력해주세요"
              autoComplete='off'
              onChange={onChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="password1" className="form-label">비밀번호</label>
            <input
              type="password"
              id="password1"
              className="form-control"
              name="password1"
              placeholder="비밀번호를 입력해주세요."
              autoComplete='off'
              onChange={onChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="password2" className="form-label">비밀번호 확인</label>
            <input
              type="password"
              id="password2"
              className="form-control"
              name="password2"
              placeholder="비밀번호를 확인해주세요."
              autoComplete='off'
              onChange={onChange} />
          </div>
          
         
          <button className='btn btn-lg btn-outline-warning'>제출</button>
         </div>
       </form>

    </div>
  )
}

export default Register
