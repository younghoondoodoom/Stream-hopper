import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  queryAtom,
  searchFilter,
  searchProgram,
  topMovies,
} from "../../api/search";

import { useRecoilValue, useRecoilState, useRecoilValueLoadable } from "recoil";
import Modal from "react-modal";
import { topMovieIdx } from "../../store/movieStore";
import SearchResult from "./SearchResult";

const Main = () => {
  const navigate = useNavigate();

  //검색할 영화
  const [query, setQuery] = useRecoilState(queryAtom);
  const [filter, setFilter] = useRecoilState(searchFilter);

  // 모달 on off
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const [handleSearch, setHandleSearch] = useState(false);

  //top rated Movie List
  const topMovieRecoil = useRecoilValue(topMovies);

  // modal에 띄울 영화의 index값
  const [modalIdx, setmodalIdx] = useRecoilState(topMovieIdx);

  const queryLodable = useRecoilValueLoadable(searchProgram);

  function onSubmit(e) {
    console.log(queryLodable.contents);
    navigate("/search");
    // setHandleSearch(true);
  }
  console.log(queryLodable);

  // 검색 시 query에 담음
  // query이 변할 때마다 영화 데이터 조회
  const searching = (e) => {
    setQuery(e.target.value);
    setHandleSearch(true);
  };

  function handleModal(e) {
    const index = e.target.name;
    setmodalIdx(index);
    setModalIsOpen(true);
  }

  return (
    <div className="Main">
      <div className="wrap">
        <div className="container">
          <div className="inputDiv">
            <form onSubmit={onSubmit}>
              <select onChange={(e) => setFilter(e.target.value)}>
                <option value="all">전체</option>
                <option value="title">제목</option>
                <option value="actor">배우</option>
                <option value="director">감독</option>
              </select>
              <input
                type="text"
                placeholder="제목/감독/배우를 입력하세요"
                onChange={searching}
                value={query}
              />
            </form>
            {query.length >= 2 && <SearchResult />}
          </div>

          <h3>TOP Rated Movies</h3>
          <div className="row">
            {/* topMovie 리스트를 받아 map으로 화면에 뿌려줌 */}
            {topMovieRecoil.map((movie, idx) => {
              const newMovie = {};
              newMovie[idx] = movie;
              return (
                <div key={"search" + idx} className="col">
                  <h5>Top {idx + 1}</h5>
                  <img
                    name={idx}
                    src={
                      "https://image.tmdb.org/t/p/w500" +
                      newMovie[idx].kor_image_path
                    }
                    alt="topMovie"
                    className="img-fluid"
                    onClick={handleModal}
                  />
                  <h5>{newMovie[idx].kor_title}</h5>
                </div>
              );
            })}
          </div>

          <Modal
            isOpen={modalIsOpen}
            className="mymodal"
            overlayClassName="myoverlay"
            onRequestClose={() => setModalIsOpen(false)}
          >
            <div className="container">
              <img
                src={`https://image.tmdb.org/t/p/original${topMovieRecoil[modalIdx].kor_image_path}`}
                className="img-fluid"
                alt={topMovieRecoil[modalIdx].kor_title}
              />
            </div>

            <h5 className="modal-title">
              {topMovieRecoil[modalIdx].kor_title}(
              {topMovieRecoil[modalIdx].release})
            </h5>

            <p className="smfont">{topMovieRecoil[modalIdx].runtime}</p>

            <div className="detailBox">
              <p>
                장르
                <span className="smfont">{topMovieRecoil[modalIdx].genre}</span>
              </p>
              <p>
                평점 : {topMovieRecoil[modalIdx].rating} /
                {topMovieRecoil[modalIdx].ott}
              </p>
            </div>

            <p className="smfont">{topMovieRecoil[modalIdx].kor_overview}</p>
          </Modal>

          <button onClick={onSubmit}>눌러</button>
        </div>
      </div>
    </div>
  );
};

export default Main;
