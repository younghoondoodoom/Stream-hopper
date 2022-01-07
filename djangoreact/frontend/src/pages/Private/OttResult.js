import React, { useState, useEffect } from "react";
import { useRecoilValue } from "recoil";
import { postOttData } from "../../api/api";
import { ottTestAtom } from "../../store/testStore";
import require from "convert-keys";

// ott추천 결과 페이지
const OttResult = () => {
  const resultData = useRecoilValue(ottTestAtom);
  const [testResult, setTestResult] = useState({});

  const convertKeys = require("convert-keys");

  const snackeResultData = convertKeys.toSnake(resultData);

  useEffect(async () => {
    const result = await postOttData(snackeResultData);
    setTestResult(result[0]);
  }, []);

  return (
    <div className="OttResult">
      <h1>
        나와 잘 어울리는 ott는 <span>{testResult.name}</span>입니다.
      </h1>
      <div className="card text-white bg-dark mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img src={testResult.img_path} className="img-fluid" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h1 className="card-title">
                <span>{testResult.name}</span>
              </h1>
              <h3 className="card-text">
                사용 가능한 인원 : {testResult.max_user_count}
              </h3>
              <h3 className="card-text">최대화질 : {testResult.pixel}</h3>
              <p className="card-text">가격 : {testResult.cost}원</p>
            </div>
          </div>
        </div>
      </div>
      <button>홈으로</button>
    </div>
  );
};

export default OttResult;
