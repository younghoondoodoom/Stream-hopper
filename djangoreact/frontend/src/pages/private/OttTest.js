import React, { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import QuestionList from "../../components/ott-test/QuestionList";
import { ottTestAtom, pageAtom } from "../../store/testStore";
import PreferTest from "../../components/ott-test/PreferTest";

// ott test 페이지
const OttTest = () => {
  const [curpage, setCurPage] = useRecoilState(pageAtom);
  const data = useRecoilValue(ottTestAtom);
  const [showButton, setShowButton] = useState(false);
  const nextPage = () => {
    setCurPage(curpage + 1);
    setShowButton(false);
  };

  useEffect(() => {
    if (curpage === 1) {
      if (data.gender && data.first && data.second && data.third) {
        setShowButton(true);
      }
    }

    if (curpage === 2) {
      if (
        data.memberNumber ==
          Number(data.memberChildCount) + Number(data.memberAdultCount) &&
        data.pixel
      ) {
        setShowButton(true);
      }
    }

    if (curpage === 3) {
      if (data.genre) {
        setShowButton(true);
      }
    }
  }, [data]);

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
      <button onClick={nextPage} hidden={!showButton}>
        다음
      </button>
    </div>
  );
};

export default OttTest;
