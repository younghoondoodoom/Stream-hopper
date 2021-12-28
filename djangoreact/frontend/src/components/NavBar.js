import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { validLogin, logout } from '../api/api'
import { useRecoilValue } from 'recoil';
import Google from './Google/GoogleLogin';

// 내비게이션 바
const NavBar = () => {
  const auth = useRecoilValue(validLogin)

  // 로그인 유무를 확인하여 onClick 시 로그아웃 or 로그인
  const navigate = useNavigate()
  
  function handleLogin () {
    if (auth) {
      logout()
      navigate("/")
    } else {
      navigate("/login")
    }
  }
  
  return (
    <div className='NavBar'>
      
      <nav className="navbar bg-dark">
        <div className="container-fluid">
          
          <Link className="navbar-brand opacity-100" to="/">Stream Hopper</Link>          
          <button className="navbar-toggler custom-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">메뉴</h5>
              <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
 
            <div className="offcanvas-body list">
                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3 variant-dark" >

                  <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/main">홈</Link>
                  </li>

                  <li className="nav-item" onClick={handleLogin}>
                    <Link className="nav-link active" aria-current="page" to="#">{auth? "로그아웃":"로그인"}</Link>
                  </li>
                  
                  <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/register" hidden={auth}>회원가입</Link>
                  </li>

                  <li className="nav-item">
                    <Link className="nav-link" to="/intro">서비스 소개</Link>
                  </li>

                  <div hidden={!auth}>
                    <li className="nav-item">
                      <Link className="nav-link active" aria-current="page" to="#">마이페이지</Link>
                    </li>
                    <li className="nav-item dropdown">
                      <Link className="nav-link dropdown-toggle" to="#" id="offcanvasNavbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        추천 서비스
                      </Link>
                      <ul className="dropdown-menu" aria-labelledby="offcanvasNavbarDropdown">
                        <li><Link className="dropdown-item" to="ott_recommended">나와 맞는 OTT는?</Link></li>
                        <li>
                          <hr className="dropdown-divider" />
                        </li>
                        <li><Link className="dropdown-item" to="contents_recommended">오늘 뭐볼까?</Link></li>
                      </ul>
                      <hr className="dropdown-divider" />
                      {/* <Google /> */}
                    </li>
                  </div>


                </ul>

            </div>
          </div>
        </div>
      </nav>

        
    </div>
  )
}

export default NavBar
