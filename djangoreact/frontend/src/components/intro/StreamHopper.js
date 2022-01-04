import React from "react";
import intro1 from "../../images/intro1.png";

const StreamHopper = () => {
  return (
    <div className="StreamHopper">
      <h3>서비스 소개</h3>

      <div className="intro-start">
        <h3>"Stream Hopper"란? ...</h3>
        <h3>. . .</h3>

        <h4>
          한 스트림 서비스에서 다른 서비스로 이동하는{" "}
          <span>stream hopping 현상</span>을 돕는다는 의미로 이용자의 성향에
          맞춰 최적의 콘텐츠가 많은 OTT로 추천하는 서비스입니다.
        </h4>
      </div>

      <img src={intro1} alt="intro1" className="img-fluid" />
      <div className="example-box">
        <h3>아래와 같은 고민을 하고 계신가요?</h3>
        <h3>. . .</h3>
        <h4>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="currentColor"
            className="bi bi-check"
            viewBox="0 0 16 16"
          >
            <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
          </svg>
          OTT 서비스를 여러개 가입하고 있지만 최대한 활용을 못하시고 매월 돈만
          나가네..
        </h4>
        <h4>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="currentColor"
            className="bi bi-check"
            viewBox="0 0 16 16"
          >
            <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
          </svg>
          볼 콘텐츠가 더 이상없는거 같고 다른 컨텐츠로 바꿔볼까
        </h4>
        <h4>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="currentColor"
            className="bi bi-check"
            viewBox="0 0 16 16"
          >
            <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
          </svg>
          이번에 오징어게임, 지옥 다 보고 볼게 없어
        </h4>
        <h4>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="currentColor"
            className="bi bi-check"
            viewBox="0 0 16 16"
          >
            <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
          </svg>
          이번에는 어떤 미드, 일드 , 애니메이션, 로맨스 ,액션물을 몰아서 볼까
        </h4>
        <h4>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="currentColor"
            className="bi bi-check"
            viewBox="0 0 16 16"
          >
            <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
          </svg>
          3명이서 같이 써야하는데 이번에는 어디가 가장 컨텐츠 맛집일까?
        </h4>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          fill="currentColor"
          className="bi bi-arrow-down"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
          />
        </svg>

        <h4 className="intro-result">
          그런 고민을 하는 모든 이들에게 맞는 <span>머신러닝 알고리즘</span>을
          이용하여 <span>최적의 OTT 서비스로 안내</span>해드립니다.
        </h4>
        <h4>
          이전에 좋아했던 컨텐츠와 비슷한 영화나 당신과 비슷한 취향을 갖는
          유저들이 좋아하는 컨텐츠가 어디서 보는지 궁금하시죠? 저희가 어디에
          있는지 안내할테니 믿고 따라오세요
        </h4>
      </div>
    </div>
  );
};

export default StreamHopper;
