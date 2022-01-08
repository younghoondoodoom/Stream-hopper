import React from "react";
import { Link } from "react-router-dom";
import { queryAtom } from "../../api/search";
import { useRecoilValue } from "recoil";
import SearchResult from "../../components/main/SearchResult";
import TopMovie from "../../components/main/TopMovie";
const Main = () => {
  const query = useRecoilValue(queryAtom);

  return (
    <div className="Main">
      {query.length < 2 && (
        <section className="hero">
          <header id="header"></header>
          <header className="hero-header">
            <p>이번엔 어디서 볼까?</p>
            <p>구독료를 내면서 최대한 활용하고 싶을때</p>
            <p>이번에 무엇을 볼지 모를때</p>
            <h3 className="hero-title">
              <span>Stream Hopper</span>
            </h3>
          </header>

          <footer className="hero-footer">
            <Link className="button button-primary" to="/ott_recommended">
              OTT 추천 받기
            </Link>
            <Link className="button" to="/contents_recommended">
              영화 추천 받기
            </Link>
          </footer>
        </section>
      )}
      <div className="wrap">
        <div className="container">
          {query.length >= 2 && <SearchResult />}

          {query.length < 2 && <TopMovie />}
        </div>
      </div>
    </div>
  );
};

export default Main;
