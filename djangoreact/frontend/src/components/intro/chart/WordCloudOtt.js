import React from "react";
import ReactWordcloud from "react-wordcloud";
import { Resizable } from "re-resizable";
import { netflix, hulu, amazon, disney } from "../chart/words";
import { select } from "d3-selection";

// 워드클라우드 차트
const WordCloudOtt = () => {
  const resizeStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "solid 1px #ffffff",
    borderRadius: "1rem",
    background: "#000000",
  };

  const options = {
    colors: ["#1f77b4", "#ff7f0e", "#2ca02c", "#d62728", "#9467bd", "#8c564b"],
    enableTooltip: true,
    deterministic: false,
    fontFamily: "impact",
    fontSizes: [5, 60],
    fontStyle: "normal",
    fontWeight: "normal",
    padding: 1,
    rotations: 3,
    rotationAngles: [0, 90],
    scale: "sqrt",
    spiral: "archimedean",
    transitionDuration: 1000,
  };

  function getCallback(callback) {
    return function (word, event) {
      const isActive = callback !== "onWordMouseOut";
      const element = event.target;
      const text = select(element);
      text
        .transition()
        .attr("background", "black")
        .attr("font-size", isActive ? "300%" : "100%")
        .attr("text-decoration", isActive ? "underline" : "none");
    };
  }

  const callbacks = {
    getWordTooltip: (word) => `${word.text} : ${word.value}`,
    onWordMouseOut: getCallback("onWordMouseOut"),
    onWordMouseOver: getCallback("onWordMouseOver"),
  };
  return (
    <div>
      <h5>각 ott 장르 데이터</h5>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2">
        <div className="col netflix">
          <h3>Netflix</h3>
          <Resizable
            defaultSize={{
              width: "100%",
              height: 300,
            }}
            style={resizeStyle}
          >
            <div style={{ width: "100%", height: "100%" }}>
              <ReactWordcloud
                words={netflix}
                options={options}
                callbacks={callbacks}
              />
            </div>
          </Resizable>
        </div>
        <div className="col disney">
          <h3>Disney +</h3>
          <Resizable
            defaultSize={{
              width: "100%",
              height: 300,
            }}
            style={resizeStyle}
          >
            <div style={{ width: "100%", height: "100%" }}>
              <ReactWordcloud
                words={disney}
                options={options}
                callbacks={callbacks}
              />
            </div>
          </Resizable>
        </div>
        <div className="col amazon">
          <h3>Amazon</h3>
          <Resizable
            defaultSize={{
              width: "100%",
              height: 300,
            }}
            style={resizeStyle}
          >
            <div style={{ width: "100%", height: "100%" }}>
              <ReactWordcloud
                words={amazon}
                options={options}
                callbacks={callbacks}
              />
            </div>
          </Resizable>
        </div>
        <div className="col hulu">
          <h3>Hulu</h3>
          <Resizable
            defaultSize={{
              width: "100%",
              height: 300,
            }}
            style={resizeStyle}
          >
            <div style={{ width: "100%", height: "100%" }}>
              <ReactWordcloud
                words={hulu}
                options={options}
                callbacks={callbacks}
              />
            </div>
          </Resizable>
        </div>
      </div>
    </div>
  );
};

export default WordCloudOtt;
