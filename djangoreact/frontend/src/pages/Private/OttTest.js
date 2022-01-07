import React from "react";
import { useRecoilState } from "recoil";
import QuestionList from "../../components/ott-test/QuestionList";
import { pageAtom } from "../../store/testStore";
import PreferTest from "../../components/ott-test/PreferTest";

// ott test 페이지
const OttTest = () => {
  const [curpage, setCurPage] = useRecoilState(pageAtom);

  const nextPage = () => {
    setCurPage(curpage + 1);
  };

  return (
    <div className="OttTest">
      <div className="container">
        {curpage < 4 ? (
          <div>
            <QuestionList />
          </div>
        ) : (
          <PreferTest />
        )}
      </div>
      {curpage !== 4 && <button onClick={nextPage}>다음</button>}
    </div>
  );
};

export default OttTest;
