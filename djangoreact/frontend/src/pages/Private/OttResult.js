import React, { useState, useEffect } from "react";
import { useRecoilValue } from "recoil";
import { postOttData } from "../../api/api";
import { ottTestAtom } from "../../store/testStore";

const OttResult = () => {
  const ottData = useRecoilValue(ottTestAtom);
  const [testResult, setTestResult] = useState({});
  useEffect(() => {
    const result = postOttData(ottData);
    setTestResult(result);
    console.log(testResult);
  }, []);
  return (
    <div>
      <h1>당신에게 어울리는 ott는 :{testResult.name}입니다.</h1>
    </div>
  );
};

export default OttResult;
