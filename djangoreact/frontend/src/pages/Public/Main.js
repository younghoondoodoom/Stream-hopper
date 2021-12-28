import React, { useEffect, useCallback, useState } from 'react'
import { searchProgram } from '../../api/search';
import  { topMovies }  from '../../api/search';
import { useRecoilValue } from 'recoil';

const Main = () => {
  //검색할 영화
  const [str, setStr] = useState("");


  //top rated Movie List
  const topM = useRecoilValue(topMovies)


  // 검색 시 str에 담음
  const search = useCallback((e) => {
    setStr(e.target.value);
  },[str]);

  // str이 변할 때마다 영화 데이터 조회
  useEffect(() => {
    searchProgram(str)
  }, [str])

  return (
    <div className='Main'>

      <div className='wrap'>
        <div className='container'>
        
          <div className='inputDiv'>
            <input type="text" placeholder='제목, 감독, 배우, 영화를 입력하세요' value={str} onChange={search}/>
        
          </div>
        
        
          <h3>TOP Rated Movies</h3>
          <div className='container'>
            <div className="row">
              {/* topMovie 리스트를 받아 map으로 화면에 뿌려줌 */}
              {topM.map((movie, idx) => {
                const newMovie = {}
                newMovie[idx] = movie
                return (
                  <div key={idx} className='col'>
                    <h5>Top {idx+1}</h5>
                    <img
                      src={"https://image.tmdb.org/t/p/w500"+newMovie[idx]["image_path"]}
                      alt="topMovie"
                      className='img-fluid' />
                      <h5>{newMovie[idx]["title"]}</h5>
                  </div>
                )
              })
        
            }
            </div>
          </div>
          <button>눌러</button>
        </div>
      </div>

    </div>
  )
}

export default Main
