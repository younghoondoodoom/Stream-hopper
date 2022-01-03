import React from "react";
import intro1 from "../../images/intro1.png";
import intro2 from "../../images/intro2.jpg";
const StreamHopper = () => {
  return (
    <div className="StreamHopper">
      <div className="row row-cols-1 row-cols-sm-2">
        <div className="col intro2-text">
          <h1>이번엔 어디서 볼까?</h1>
          <p>
            한 OTT 서비스 쓰시면서 계속 무슨 컨텐츠를 볼까 계속해서 스크롤
            다운하시면서 고민하시나요?
          </p>
          <p>
            합리적인 소비자들을 위한 서비스! 컨텐츠로 고민하는 당신의 시간, 돈을
            아껴드립니다.
          </p>
          <p>한 편 이라도 더 즐기세요. 우리 모두는 소중하니까요</p>

          {/* <img src={intro1} alt="intro1" className="img-fluid" /> */}
        </div>
        <div className="col intro2">
          {/* <img src={intro2} alt="intro2" className="img-fluid" /> */}
        </div>
      </div>
    </div>
  );
};

export default StreamHopper;
