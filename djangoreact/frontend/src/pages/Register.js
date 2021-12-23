import React, { useCallback } from 'react'
import { registerState }  from '../store/userStore'
import { useRecoilState } from 'recoil'
import axios from 'axios'

const Register = () => {
  // recoil에 저장한 registerState를 가져옴
  const [register, setRegister] = useRecoilState(registerState)

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
              placeholder="Example input placeholder"
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
              placeholder="Example input placeholder"
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
              placeholder="Example input placeholder"
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
              placeholder="Example input placeholder"
              autoComplete='off'
              onChange={onChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="age" className="form-label">나이</label>
            <input
              type="number"
              id="age"
              className="form-control"
              name="age"
              placeholder="Example input placeholder"
              autoComplete='off'
              onChange={onChange} />
          </div>
          <div className='mb-3'>
              <input id="M" type="radio"className='btn-check' name="sex" value="M" onChange={onChange} autoComplete="off" />
              <label className="btn btn-outline-success" htmlFor="M">남자</label>
              <input id="F" type="radio" className='btn-check' name="sex" value="F" onChange={onChange} autoComplete="off"  />
              <label className="btn btn-outline-danger" htmlFor="F">여자</label>
          </div>
         
          <button className='btn btn-primary'>제출</button>
         </div>
       </form>

    </div>
  )
}

export default Register
