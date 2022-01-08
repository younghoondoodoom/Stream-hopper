import React, { useState } from "react";
import { topMovies } from "../../api/search";
import { useRecoilValue, useRecoilState } from "recoil";
import Modal from "react-modal";
import { topMovieIdx } from "../../store/movieStore";

// 탑 무비 컴포넌트
const TopMovie = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalIdx, setModalIdx] = useRecoilState(topMovieIdx);
  const topMovieRecoil = useRecoilValue(topMovies);
  const words = topMovieRecoil[modalIdx].keywords.split(",");
  const handleModal = (e) => {
    const index = e.target.name;
    setModalIdx(index);
    setModalIsOpen(true);
  };

  return (
    <div>
      <div className="TopMovie row">
        <h3>TOP Rated Movies</h3>
        {topMovieRecoil.map((movie, idx) => {
          const newMovie = {};
          newMovie[idx] = movie;
          const korImg = newMovie[idx].kor_image_path;
          const originalImg = newMovie[idx].image_path;
          return (
            <div key={"search" + idx} className="col">
              <h5>Top {idx + 1}</h5>
              <img
                name={idx}
                src={`https://image.tmdb.org/t/p/original${
                  korImg || originalImg
                } `}
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
            src={`https://image.tmdb.org/t/p/original${
              topMovieRecoil[modalIdx].kor_image_path ||
              topMovieRecoil[modalIdx].image_path
            } `}
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
          <p>@ keywords </p>
          {words &&
            words.map((word, idx) => {
              return (
                <small key={"word" + idx} className={"key" + idx}>
                  @{word}
                </small>
              );
            })}
        </div>

        <p className="smfont overview">
          {topMovieRecoil[modalIdx].kor_overview}
        </p>
      </Modal>
    </div>
  );
};

export default TopMovie;
