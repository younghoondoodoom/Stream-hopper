import React from 'react'
import logo from '../images/logo.png'

const Login = () => {
  return (
    <div className='Login'>
      <main className="form-signin">
      <form className='form-signin'>
          <img className="mb-4" src={logo} alt="" width="150" />
          <h1 className="h3 mb-3 fw-normal">아이디</h1>

          <div className="form-floating">
            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating">
            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
            <label htmlFor="floatingPassword">Password</label>
          </div>

  
          <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
          <p className="mt-5 mb-3 text-muted">© 2021</p>
        </form>
      </main>
    </div>
  )
}

export default Login
