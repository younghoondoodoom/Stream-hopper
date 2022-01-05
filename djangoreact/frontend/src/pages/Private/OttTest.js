import React, { useState, useCallback, useEffect } from "react";
import { useRecoilValue, useRecoilState } from "recoil";
import { genreTopMovie } from "../../api/api";
import QuestionList from "../../components/QuestionList";
import { ottTestAtom } from "../../store/testStore";

const OttTest = () => {
  const [page, setPage] = useState(false);
  const topGenreMovie = useRecoilValue(genreTopMovie);
  const [testData, setTestData] = useRecoilState(ottTestAtom);
  const [movieList, setMovieList] = useState([]);

  const handleMovieList = useCallback(
    (e) => {
      const value = e.target.value;
      let newData = movieList.filter((item) => item !== value);
      if (e.target.checked) newData.push(value);
      setMovieList(newData);
      console.log(e.target.value);
    },
    [movieList]
  );

  useEffect(() => {
    const newMovieList = [];
    for (let i of Object.values(movieList)) {
      newMovieList.push(i);
    }
    setTestData({ ...testData, prefer_contents: newMovieList });
    console.log(testData);
  }, [movieList]);

  function handlePage() {
    setPage(true);
  }

  return (
    <div className="OttTest">
      <div className="container">
        {!page && (
          <div>
            <QuestionList />
            <button onClick={handlePage}>다음</button>
          </div>
        )}

        {page && (
          <div>
            <h3>좋아하시는 영화를 선택하세요.(총 3개)</h3>
            <h4>{movieList.length} / 3</h4>
          </div>
        )}

        <div className="movie-box">
          <div className="row row-cols-4 row-cols-sm-5 row-cols-md-5">
            {page &&
              topGenreMovie.map((movie, idx) => {
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
        {movieList.length === 3 && <button>제출</button>}
      </div>
    </div>
  );
};

export default OttTest;
