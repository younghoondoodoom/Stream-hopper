import React from "react";
import { mypageContents, mypageOtt, validLogin } from "../../api/api";
import { useRecoilValue } from "recoil";

const Mypage = () => {
  const user = useRecoilValue(validLogin);
  const ott = useRecoilValue(mypageOtt);
  const contents = useRecoilValue(mypageContents);
  return (
    <div className="MyPage">
      <h3>
        <span>{user.data.user}</span>님의 My-Page
      </h3>
      <div className="container">
        <h4>
          <span>{user.data.user}</span>이 좋아하는 콘텐츠!
        </h4>
        <div className="row row-cols-2 row-cols-sm-3 row-cols-md-5 movie-box">
          {contents.map((content, idx) => {
            const newcontent = {};
            newcontent[idx] = content;
            const korImg = newcontent[idx].kor_image_path;
            const originalImg = newcontent[idx].image_path;
            return (
              <div key={"contents" + idx} className="col">
                <div className="card bg-dark">
                  <img
                    name={idx}
                    src={`https://image.tmdb.org/t/p/original${
                      korImg || originalImg || null
                    } `}
                    alt="selectMovie"
                    className="img-fluid card-img-top"
                  />
                </div>
                <p>{newcontent[idx].kor_title || newcontent[idx].title}</p>
              </div>
            );
          })}
        </div>

        <h4>
          <span>{user.data.user}</span>께 추천하는 ott!
        </h4>
      </div>
    </div>
  );
};

export default Mypage;
