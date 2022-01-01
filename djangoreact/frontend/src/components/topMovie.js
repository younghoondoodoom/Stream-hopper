import React, { useState } from "react";
import { topMovies } from "../api/search";

import { useRecoilValue, useRecoilState } from "recoil";
import Modal from "react-modal";
import { topMovieIdx } from "../store/movieStore";

const TopMovie = () => {
  // 모달 on off
  const [modalIsOpen, setModalIsOpen] = useState(false);

  //top rated Movie List
  const topMovieRecoil = useRecoilValue(topMovies);

  // modal에 띄울 영화의 index값
  const [modalIdx, setmodalIdx] = useRecoilState(topMovieIdx);

  function handleModal(e) {
    const index = e.target.name;
    setmodalIdx(index);
    setModalIsOpen(true);
  }
  return (
    <div>
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
    </div>
  );
};

export default TopMovie;
