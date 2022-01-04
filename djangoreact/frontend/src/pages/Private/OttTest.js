import React, { useCallback } from "react";
import { ottTestAtom } from "../../store/testStore";
import { useRecoilState } from "recoil";

const OttTest = () => {
  const [testData, setTestData] = useRecoilState(ottTestAtom);

  const handleData = useCallback(
    (e) => {
      const { name, value } = e.target;
      setTestData({
        ...testData,
        [name]: value,
      });
      console.log(testData);
    },
    [testData]
  );

  return (
    <div className="OttTest">
      <form onChange={handleData}>
        <h3>1. 나이를 입력해주세요.</h3>
        <input name="age" type="number" min="1" max="150" defaultValue={1} />
        <h3>2. 성별을 선택하세요.</h3>
        <div className="mf">
          <span className="m">
            <input type="radio" value="M" name="sex" id="male" />
            <label htmlFor="male">남자</label>
          </span>

          <span className="f">
            <input type="radio" value="F" name="sex" id="female" />
            <label htmlFor="female">여자</label>
          </span>
        </div>

        <h3>3. 본인을 제외한 ott이용 인원을 입력해주세요.(최대 인원:3명)</h3>
        <label htmlFor="adult">성인</label>
        <input name="adult" type="number" min="0" max="3" defaultValue={0} />
        <label htmlFor="teen">청소년</label>
        <input name="teen" type="number" min="0" max="3" defaultValue={0} />
        <label htmlFor="child">아동</label>
        <input name="child" type="number" min="0" max="3" defaultValue={0} />
        <h3>4. 원하시는 최소 화질을 선택해주세요.</h3>
        <button>HD</button>
        <button>FHD</button>
        <button>UHD</button>
        <h3>5. 원하시는 가격대를 선택해주세요.</h3>
        <button>9500이하</button>
        <button>12000이하</button>
        <button>17400이하</button>
      </form>
    </div>
  );
};

export default OttTest;
