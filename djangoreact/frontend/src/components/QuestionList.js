import React, { useState, useEffect, useCallback } from "react";
import { ottTestAtom, genre } from "../store/testStore";
import { useRecoilState } from "recoil";

const QuestionList = () => {
  const [testData, setTestData] = useRecoilState(ottTestAtom);
  const [isMember, setIsMember] = useState(false);
  const [preferGenre, setPreferGenre] = useState([]);

  const child = Number(testData.member_child_count);
  const adult = Number(testData.member_adult_count);
  const priority = ["first", "second", "third"];

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
    const members = child + adult;
    if (testData.member_number <= members) {
      setIsMember(true);
    } else {
      setIsMember(false);
    }
    console.log(testData);
  }, [testData]);

  useEffect(() => {
    const genreList = [];
    for (let i of Object.values(preferGenre)) {
      genreList.push(i);
    }
    setTestData({ ...testData, genre: genreList.join() });
  }, [preferGenre]);

  return (
    <div>
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
        <h3>3. Ott 이용시 가장 중요하게 생각하는 값이 무엇인가요?</h3>
        {priority.map((i, idx) => {
          return (
            <div>
              <span>{idx + 1}순위</span>
              <select name={i}>
                <option value="pixel">화질</option>
                <option value="price_range">가격</option>
                <option value="member_number">사용인원</option>
              </select>
            </div>
          );
        })}

        <h3>4. 본인을 제외한 ott이용 인원을 입력해주세요.(최대 인원:3명)</h3>
        <label htmlFor="member_number">총 인원</label>
        <input
          type="number"
          name="member_number"
          min={0}
          max={4}
          defaultValue={1}
        />
        <div>
          <label htmlFor="member_adult_count">성인</label>
          <input
            name="member_adult_count"
            type="number"
            value={adult}
            min={0}
            max={4}
            disabled={isMember}
          />
          <label htmlFor="member_child_count">아동</label>
          <input
            name="member_child_count"
            type="number"
            value={child}
            min={0}
            max={4}
            disabled={isMember}
          />
        </div>
        <h3>5. 원하시는 최소 화질을 선택해주세요.</h3>
        <div className="radio-group">
          <span className="pixel">
            <input type="radio" value="480" name="pixel" id="SD" />
            <label htmlFor="SD">SD</label>
          </span>

          <span className="pixel">
            <input type="radio" value="1080" name="pixel" id="FHD" />
            <label htmlFor="FHD">FHD</label>
          </span>

          <span className="pixel">
            <input type="radio" value="2160" name="pixel" id="UHD" />
            <label htmlFor="UHD">UHD</label>
          </span>
        </div>

        <h3>6. 원하시는 가격대를 선택해주세요.</h3>
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

export default QuestionList;