import React from "react";
import MauChart from "./chart/MauChart";
import WordCloudOtt from "./chart/WordCloudOtt";

const ServiceBackground = () => {
  return (
    <div className="ServiceBg">
      <h3>인사이트</h3>
      <div className="text-box">
        <h4>
          코로나 19로 인해서 스트리밍 서비스 사용이 폭발적으로 증가하면서
          ott서비스가 생활화 되며, 각자의 목적에 맞게 멀티 구독을 하는 현상이
          늘고 있습니다.
        </h4>
        <h3>-----</h3>
        <p>
          한국 콘텐츠 진흥원의 2021 콘텐츠 이용 트렌드 연구에 의하면 국내에서는
          OTT 약 평균 2.7개를 구독하고 있다. 다중 구독자 응답자중 약 40%가 다른
          플랫폼으로 이동하거나 더 구독할 의향이 있다고 밝혔다. (출처: 2021
          디지털전환시대 콘텐츠 이용 트랜드 연구, 2021, 한국콘텐츠진흥원)
        </p>
        <h3 style={{ textAlign: "right" }}>-----</h3>
        <h4>
          주 사유는 시청하고 싶은 콘텐츠와 종류가 다양해서이다라고 밝혔습니다.
        </h4>
      </div>
      <MauChart />
      <div className="text-box">
        <img
          className="img-fluid squid-game"
          src="https://img.seoul.co.kr/img/upload/2021/09/28/SSI_20210928100517.jpg"
          alt="squidgame"
        />
        <h4>
          넷플릭스가 2021년 9월에 <span>오징어게임</span>을 발표하면서{" "}
          <span>당년 월 평균 신규 가입자</span>가 9월에 2배로 증가하며 위를
          뒷받침합니다. 콘텐츠에 따라 구독을 바꾸는 콘텐츠 유목민들의 스트리밍
          <span>서비스간의 이동</span>이 더욱 활발해 지고 있습니다.
        </h4>

        <h4>
          맞춤형 서비스를 제공하기 위해서 저희 서비스에서 각 OTT 회사에서
          <span>제공하는 콘텐츠의 특징</span>에 대해서 분석하였습니다. 그리고 그
          중에서 <span>장르</span>와 <span>영상물 등급</span>에서 큰 차이를
          보였습니다.
        </h4>
        <h3 style={{ textAlign: "center" }}>***</h3>
        <h4>
          <span>
            한번 하단의 워드 클라우드로 각 OTT회사별 탑 장르들을 확인해보세요
          </span>
        </h4>
      </div>

      <WordCloudOtt />
      <div className="row row-cols-2 row-cols-sm-2 row-cols-md-4">
        <div className="col">
          <div className="card text-white bg-dark">
            <img
              src="https://phantom-rule-09d.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F7d0e01ac-ea05-40bf-9f81-83516b15595f%2FUntitled.png?table=block&id=7e9ba77c-d499-4c9f-aeb2-ad7e2fc62056&spaceId=37e988c5-3756-4d17-83ed-3e13f1ef4323&width=480&userId=&cache=v2"
              className="card-img-top"
              alt="poster"
            />
            <div className="card-body">
              <h4 className="card-title netflix">Netflix</h4>
              <p className="card-text">스위트홈</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card text-white bg-dark">
            <img
              src="https://phantom-rule-09d.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F243028b3-0202-4fd5-b410-28ea221b1503%2FUntitled.png?table=block&id=581f6ae9-9e46-4e94-a4dc-8e636b425d55&spaceId=37e988c5-3756-4d17-83ed-3e13f1ef4323&width=1500&userId=&cache=v2"
              className="card-img-top"
              alt="poster"
            />
            <div className="card-body">
              <h4 className="card-title disney">Disney +</h4>
              <p className="card-text">Olaf</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card text-white bg-dark">
            <img
              src="https://flxt.tmsimg.com/assets/p11424120_b1t_v8_aa.jpg"
              className="card-img-top"
              alt="poster"
            />
            <div className="card-body">
              <h4 className="card-title amazon">Amazon</h4>
              <p className="card-text">Catastrophe</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card text-white bg-dark">
            <img
              src="https://w.namu.la/s/165921ca8de8027b93869de08f4f30790cc10b90387d75c6b5f85abd605efe8e54e28d1a6ff071ee1ce4fa740dd20dd98383ab4ce621dffe7fc95a2f16091cede8474daeb1f1b750a2102fe7487e838fb1a257b1886acf2110221206a2cd64c3506af1bb46bafee3f6b71ab36911376a"
              className="card-img-top"
              alt="poster"
            />
            <div className="card-body">
              <h4 className="card-title hulu">Hulu</h4>
              <p className="card-text">Modok</p>
            </div>
          </div>
        </div>
      </div>
      <div className="text-box">
        <h4>
          분석 결과에 의하면 <span>넷플릭스</span>는 활발한
          <span> 글로벌라이제이션</span> 전략으로 인터네셔널 장르를 강점으로
          내세우며 비영어권 국가들을 포함하며 다양성을 포용하며 오리지널에
          콘텐츠에 공격적인 투자를 해오고 있습니다.
        </h4>
        <h4>
          반면 <span>디즈니</span>는 대부분 미국에서 제작한 컨텐츠들로
          전체이용가가 가능한 가족, 동물, 애니메이션을 주 장르로 하고 있습니다.
        </h4>
        <h4>
          <span>훌루</span>는 <span>디즈니 +</span> 자회사로
          <span> 디즈니 +</span>와는 다른 성격의 콘텐츠들을 제공하고 있으며 일본
          른 서비스에 비해서 일본 콘텐츠들이 다른 OTT회사들보다 많은 것이
          특징입니다.
        </h4>
        <h4>
          <span>아마존</span>은 드라마장르 중심으로 엄청난 양의 다양한 콘텐츠를
          제공하고 있습니다. 특히, 인도에서 제작에 아낌없는 투자하며 miniTV라는
          무료 온라인 스트리밍 서비스도 제공하고있고 인도 콘텐츠 제작에도
          투자해오고 있습니다.
        </h4>
      </div>
    </div>
  );
};

export default ServiceBackground;
