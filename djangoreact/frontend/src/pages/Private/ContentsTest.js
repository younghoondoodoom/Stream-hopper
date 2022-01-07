import React, { useState, useCallback } from "react";
import { useRecoilState, useRecoilValue, useRecoilValueLoadable } from "recoil";
import { getContentsRecommended, validLogin } from "../../api/api";
import Modal from "react-modal";
import { movieIdx } from "../../store/movieStore";

// 영화 추천 페이지
const ContentsTest = () => {
  const user = useRecoilValue(validLogin);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalIdx, setModalIdx] = useRecoilState(movieIdx);
  const [likeList, setLikeList] = useState([]);
  const contentsResult = useRecoilValueLoadable(getContentsRecommended);
  const contents = contentsResult.contents;

  const handleMovieList = useCallback(
    async (e) => {
      const value = e.target.value;
      let newData = await likeList.filter((item) => item !== value);
      if (e.target.checked) newData.push(value);
      await setLikeList(newData);
      console.log(likeList);
    },

    [likeList]
  );

  const handleModal = useCallback(
    async (e) => {
      const index = e.target.name;
      await setModalIdx(index);
      setModalIsOpen(true);
    },
    [setModalIdx]
  );

  return (
    <div className="ContentTest">
      <h3>
        <span>{user.data.user}</span>님 만을 위한 컨텐츠
      </h3>
      <p>(마음에 드는 영화를 찜해주세요.)</p>
      <div className="container movie-box">
        <div className="row row-cols-4 row-cols-sm-4 row-cols-md-5">
          {contents.length > 0 &&
            contents.map((content, idx) => {
              const newContents = {};
              newContents[idx] = content;
              const korImg = newContents[idx].kor_image_path;
              const originalImg = newContents[idx].image_path;
              const score = newContents[idx].contentrecommendation_set[0];
              return (
                <div key={"content" + idx} className="col">
                  <div className="card text-white bg-dark match-rate">
                    <input
                      id={newContents[idx].id}
                      type="checkbox"
                      value={newContents[idx].id}
                      onClick={handleMovieList}
                    />
                    <label
                      value={newContents[idx].id}
                      htmlFor={newContents[idx].id}
                    >
                      ❤
                    </label>
                    <a href="#">
                      <img
                        name={idx}
                        src={`https://image.tmdb.org/t/p/original${
                          korImg || originalImg || null
                        } `}
                        alt={newContents[idx].title}
                        value={newContents[idx].id}
                        className="img-fluid card-img-top"
                        onClick={handleModal}
                      />
                      <span className="transition overlay">
                        <h5>{score.score}% 일치</h5>
                      </span>
                    </a>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      {modalIsOpen === true && contents !== "undefined" && (
        <Modal
          isOpen={modalIsOpen}
          className="mymodal"
          overlayClassName="myoverlay"
          onRequestClose={() => setModalIsOpen(false)}
        >
          <div className="container">
            {contents[modalIdx].kor_image_path !== "undefined" ||
            contents[modalIdx].image_path !== "undefined" ? (
              <img
                src={`https://image.tmdb.org/t/p/original${
                  contents[modalIdx].kor_image_path ||
                  contents[modalIdx].image_path
                } `}
                className="img-fluid"
                alt={contents[modalIdx].title}
              />
            ) : null}
          </div>

          <h5 className="modal-title">
            {contents[modalIdx].kor_title || contents[modalIdx].title}(
            {contents[modalIdx].release})
          </h5>

          <p className="smfont">{contents[modalIdx].runtime}</p>

          <div className="detailBox">
            <p>
              장르
              <span className="smfont">{contents[modalIdx].genre}</span>
            </p>
            <p>
              평점 : {contents[modalIdx].rating} /{contents[modalIdx].ott}
            </p>
          </div>

          <p className="smfont">
            {contents[modalIdx].kor_overview || contents[modalIdx].overview}
          </p>
        </Modal>
      )}
    </div>
  );
};

export default ContentsTest;
