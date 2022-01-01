import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

//page import
import Homepage from "../pages/public/HomePage";
import Intro from "../pages/public/Intro";
import Login from "../pages/Login";
import Main from "../pages/public/Main";
import ContentsResult from "../pages/private/ContentsResult";
import OttResult from "../pages/private/OttResult";
import Register from "../pages/Register";
import Mypage from "../pages/private/Mypage";
import OttTest from "../pages/private/OttTest";
import ContentsTest from "../pages/private/ContentsTest";
// 페이지 접근 권한 0
import PrivateRoute from "./access/PrivateRote";
import LogPrivateRoute from "./access/LogPrivateRoute";

//네비게이션 바
import NavBar from "./NavBar";

//로딩 중...

const Routing = () => {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          {/* 홈페이지, 메인페이지*/}
          <Route path="/" element={<Homepage />} /> {/* 공용 public*/}
          <Route path="/main" element={<Main />} /> {/* 공용 public*/}
          {/* 로그인 */}
          <Route
            path="/login"
            element={
              <LogPrivateRoute>
                <Login />
              </LogPrivateRoute>
            }
          />
          {/* 회원가입 */}
          <Route
            path="/register"
            element={
              <LogPrivateRoute>
                <Register />
              </LogPrivateRoute>
            }
          />
          {/* 서비스소개 */}
          <Route path="/intro" element={<Intro />} />
          {/* 마이페이지 */}
          <Route
            path="/mypage/:username"
            element={
              <PrivateRoute>
                <Mypage />
              </PrivateRoute>
            }
          />
          {/* 영화 추천서비스 */}
          <Route
            path="/contents_recommended"
            element={
              <PrivateRoute>
                <ContentsTest />
              </PrivateRoute>
            }
          />
          {/* ott 추천서비스 */}
          <Route
            path="/ott_recommended"
            element={
              <PrivateRoute>
                <OttTest />
              </PrivateRoute>
            }
          />
          {/* 영화 추천 결과 */}
          <Route
            path="/movie_result"
            element={
              <PrivateRoute>
                <ContentsResult />
              </PrivateRoute>
            }
          />
          {/* ott 추천 결과 */}
          <Route
            path="/ott_result"
            element={
              <PrivateRoute>
                <OttResult />
              </PrivateRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Routing;
