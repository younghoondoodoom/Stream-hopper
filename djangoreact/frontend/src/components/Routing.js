import React, { Suspense } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";

//page import
import Homepage from "../pages/HomePage" 
import AdditionalInfo from "../pages/AdditionalInfo"
import Intro from "../pages/Intro"
import Login from "../pages/Login"
import Main from "../pages/Main"
import MovieResult from "../pages/MovieResult"
import OttResult from "../pages/OttResult"
import Preference from "../pages/Preference"
import Register from "../pages/Register"
import Search from "../pages/Search" 
import Mypage from "../pages/Mypage"
import ErrorPage from '../pages/ErrorPage'

//네비게이션 바
import NavBar from './NavBar';

//로딩 중...
import Spinner from './Spinner'


const Routing = () => {
  return (
    <div>
      <BrowserRouter>
           <Suspense fallback={<Spinner />}>
             <NavBar />
                  <Routes>
                    {/* 메인 홈페이지 */}
                    <Route path="/" element={<Homepage />} />
                    <Route path="/main" element={<Main />} />
                    {/* 로그인, 회원가입, 서비스소개, 마이 페이지 회원가입 후 선호영화 */}
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/intro" element={<Intro />} />
                    <Route path="/mypage/:username" element={<Mypage />} />
                    <Route path="/preference" element={<Preference />} />
                    {/* ott 취향 검사, 영화 검색 */}
                    <Route path="/additional_info" element={<AdditionalInfo />} />
                    <Route path="/search" element={<Search />} />
                    {/* 결과 */}
                    <Route path="/movie_result" element={<MovieResult />} />
                    <Route path="/ott_result" element={<OttResult />} />
                    {/* 에러 페이지 */}
                    <Route path="*" element={<ErrorPage />} />
                  </Routes>
           </Suspense>
      </BrowserRouter>
    </div>
  )
}

export default Routing
