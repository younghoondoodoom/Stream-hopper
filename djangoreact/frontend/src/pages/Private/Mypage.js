import React from "react";
import { validLogin } from "../../api/api";
import { useRecoilValue } from "recoil";

const Mypage = () => {
  const user = useRecoilValue(validLogin);
  console.log(user.data);
  return (
    <div>
      <h3>{user.data.user}</h3>
    </div>
  );
};

export default Mypage;
