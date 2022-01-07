import React, { useCallback } from "react";
import { registerState } from "../../store/userStore";
import { useRecoilState } from "recoil";
import { signUp } from "../../api/api";
import logo from "../../images/logo2.png";

const Register = () => {
  const [register, setRegister] = useRecoilState(registerState);

  const handleInput = useCallback(
    (e) => {
      const { name, value } = e.target;
      setRegister({
        ...register,
        [name]: value,
      });
    },
    [register]
  );

  const submitRegister = (e) => {
    e.preventDefault();
    signUp(register);
  };

  return (
    <div className="Register">
      <form className="wrap" onSubmit={submitRegister}>
        <div className="container">
          <img
            src={logo}
            className="img-fluid rounded mx-auto d-block"
            alt="logo"
          ></img>
          <h1>Stream Hopper</h1>
          <h1>회원가입</h1>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              이메일
            </label>
            <input
              type="text"
              id="email"
              className="form-control"
              name="email"
              placeholder="이메일을 입력해주세요"
              autoComplete="off"
              onChange={handleInput}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              이름
            </label>
            <input
              type="text"
              id="username"
              className="form-control"
              name="username"
              placeholder="이름을 입력해주세요."
              autoComplete="off"
              onChange={handleInput}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password1" className="form-label">
              비밀번호
            </label>
            <input
              type="password"
              id="password1"
              className="form-control"
              name="password1"
              placeholder="비밀번호를 입력해주세요."
              autoComplete="off"
              onChange={handleInput}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password2" className="form-label">
              비밀번호 확인
            </label>
            <input
              type="password"
              id="password2"
              className="form-control"
              name="password2"
              placeholder="비밀번호를 확인해주세요."
              autoComplete="off"
              onChange={handleInput}
            />
          </div>

          <button className="btn btn-primary">제출</button>
        </div>
      </form>
    </div>
  );
};

export default Register;
