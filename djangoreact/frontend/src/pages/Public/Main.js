import React from "react";
import { queryAtom, searchFilter, pageUrl } from "../../api/search";
import { useRecoilState, useSetRecoilState } from "recoil";
import SearchResult from "../../components/SearchResult";
import TopMovie from "../../components/topMovie";

const Main = () => {
  //검색할 영화
  const [query, setQuery] = useRecoilState(queryAtom);
  const setFilter = useSetRecoilState(searchFilter);
  const setPageUrl = useSetRecoilState(pageUrl);
  // 검색 시 query에 담음
  // query이 변할 때마다 영화 데이터 조회
  const searching = (e) => {
    setQuery(e.target.value);
    setPageUrl(null);
  };

  return (
    <div className="Main">
      <div className="wrap">
        <div className="container">
          <div className="inputDiv">
            <form>
              <select onChange={(e) => setFilter(e.target.value)}>
                <option value="all">전체</option>
                <option value="title">제목</option>
                <option value="actor">배우</option>
                <option value="director">감독</option>
              </select>
              <input
                type="text"
                placeholder="제목/감독/배우를 입력하세요"
                onChange={searching}
                value={query}
              />
            </form>
            {query.length >= 3 && <SearchResult />}
          </div>
          {query.length <= 2 && <TopMovie />}
        </div>
      </div>
    </div>
  );
};

export default Main;
