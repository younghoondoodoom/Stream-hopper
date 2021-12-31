import React from "react";
import { searchProgram } from "../../api/search";
import { useRecoilValueLoadable } from "recoil";

const SearchResult = () => {
  const queryLodable = useRecoilValueLoadable(searchProgram);
  const result = queryLodable.contents;
  return (
    <div className="SearchResult">
      {result.count > 0 &&
        result.results.map((result, idx) => {
          const newResult = {};
          newResult[idx] = result;
          return (
            <div>
              <img
                src={
                  "https://image.tmdb.org/t/p/w500" +
                    newResult[idx].kor_image_path || newResult[idx].image_path
                }
                alt={newResult[idx].kor_title}
              />
            </div>
          );
        })}
    </div>
  );
};

export default SearchResult;
