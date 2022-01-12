import React, { useState, useCallback } from "react";
import { searchProgram, pageUrl } from "../../api/search";
import {
  useRecoilState,
  useRecoilValueLoadable,
  useSetRecoilState,
} from "recoil";
import Modal from "react-modal";
import { movieIdx } from "../../store/movieStore";

// 검색 결과 컴포넌트
const SearchResult = () => {
  const queryLodable = useRecoilValueLoadable(searchProgram);
  const result = queryLodable.contents;
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalIdx, setModalIdx] = useRecoilState(movieIdx);
  const resultModal = result.results;

  const setPageUrl = useSetRecoilState(pageUrl);

  const handleModal = useCallback(
    async (e) => {
      const index = e.target.name;
      await setModalIdx(index);
      setModalIsOpen(true);
    },

    [setModalIdx]
  );

  // 페이지 핸들링 함수
  const nextPage = () => {
    const url = result.next;
    setPageUrl(url);
  };

  const prevPage = () => {
    const url = result.previous;
    setPageUrl(url);
  };

  return (
    <div className="SearchResult">
      <div className="container">
        <div className="row row-cols-2 row-cols-md-4 g-1">
          {result.count > 0 &&
            result.results.map((result, idx) => {
              const newResult = {};
              newResult[idx] = result;
              const korImg = newResult[idx].kor_image_path;
              const originalImg = newResult[idx].image_path;
              return (
                <div className="container" key={"search" + idx}>
                  <div className="col">
                    <img
                      name={idx}
                      className="img-fluid"
                      src={`https://image.tmdb.org/t/p/original${
                        korImg || originalImg
                      } `}
                      alt={newResult[idx].kor_title}
                      onClick={handleModal}
                    />
                  </div>
                </div>
              );
            })}
          <div className="page-btn">
            <button onClick={prevPage} hidden={result.previous === null}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                className="bi bi-arrow-left-circle-fill"
                viewBox="0 0 16 16"
              >
                <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z" />
              </svg>
              이전
            </button>
            <button onClick={nextPage} hidden={result.next === null}>
              다음
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                className="bi bi-arrow-right-circle-fill next"
                viewBox="0 0 16 16"
              >
                <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
              </svg>
            </button>
          </div>
        </div>
        {result.count === 0 && (
          <div>
            <p>검색결과가 없습니다.</p>
          </div>
        )}
        {modalIsOpen === true && resultModal !== "undefined" && (
          <Modal
            isOpen={modalIsOpen}
            className="mymodal"
            overlayClassName="myoverlay"
            onRequestClose={() => setModalIsOpen(false)}
          >
            <div className="container">
              {resultModal[modalIdx].kor_image_path !== "undefined" ||
              resultModal[modalIdx].image_path !== "undefined" ? (
                <img
                  src={`https://image.tmdb.org/t/p/original${
                    resultModal[modalIdx].kor_image_path ||
                    resultModal[modalIdx].image_path
                  } `}
                  className="img-fluid"
                  alt={resultModal[modalIdx].title}
                />
              ) : null}
            </div>

            <h5 className="modal-title">
              {resultModal[modalIdx].kor_title || resultModal[modalIdx].title}(
              {resultModal[modalIdx].release})
            </h5>

            <p className="smfont">{resultModal[modalIdx].runtime}</p>

            <div className="detailBox">
              <p>
                장르
                <span className="smfont">{resultModal[modalIdx].genre}</span>
              </p>
              <p>
                평점 : {resultModal[modalIdx].rating} /
                {resultModal[modalIdx].ott}
              </p>
              <p>@ keywords </p>
              {resultModal[modalIdx].keywords &&
                resultModal[modalIdx].keywords.split(",").map((word, idx) => {
                  return (
                    <small key={"word" + idx} className={"key" + idx}>
                      @{word}
                    </small>
                  );
                })}
            </div>

            <p className="smfont overview">
              {resultModal[modalIdx].kor_overview ||
                resultModal[modalIdx].overview}
            </p>
          </Modal>
        )}
      </div>
    </div>
  );
};

export default SearchResult;
