import React, { useState } from "react";
import { searchProgram } from "../../api/search";
import { useRecoilState, useRecoilValueLoadable } from "recoil";
import Modal from "react-modal";
import { topMovieIdx } from "../../store/movieStore";

const SearchResult = () => {
  const queryLodable = useRecoilValueLoadable(searchProgram);
  const result = queryLodable.contents;
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalIdx, setmodalIdx] = useRecoilState(topMovieIdx);
  const resultModal = result.results;

  function handleModal(e) {
    const index = e.target.name;
    setmodalIdx(index);
    setModalIsOpen(true);
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
                <div className="container">
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
                  resultModal[modalIdx].kor_image_path
                    ? resultModal[modalIdx].kor_image_path
                    : resultModal[modalIdx].image_path
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
