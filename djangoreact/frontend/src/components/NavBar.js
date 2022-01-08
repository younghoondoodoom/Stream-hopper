import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { validLogin, signOut } from "../api/api";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { searchFilter, queryAtom, pageUrl } from "../api/search";

// 내비게이션 바
const NavBar = () => {
  const isLogin = useRecoilValue(validLogin);
  const setFilter = useSetRecoilState(searchFilter);
  const [query, setQuery] = useRecoilState(queryAtom);
  const setPageUrl = useSetRecoilState(pageUrl);
  const navigate = useNavigate();

  const handleSign = () => {
    if (isLogin) {
      signOut();
      localStorage.removeItem("key");
      window.location.replace("/");
    } else {
      navigate("/login");
    }
  };

  const searching = (e) => {
    setQuery(e.target.value);
    setPageUrl(null);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      navigate("/main");
    }
  };

  return (
    <div className="NavBar">
      <nav className="navbar bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand opacity-100" to="/">
            Stream Hopper
          </Link>
          <div className="d-flex search-box">
            <select onChange={(e) => setFilter(e.target.value)}>
              <option value="all">전체</option>
              <option value="title">제목</option>
              <option value="actor">배우</option>
              <option value="director">감독</option>
            </select>
            <input
              className="form-control me-2"
              type="search"
              placeholder="제목/감독/배우 등을 검색하세요."
              aria-label="Search"
              onChange={searching}
              value={query}
              onKeyPress={handleKeyPress}
            />
          </div>

          <button
            className="navbar-toggler custom-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="offcanvas offcanvas-end"
            tabIndex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                메뉴
              </h5>
              <button
                type="button"
                className="btn-close text-reset"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>

            <div className="offcanvas-body list">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3 variant-dark">
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/main"
                  >
                    홈
                  </Link>
                </li>

                <li className="nav-item" onClick={handleSign}>
                  <Link className="nav-link active" aria-current="page" to="#">
                    {isLogin ? "로그아웃" : "로그인"}
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/register"
                    hidden={isLogin}
                  >
                    회원가입
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/intro">
                    서비스 소개
                  </Link>
                </li>

                <div hidden={!isLogin}>
                  <li className="nav-item">
                    <Link
                      className="nav-link active"
                      aria-current="page"
                      to="/mypage"
                    >
                      마이페이지
                    </Link>
                  </li>
                  <li className="nav-item dropdown">
                    <Link
                      className="nav-link dropdown-toggle"
                      to="#"
                      id="offcanvasNavbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      추천 서비스
                    </Link>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="offcanvasNavbarDropdown"
                    >
                      <li>
                        <Link className="dropdown-item" to="ott_recommended">
                          나와 맞는 OTT는?
                        </Link>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <Link
                          className="dropdown-item"
                          to="contents_recommended"
                        >
                          오늘 뭐볼까?
                        </Link>
                      </li>
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
  );
};

export default NavBar;
