import React, { useCallback } from 'react'
import { registerState }  from '../store/userStore'
import { useRecoilState } from 'recoil'
import axios from 'axios'

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

  const onSubmit = () => {
    axios.post("")
  }
  return (
    <div className='Register'>
     <form>
      <div>
        <label htmlFor="user_name">이름</label>
        <input 
          name="user_name"
          value={register.user_name} 
          type="name"
          onChange={onChange}
          autoComplete='off'/>
      </div>
      
      <div>
        <label htmlFor="user_email">이메일</label>
        <input 
          name="user_email" 
          type="email"
          onChange={onChange}
          autoComplete='off'/>
      </div>
      
      <div>
        <label htmlFor="password">비밀번호</label>
        <input 
          name="password" 
          type="password"
          onChange={onChange}
          autoComplete='off'/>
      </div>
      
      <div>
        <label htmlFor="confirm">비밀번호 확인</label>
        <input
          name="confirm" 
          type="password"
          onChange={onChange}
          autoComplete='off'/>
      </div>

      <div>
        <label htmlFor="age">생년월일</label>
        <input 
          name="age" 
          type="age"
          onChange={onChange}
          autoComplete='off'/>
      </div>

      <div>
        <label htmlFor="sex">남자</label>
        <input type="radio" name="sex" value="M" onChange={onChange}  />
        <label htmlFor="sex">여자</label> 
        <input type="radio" name="sex" value="F" onChange={onChange}  />
      </div>
       
       <button onClick={(e)=>{e.preventDefault();
      console.log(register)}}>제출</button>
     </form>
    </div>
  )
}

export default Register
