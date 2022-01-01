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
        <div className="row row-cols-1 row-cols-md-4 g-1">
          {result.count > 0 &&
            result.results.map((result, idx) => {
              const newResult = {};
              newResult[idx] = result;
              return (
                <div className="container" key={"search" + idx}>
                  <div className="col">
                    <img
                      name={idx}
                      className="img-fluid"
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
            <button onClick={prevPage} disabled={result.previous === null}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                className="bi bi-arrow-left-square-fill"
                viewBox="0 0 16 16"
              >
                <path d="M16 14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12zm-4.5-6.5H5.707l2.147-2.146a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708-.708L5.707 8.5H11.5a.5.5 0 0 0 0-1z" />
              </svg>
            </button>
            <button onClick={nextPage} disabled={result.next === null}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                className="bi bi-arrow-right-square-fill"
                viewBox="0 0 16 16"
              >
                <path d="M0 14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v12zm4.5-6.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5a.5.5 0 0 1 0-1z" />
              </svg>
            </button>
          </div>
        </div>

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
