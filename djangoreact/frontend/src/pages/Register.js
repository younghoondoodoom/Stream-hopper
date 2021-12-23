import React, { useCallback } from 'react'
import { registerState }  from '../store/userStore'
import { useRecoilState } from 'recoil'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Register = () => {
  const [register, setRegister] = useRecoilState(registerState)

  const onChange = useCallback((e) => {
    const {name, value} = e.target;
    setRegister({
      ...register,
      [name]: value,
    })
    console.log(register)
  },[register]);

  async function onSubmit (e)  {
    e.preventDefault();
    try {
      const res = await axios.post("http://127.0.0.1:8000/users/auth/register", register)
    
      console.log(res)
    }
    catch (error) {
      alert("입력하신 값이 올바르지 않습니다.")
    }

  }
 
  return (
    <div className='Register'>
       <div className='container'>
         <form className="" onSubmit={onSubmit}>
          <div className=''>
            <label htmlFor="username">이름</label>
            <input
              className="input is-hovered"
              name="username"
              type="name"
              onChange={onChange}
              autoComplete='off'/>
          </div>
         
          <div className=''>
            <label htmlFor="email">이메일</label>
            <input
              className=""
              name="email"
              type="email"
              onChange={onChange}
              autoComplete='off'/>
          </div>
         
          <div className=''>
            <label htmlFor="password1">비밀번호</label>
            <input
              className=""
              name="password1"
              type="password"
              onChange={onChange}
              autoComplete='off'/>
          </div>
         
          <div className=''>
            <label htmlFor="password2">비밀번호 확인</label>
            <input
              className=""
              name="password2"
              type="password"
              onChange={onChange}
              autoComplete='off'/>
          </div>
          <div className=''>
            <label htmlFor="age">생년월일</label>
            <input
              className=""
              name="age"
              type="age"
              onChange={onChange}
              autoComplete='off'/>
          </div>
          <div className=''>
            <label htmlFor="sex">남자</label>
            <input type="radio" name="sex" value="M" onChange={onChange}  />
            <label htmlFor="sex">여자</label>
            <input type="radio" name="sex" value="F" onChange={onChange}  />
          </div>
         
           <Link to="/login"><button className='btn btn-primary'>제출</button></Link>
         </form>
       </div>

    </div>
  )
}

export default Register
