import React, { useEffect, useCallback, useState } from 'react'
import { searchProgram } from '../../api/search';
import  { topMovies }  from '../../api/search';
import { useRecoilValue, useRecoilState, useSetRecoilState } from 'recoil';
import Modal from 'react-modal';
import { topMovieModal } from '../../store/movieStore';

const Main = () => {
  //검색할 영화
  const [str, setStr] = useState("");

  // 모달 on off
  const [modalIsOpen, setModalIsOpen] = useState(false);

  //top rated Movie List
  const topM = useRecoilValue(topMovies)

  // modal에 띄울 영화의 index값
  const [topModal, setTopModal] = useRecoilState(topMovieModal)

  // const setSearch = useRecoilValue(searchProgram(str))


  // 검색 시 str에 담음
  // str이 변할 때마다 영화 데이터 조회
  const searching = useCallback((e) => {
    setStr(e.target.value);
    // setSearch(str);
  },[str]);


  function handleModal(e) {
    const index = e.target.name;
    setTopModal(index)
    setModalIsOpen(true)
  }


  return (
    <div className='Main'>

      <div className='wrap'>
        <div className='container'>
        
          <div className='inputDiv'>
            <input type="text" placeholder='제목/감독/배우를 입력하세요' value={str} onChange={searching}/>
        
          </div>
        
          <h3>TOP Rated Movies</h3>
            <div className="row">
              {/* topMovie 리스트를 받아 map으로 화면에 뿌려줌 */}
              {topM.map((movie, idx) => {
                const newMovie = {};
                newMovie[idx] = movie;
                return (     
                    <div key={"top"+idx} className='col'>
                      <h5>Top {idx+1}</h5>
                      <img
                      name={idx}
                      src={"https://image.tmdb.org/t/p/w500"+newMovie[idx]["image_path"]}
                      alt="topMovie"
                      className='img-fluid'
                      onClick={handleModal}
                      />
                      <h5>{newMovie[idx]["title"]}</h5>
                    </div> 
                )
              })
            }
          </div>

          
            <Modal
              isOpen={modalIsOpen}
              // style={modalStyle}
              className="mymodal"
              overlayClassName="myoverlay"
              onRequestClose={() => setModalIsOpen(false)}
            >
                  <div className='container'>
                    <img src={`https://image.tmdb.org/t/p/original${topM[topModal]["image_path"]}`} className="img-fluid" alt={topM[topModal]["title"]} />
                  </div>
                  <h5 className="modal-title">{topM[topModal]["title"]}({topM[topModal]["release"]})</h5>
                  <p className='smfont'>{topM[topModal]["runtime"]}</p>
                  <div className='detailBox'>
                    
                    <p>장르<br/><span className='smfont'>{topM[topModal]["genre"]}</span></p>
                    <p>평점 : {topM[topModal]["rating"]} / {topM[topModal]["ott"]} </p>
                  </div>
                    
                    <p className="smfont">{topM[topModal]["overview"]}</p>
            </Modal>
          
          
        </div>
      </div>
    </div>
  )
}

export default Main
