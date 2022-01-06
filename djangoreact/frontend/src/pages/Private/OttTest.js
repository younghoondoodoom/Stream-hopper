import React, { useState, useCallback, useEffect } from "react";
import { useRecoilValue, useRecoilState } from "recoil";
import { genreTopMovie } from "../../api/api";
import QuestionList from "../../components/QuestionList";
import { ottTestAtom, pageAtom } from "../../store/testStore";
import { Link } from "react-router-dom";

const OttTest = () => {
  const [curpage, setCurPage] = useRecoilState(pageAtom);
  const topGenreMovie = useRecoilValue(genreTopMovie);
  const [testData, setTestData] = useRecoilState(ottTestAtom);
  const [movieList, setMovieList] = useState([]);

  const handleMovieList = useCallback(
    (e) => {
      const value = e.target.value;
      let newData = movieList.filter((item) => item !== value);
      if (e.target.checked) newData.push(value);
      setMovieList(newData);
    },
    [movieList]
  );
  function onClick() {
    setCurPage(1);
  }

  function nextPage() {
    setCurPage(curpage + 1);
  }

  function prevPage() {
    setCurPage(curpage - 1);
  }
  useEffect(() => {
    const newMovieList = [];
    for (let i of Object.values(movieList)) {
      newMovieList.push(i);
    }
    setTestData({ ...testData, prefer_contents: newMovieList });
  }, [movieList]);

  return (
    <div className="OttTest">
      <div className="container">
        {curpage < 4 ? (
          <div>
            <QuestionList />
          </div>
        ) : (
          <div className="movie-box">
            <h3>좋아하시는 영화를 선택하세요.(총 3개)</h3>
            <h4>{movieList.length} / 3</h4>
            <div className="row row-cols-4 row-cols-sm-6 row-cols-md-6">
              {topGenreMovie.map((movie, idx) => {
                const newData = {};
                newData[idx] = movie;
                const korImg = newData[idx].kor_image_path;
                const originalImg = newData[idx].image_path;
                return (
                  <div key={"contents" + idx} className="col">
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
                      name="prefer_contents"
                      src={`https://image.tmdb.org/t/p/original${
                        korImg || originalImg || null
                      } `}
                      alt="selectMovie"
                      className="img-fluid card-img-top"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
      {curpage !== 1 && <button onClick={prevPage}>이전</button>}

      {movieList.length === 3 ? (
        <Link to="/ott_result">
          <button onClick={onClick}>제출</button>{" "}
        </Link>
      ) : (
        <button onClick={nextPage}>다음</button>
      )}
    </div>
  );
};

export default OttTest;
