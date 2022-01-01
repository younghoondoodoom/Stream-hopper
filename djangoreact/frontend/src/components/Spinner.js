// 로딩 스피너 개발해야 함.

import React from "react";

const Spinner = () => {
  return (
    <div>
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Spinner;
