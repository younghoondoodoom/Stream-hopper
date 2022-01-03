import React from "react";

const TeamIntroduction = () => {
  return (
    <div className="TeamIntroduction">
      <div className="row row row-cols-2 row-cols-sm-2 row-cols-md-4">
        <div className="card col" style={{ background: "black" }}>
          <img
            src="https://images.unsplash.com/photo-1587504218914-44346092cef8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
            className="card-img-top"
            alt="..."
          />
          <ul className="list-group list-group-flush">
            <li className="list-group-item">김한예슬</li>
            <li className="list-group-item">데이터 분석</li>
            <li className="list-group-item">팀장</li>
          </ul>
        </div>
        <div className="card col" style={{ background: "black" }}>
          <img
            src="https://images.unsplash.com/photo-1587504218914-44346092cef8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
            className="card-img-top"
            alt="..."
          />
          <ul className="list-group list-group-flush">
            <li className="list-group-item">남기범</li>
            <li className="list-group-item">프론트엔드</li>
            <li className="list-group-item">갈굼대상</li>
          </ul>
        </div>
        <div className="card col" style={{ background: "black" }}>
          <img
            src="https://images.unsplash.com/photo-1587504218914-44346092cef8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
            className="card-img-top"
            alt="..."
          />
          <ul className="list-group list-group-flush">
            <li className="list-group-item">박수영</li>
            <li className="list-group-item">데이터 분석</li>
            <li className="list-group-item">마스코트</li>
          </ul>
        </div>
        <div className="card col" style={{ background: "black" }}>
          <img
            src="https://images.unsplash.com/photo-1587504218914-44346092cef8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
            className="card-img-top"
            alt="..."
          />
          <ul className="list-group list-group-flush">
            <li className="list-group-item">최영훈</li>
            <li className="list-group-item">백엔드</li>
            <li className="list-group-item">군기담당</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TeamIntroduction;
