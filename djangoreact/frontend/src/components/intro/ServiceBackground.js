import React from "react";
import MauChart from "./chart/MauChart";
import WordCloudOtt from "./chart/WordCloudOtt";

const ServiceBackground = () => {
  const resizeStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "solid 1px #ffffff",
    borderRadius: "1rem",
    background: "#000000",
  };

  return (
    <div className="ServiceBg">
      <h3>인사이트</h3>
      <MauChart />
      <WordCloudOtt />
    </div>
  );
};

export default ServiceBackground;
