import React, { useState, useCallback, useEffect } from "react";
import { useRecoilValue, useRecoilState } from "recoil";
import { genreTopMovie } from "../../api/api";
import { ottTestAtom } from "../../store/testStore";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import { movieIdx } from "../../store/movieStore";

const PreferTest = () => {
  const topGenreMovie = useRecoilValue(genreTopMovie);
  const [testData, setTestData] = useRecoilState(ottTestAtom);
  const [movieList, setMovieList] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalIdx, setModalIdx] = useRecoilState(movieIdx);
  const words = topGenreMovie[modalIdx].keywords.split(",");

  const handleMovieList = useCallback(
    async (e) => {
      if (movieList.length >= 3) e.target.checked = false;

      const value = e.target.value;
      let newData = movieList.filter((item) => item !== value);
      if (newData.length < 3 && e.target.checked) {
        newData.push(value);
      }
      setMovieList(newData);
    },
    [movieList]
  );

  const handleModal = useCallback(
    async (e) => {
      const index = e.target.name;
      await setModalIdx(index);
      setModalIsOpen(true);
    },
    [setModalIdx]
  );

  useEffect(() => {
    setTestData({ ...testData, preferContents: movieList });
  }, [movieList]);

  return (
    <div>
      <div className="movie-box">
        <h3>좋아하시는 콘텐츠를 선택하세요.(총 3개)</h3>
        <h4>{movieList.length} / 3</h4>
        <div className="row row-cols-4 row-cols-sm-6 row-cols-md-6">
          {topGenreMovie.map((movie, idx) => {
            const newData = {};
            newData[idx] = movie;
            const korImg = newData[idx].kor_image_path;
            const originalImg = newData[idx].image_path;
            return (
              <div key={"contents" + idx} className="col">
                <div className="card text-white bg-dark">
                  <input
                    id={newData[idx].id}
                    type="checkbox"
                    value={newData[idx].id}
                    onClick={handleMovieList}
                  />
                  <label value={newData[idx].id} htmlFor={newData[idx].id}>
                    ❤
                  </label>
                  <img
                    name={idx}
                    src={`https://image.tmdb.org/t/p/original${
                      korImg || originalImg || null
                    } `}
                    alt="selectMovie"
                    className="img-fluid card-img-top"
                    onClick={handleModal}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {modalIsOpen === true && topGenreMovie !== "undefined" && (
        <Modal
          isOpen={modalIsOpen}
          className="mymodal"
          overlayClassName="myoverlay"
          onRequestClose={() => setModalIsOpen(false)}
        >
          <div className="container">
            {topGenreMovie[modalIdx].kor_image_path !== "undefined" ||
            topGenreMovie[modalIdx].image_path !== "undefined" ? (
              <img
                src={`https://image.tmdb.org/t/p/original${
                  topGenreMovie[modalIdx].kor_image_path ||
                  topGenreMovie[modalIdx].image_path
                } `}
                className="img-fluid"
                alt={topGenreMovie[modalIdx].title}
              />
            ) : null}
          </div>

          <h5 className="modal-title">
            {topGenreMovie[modalIdx].kor_title || topGenreMovie[modalIdx].title}
            ({topGenreMovie[modalIdx].release})
          </h5>

          <p className="smfont">{topGenreMovie[modalIdx].runtime}</p>

          <div className="detailBox">
            <p>
              장르
              <span className="smfont">{topGenreMovie[modalIdx].genre}</span>
            </p>
            <p>
              평점 : {topGenreMovie[modalIdx].rating} /
              {topGenreMovie[modalIdx].ott}
            </p>
            <p>@ keywords </p>
            {words.map((word, idx) => {
              return (
                <small key={"word" + idx} className={"key" + idx}>
                  @{word}
                </small>
              );
            })}
          </div>

          <p className="smfont overview">
            {topGenreMovie[modalIdx].kor_overview ||
              topGenreMovie[modalIdx].overview}
          </p>
        </Modal>
      )}
      {movieList.length === 3 && (
        <Link to="/ott_result">
          <button>제출</button>
        </Link>
      )}
    </div>
  );
};

export default PreferTest;
