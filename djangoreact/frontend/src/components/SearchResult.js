import React, { useState } from "react";
import { searchProgram, pageUrl } from "../api/search";
import {
  useRecoilState,
  useRecoilValueLoadable,
  useSetRecoilState,
} from "recoil";
import Modal from "react-modal";
import { movieIdx } from "../store/movieStore";

const SearchResult = () => {
  const queryLodable = useRecoilValueLoadable(searchProgram);
  const result = queryLodable.contents;
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalIdx, setmodalIdx] = useRecoilState(movieIdx);
  const resultModal = result.results;
  const setPageUrl = useSetRecoilState(pageUrl);

  function handleModal(e) {
    const index = e.target.name;
    setmodalIdx(index);
    setModalIsOpen(true);
  }
  function nextPage() {
    const url = result.next;
    setPageUrl(url);
  }

  function prevPage() {
    const url = result.previous;
    setPageUrl(url);
  }

  return (
    <div className="SearchResult">
      <div className="container">
        <div className="row row-cols-2 row-cols-md-4 g-1">
          {result.count > 0 &&
            result.results.map((result, idx) => {
              const newResult = {};
              newResult[idx] = result;
              return (
                <div className="container" key={"search" + idx}>
                  <div className="col">
                    <img
                      name={idx}
                      className="rounded"
                      src={
                        "https://image.tmdb.org/t/p/original" +
                          newResult[idx].kor_image_path ||
                        newResult[idx].image_path
                      }
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
        {/* 한글 데이터 없을 시 표현 할 값들 */}
        {modalIsOpen === true && (
          <Modal
            isOpen={modalIsOpen}
            // style={modalStyle}
            className="mymodal"
            overlayClassName="myoverlay"
            onRequestClose={() => setModalIsOpen(false)}
          >
            <div className="container">
              <img
                src={
                  "https://image.tmdb.org/t/p/original" +
                    resultModal[modalIdx].kor_image_path ||
                  resultModal[modalIdx].image_path
                }
                className="img-fluid"
                alt={resultModal[modalIdx].title}
              />
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
            </div>

            <p className="smfont">
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
