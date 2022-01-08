import React, { useState, useEffect } from "react";
import { validLogin, postOttData } from "../../api/api";
import { useRecoilValue } from "recoil";
import { ottTestAtom } from "../../store/testStore";
import require from "convert-keys";

// ott추천 결과 페이지
const OttResult = () => {
  const user = useRecoilValue(validLogin);
  const resultData = useRecoilValue(ottTestAtom);
  const [testResult, setTestResult] = useState({});
  const convertKeys = require("convert-keys");
  const snackeResultData = convertKeys.toSnake(resultData);
  const goHome = () => {
    window.location.replace("/");
  };

  useEffect(async () => {
    const result = await postOttData(snackeResultData);
    await setTestResult(result);
  }, []);

  return (
    <div className="OttResult">
      <h1>
        <span>{user.data.user}</span>님께 추천하는 OTT는 다음과 같습니다.
      </h1>
      <p>
        <span>{user.data.user}</span>님이 가장 중요하게 생각하는{" "}
        {resultData.first}를 반영한 결과입니다.
      </p>
      <div className="container">
        {testResult.length > 0 &&
          testResult.map((ott, idx) => {
            const newOtt = {};
            newOtt[idx] = ott;
            return (
              <div className="card text-white bg-dark mb-3" key={"ott" + idx}>
                <div className="row">
                  <div className="col-md-4">
                    <img
                      src={newOtt[idx].img_path}
                      className="img-fluid rounded-start"
                      alt={newOtt[idx].name}
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h3 className="card-title">{newOtt[idx].name}</h3>
                      <h5>
                        <span>지원 화질</span> : {newOtt[idx].pixel}
                      </h5>
                      <h5>
                        <span>동시 접속 가능 인원</span> :{" "}
                        {newOtt[idx].max_user_count}
                      </h5>
                      <p className="card-text">
                        <small className="text-muted">
                          가격:{newOtt[idx].cost}
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        <button onClick={goHome}>홈으로</button>
      </div>
    </div>
  );
};

export default OttResult;
