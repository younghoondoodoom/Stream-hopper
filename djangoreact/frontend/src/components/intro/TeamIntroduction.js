import React from "react";
import Choi from "../../images/Choi.png";
import Kim from "../../images/Kim.png";
import Park from "../../images/Park.png";
import Nam from "../../images/Nam.jpg";
const TeamIntroduction = () => {
  return (
    <div className="TeamIntroduction">
      <div className="row row-cols-2 row-cols-sm-2 row-cols-md-4">
        <div className="card col" style={{ background: "black" }}>
          <h5 className="data">DS(PM)</h5>
          <img src={Kim} className="card-img-top" alt="..." />
          <ul className="list-group list-group-flush">
            <li className="list-group-item">김한예슬</li>
            <li className="list-group-item">팀장 or 베지터</li>
          </ul>
        </div>
        <div className="card col" style={{ background: "black" }}>
          <h5 className="frontend">Frontend</h5>
          <img src={Nam} className="card-img-top" alt="..." />
          <ul className="list-group list-group-flush">
            <li className="list-group-item">남기범</li>
            <li className="list-group-item">졸병1</li>
          </ul>
        </div>
        <div className="card col" style={{ background: "black" }}>
          <h5 className="data">DS</h5>
          <img src={Park} className="card-img-top" alt="..." />
          <ul className="list-group list-group-flush">
            <li className="list-group-item">박수영</li>
            <li className="list-group-item">눈사람(졸병2)</li>
          </ul>
        </div>
        <div className="card col" style={{ background: "black" }}>
          <h5 className="backend">Backend</h5>
          <img src={Choi} className="card-img-top" alt="..." />
          <ul className="list-group list-group-flush">
            <li className="list-group-item">최영훈</li>
            <li className="list-group-item">군기담당(졸병3)</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TeamIntroduction;
