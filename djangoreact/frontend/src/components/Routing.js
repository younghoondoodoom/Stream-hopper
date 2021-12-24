import React, { Suspense } from 'react'
import { BrowserRouter, Route, Routes, Router } from "react-router-dom";

//page import
import Homepage from "../pages/Public/HomePage" 
import AdditionalInfo from "../pages/Private/AdditionalInfo"
import Intro from "../pages/Public/Intro"
import Login from "../pages/Login"
import Main from "../pages/Public/Main"
import MovieResult from "../pages/Private/MovieResult"
import OttResult from "../pages/Private/OttResult"
import Preference from "../pages/Private/Preference"
import Register from "../pages/Register"
import Search from "../pages/Public/Search" 
import Mypage from "../pages/Private/Mypage"
import ErrorPage from '../pages/ErrorPage'

import PrivateRoute from './PrivateRote';
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
                    <Route path="/" element={<Homepage />} /> {/* 공용 Public*/} 
                    <Route path="/main" element={<Main />} /> {/* 공용 Public*/}

                    {/* 로그인, 회원가입, 서비스소개, 마이 페이지 회원가입 후 선호영화 */}
                    <Route path="/login" element={<Login />} /> {/* 제한 Private */}
                    <Route path="/register" element={<Register />} /> {/* 제한 Private */}
                    <Route path="/intro" element={<Intro />} /> {/* 공용 */}
                    <Route path="/mypage/:username" element={<Mypage />} />{/* 제한 Private */}
                    <Route path="/preference" element={<Preference />} />{/* 제한 Private */}

                    {/* ott 취향 검사, 영화 검색 */}
                    <Route path="/additional_info" element={<AdditionalInfo />} /> {/* 제한 Private */}
                    <Route path="/search" element={<Search />} /> {/* 공용 Public*/}
                    {/* 결과 */}
                    <Route path="/movie_result" element={<MovieResult />} /> {/* 제한 Private */}
                    <Route path="/ott_result" element={<OttResult />} />  {/* 제한 Private */}
                    </Routes>
                    {/* 에러 페이지 */}
                    <Routes>
                      <Route path="*" element={<ErrorPage />} />
                    </Routes>
                    
                  
           </Suspense>
      </BrowserRouter>
    </div>
  )
}

export default Routing
