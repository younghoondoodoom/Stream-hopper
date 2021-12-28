import React, { useEffect, useCallback, useState } from 'react'
import { searchProgram } from '../../api/search';
import { topMovies } from '../../api/search';
const Main = () => {
  const [str, setStr] = useState("");

  const search = useCallback((e) => {
    setStr(e.target.value);
  },[str]);

  useEffect(() => {
    searchProgram(str)
  }, [str])



  return (
    <div className='Main'>

      <div className='container'>
        
        <div className='inputDiv'>
          <input type="text" placeholder='제목, 감독, 배우, 영화를 입력하세요' value={str} onChange={search}/>
          
        </div>
        
        
        <h1>TOP Rated Movies</h1>

        <div className='container'>
          <div className="row">
            <div className="col">
            <img src="https://images.unsplash.com/photo-1586349948112-e980a7d194ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=689&q=80" className="img-fluid" alt="..."/>
            </div>
            <div className="col">
            <img src="https://images.unsplash.com/photo-1586349948112-e980a7d194ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=689&q=80" className="img-fluid" alt="..." />
            </div>
            <div className="col">
            <img src="https://images.unsplash.com/photo-1586349948112-e980a7d194ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=689&q=80" className="img-fluid" alt="..." />
            </div>
          </div>

        </div>
        <button onClick={topMovies}>눌러</button>
      </div>

    </div>
  )
}

export default Main
