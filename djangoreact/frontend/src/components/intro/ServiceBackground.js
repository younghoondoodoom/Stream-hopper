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
          ott서비스가 생활화 되었습니다. 지금도 매월 구독료를 내고 있지
          않으신가요?
        </h4>
      </div>
      <MauChart />

      <div className="text-box">
        <h4>
          OTT가 일상화 되면서 이런 OTT 플랫폼이 많이 등장 하였습니다. 각
          회사에서 제공하는 컨텐츠 성격이 다르다는 것을 알고 계시나요?
        </h4>
      </div>
      <div className="row row-cols-2 row-cols-sm-2 row-cols-md-2">
        <div className="col">
          <div className="card text-white bg-dark">
            <img
              src="https://phantom-rule-09d.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F7d0e01ac-ea05-40bf-9f81-83516b15595f%2FUntitled.png?table=block&id=7e9ba77c-d499-4c9f-aeb2-ad7e2fc62056&spaceId=37e988c5-3756-4d17-83ed-3e13f1ef4323&width=480&userId=&cache=v2"
              className="card-img-top"
              alt="poster"
            />
            <div className="card-body">
              <h5 className="card-title netflix">Netflix</h5>
              <p className="card-text">Netflix 오리지널 콘텐츠 : 스위트홈</p>
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
              <h5 className="card-title disney">Disney +</h5>
              <p className="card-text">Disney + 오리지널 콘텐츠 : Olaf</p>
            </div>
          </div>
        </div>
      </div>
      <div className="text-box">
        <h5>
          디즈니 플러스에서는 콘텐츠가 대부분 전체이용가 콘텐츠가 대부분이며
          넷플릭스는 다양한 장르로 성인용 콘텐츠가 많습니다. 그래서 각자의
          목적에 맞게 멀티 구독을 하는 현상이 늘고 있습니다. 시장조사기관인
          엠브레인 트렌드모니터가 60세 미만 성인 1000명을 대상으로 조사한 결과,
          OTT 서비스 이용자의 40%가 다른 OTT 플랫폼도 중복 사용하는 것으로
          나타났습니다.
        </h5>
      </div>
      <WordCloudOtt />
      <div className="text-box">
        <h5>
          분석 결과에 의하면 넷플릭스는 활발한 글로벌라이제이션 전략으로
          인터네셔널 장르를 강점으로 내세우며 비영어권 국가들을 포함하며
          다양성을 포용하며 넷플릭스 오리지널에 공격적인 투자를 해오고 있습니다.
          반면 디즈니는 대부분 미국에서 제작한 컨텐츠들로 전체이용가가 가능한
          가족, 동물, 애니메이션을 주 장르로 하고 있습니다. 훌루는 디즈니 +
          자회사로 디즈니+와는 다른 성격의 콘텐츠들을 제공하고 있으며 일본 다른
          서비스에 비해서 애니메이션이 많은 것이 특징입니다. 아마존은 드라마장르
          중심으로 엄청난 양의 컨텐츠를 제공하면서 인도에서 컨텐츠 제작에
          아낌없는 투자와 miniTV 라는 무료 온라인 스트리밍 서비스도 제공하고
          있습니다.
        </h5>
      </div>
    </div>
  );
};

export default ServiceBackground;
