import React, { useCallback } from "react";
import { loginState } from "../../store/userStore";
import { useRecoilState } from "recoil";
import { signIn } from "../../api/api";
import logo from "../../images/logo2.png";

const Login = () => {
  const [loginInfo, setLoginInfo] = useRecoilState(loginState);

  const handleInput = useCallback(
    (e) => {
      const { name, value } = e.target;
      setLoginInfo({
        ...loginInfo,
        [name]: value,
      });
    },
    [loginInfo]
  );

  const handleSignIn = async (e) => {
    e.preventDefault();
    await signIn(loginInfo);
    if (localStorage.getItem("key")) {
      return window.location.replace("/main");
    }
  };

  return (
    <div className="Login">
      <div className="wrap">
        <form className="container">
          <img
            src={logo}
            className="img-fluid rounded mx-auto d-block"
            alt="logo"
          ></img>
          <h1>Stream Hopper</h1>

          <div className="login-section">
            <div className="row mb-3">
              <label htmlFor="email" className="form-label">
                이메일
              </label>

              <input
                type="email"
                id="email"
                className="form-control"
                name="email"
                autoComplete="off"
                onChange={handleInput}
              />
            </div>
            <div className="row mb-3">
              <label htmlFor="password" className="form-label">
                비밀번호
              </label>
              <input
                type="password"
                id="password"
                className="form-control"
                name="password"
                autoComplete="off"
                onChange={handleInput}
              />
            </div>
            <button className="btn btn-primary" onClick={handleSignIn}>
              로그인
            </button>
            {/* <Google /> */}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
