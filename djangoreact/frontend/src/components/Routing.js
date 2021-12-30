import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

//page import
import Homepage from "../pages/Public/HomePage";
import Intro from "../pages/Public/Intro";
import Login from "../pages/Login";
import Main from "../pages/Public/Main";
import ContentsResult from "../pages/Private/ContentsResult";
import OttResult from "../pages/Private/OttResult";
import Register from "../pages/Register";
import SearchResult from "../pages/Public/SearchResult";
import Mypage from "../pages/Private/Mypage";
import ErrorPage from "../pages/ErrorPage";
import OttTest from "../pages/Private/OttTest";

// 페이지 접근 권한 0
import PrivateRoute from "./access/PrivateRote";
import LogPrivateRoute from "./access/LogPrivateRoute";

//네비게이션 바
import NavBar from "./NavBar";

//로딩 중...
import ContentsTest from "../pages/Private/ContentsTest";

const Routing = () => {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          {/* 메인 홈페이지 */}
          <Route path="/" element={<Homepage />} /> {/* 공용 Public*/}
          <Route path="/main" element={<Main />} /> {/* 공용 Public*/}
          {/* 로그인, 회원가입, 서비스소개, 마이 페이지 회원가입 */}
          <Route
            path="/login"
            element={
              <LogPrivateRoute>
                <Login />
              </LogPrivateRoute>
            }
          />{" "}
          {/* 제한 Private */}
          <Route
            path="/register"
            element={
              <LogPrivateRoute>
                <Register />
              </LogPrivateRoute>
            }
          />{" "}
          {/* 제한 Private */}
          <Route path="/intro" element={<Intro />} /> {/* 공용 */}
          <Route
            path="/mypage/:username"
            element={
              <PrivateRoute>
                <Mypage />
              </PrivateRoute>
            }
          />
          {/* 제한 Private */}
          {/* 영화 검색 */}
          <Route path="/search" element={<SearchResult />} /> {/* 공용 Public*/}
          {/* 추천서비스 */}
          <Route
            path="/contents_recommended"
            element={
              <PrivateRoute>
                <ContentsTest />
              </PrivateRoute>
            }
          />{" "}
          {/* 제한 Private */}
          <Route
            path="/ott_recommended"
            element={
              <PrivateRoute>
                <OttTest />
              </PrivateRoute>
            }
          />{" "}
          {/* 제한 Private */}
          {/* 결과 */}
          <Route
            path="/movie_result"
            element={
              <PrivateRoute>
                <ContentsResult />
              </PrivateRoute>
            }
          />{" "}
          {/* 제한 Private */}
          <Route
            path="/ott_result"
            element={
              <PrivateRoute>
                <OttResult />
              </PrivateRoute>
            }
          />{" "}
          {/* 제한 Private */}
        </Routes>

        {/* 에러 페이지
                    <Routes>
                      <Route path="*" element={<ErrorPage />} />
                    </Routes>
                     */}
      </BrowserRouter>
    </div>
  );
};

export default Routing;
