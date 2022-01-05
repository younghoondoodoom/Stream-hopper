import React, { useState, useEffect, useCallback } from "react";
import { ottTestAtom, genre } from "../../store/testStore";
import { useRecoilState } from "recoil";

const OttTest = () => {
  const [testData, setTestData] = useRecoilState(ottTestAtom);
  const [isMember, setIsMember] = useState(false);
  const [preferGenre, setPreferGenre] = useState([]);

  const child = Number(testData.member_child_count);
  const teen = Number(testData.member_teenager_count);
  const adult = Number(testData.member_adult_count);

  const handleOttData = useCallback(
    (e) => {
      const { name, value } = e.target;
      setTestData({
        ...testData,
        [name]: value,
      });
    },
    [testData]
  );

  const handleGenre = useCallback(
    (e) => {
      const value = e.target.value;
      let newData = preferGenre.filter((item) => item !== value);
      if (e.target.checked) newData.push(value);
      setPreferGenre(newData);
    },
    [preferGenre]
  );

  useEffect(() => {
    const members = child + teen + adult;
    if (testData.member_number <= members) {
      setIsMember(true);
    } else {
      setIsMember(false);
    }
  }, [testData]);

  useEffect(() => {
    const genreList = [];
    for (let i of Object.values(preferGenre)) {
      genreList.push(i);
    }
    setTestData({ ...testData, genre: genreList.join() });
  }, [preferGenre]);

  return (
    <div className="OttTest">
      <form onChange={handleOttData}>
        <h3>1. 나이를 입력해주세요.</h3>
        <input name="age" type="number" min="1" max="150" defaultValue={1} />
        <h3>2. 성별을 선택하세요.</h3>
        <div className="radio-group">
          <span className="m">
            <input type="radio" value="Male" name="gender" id="male" />
            <label htmlFor="male">남자</label>
          </span>

          <span className="f">
            <input type="radio" value="Female" name="gender" id="female" />
            <label htmlFor="female">여자</label>
          </span>
        </div>
        <h3>3. 본인을 제외한 ott이용 인원을 입력해주세요.(최대 인원:3명)</h3>
        <label htmlFor="member_number">총 인원</label>
        <input
          type="number"
          name="member_number"
          min={0}
          max={3}
          defaultValue={0}
        />
        {testData.member_number >= 1 && (
          <div>
            <label htmlFor="member_adult_count">성인</label>
            <input
              name="member_adult_count"
              type="number"
              value={adult}
              min={0}
              max={3}
              disabled={isMember}
            />
            <label htmlFor="member_teen_count">청소년</label>
            <input
              name="member_teenager_count"
              type="number"
              value={teen}
              min={0}
              max={3}
              disabled={isMember}
            />
            <label htmlFor="member_child_count">아동</label>
            <input
              name="member_child_count"
              type="number"
              value={child}
              min={0}
              max={3}
              disabled={isMember}
            />
          </div>
        )}
        <h3>4. 원하시는 최소 화질을 선택해주세요.</h3>
        <div className="radio-group">
          <span className="pixel">
            <input type="radio" value="SD" name="pixel" id="SD" />
            <label htmlFor="SD">SD</label>
          </span>

          <span className="pixel">
            <input type="radio" value="FHD" name="pixel" id="FHD" />
            <label htmlFor="FHD">FHD</label>
          </span>

          <span className="pixel">
            <input type="radio" value="UHD" name="pixel" id="UHD" />
            <label htmlFor="UHD">UHD</label>
          </span>
        </div>

        <h3>5. 원하시는 가격대를 선택해주세요.</h3>
        <div className="radio-group">
          <span className="price">
            <input type="radio" value="6000" name="price_range" id="1" />
            <label htmlFor="1">~6000원</label>
          </span>

          <span className="price">
            <input type="radio" value="10000" name="price_range" id="2" />
            <label htmlFor="2">~10000원</label>
          </span>

          <span className="price">
            <input type="radio" value="14000" name="price_range" id="3" />
            <label htmlFor="3">~14000원 </label>
          </span>

          <span className="price">
            <input type="radio" value="18000" name="price_range" id="4" />
            <label htmlFor="4">~18000원</label>
          </span>
        </div>
      </form>

      <h3>6. 좋아하는 장르를 선택해 주세요.</h3>
      <div className="container">
        {genre.map((gen, idx) => {
          return (
            <span key={gen}>
              <input
                type="checkbox"
                name={idx}
                value={gen}
                className="btn-check"
                id={gen}
                autoComplete="off"
                onClick={handleGenre}
              />
              <label className="btn btn-outline-warning genre" htmlFor={gen}>
                {gen}
              </label>
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default OttTest;
