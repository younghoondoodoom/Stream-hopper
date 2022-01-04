import React from "react";
import ReactWordcloud from "react-wordcloud";
import { Resizable } from "re-resizable";
import { netflix, hulu, amazon, disney } from "../chart/words";

const WordCloudOtt = () => {
  const resizeStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "solid 1px #ffffff",
    borderRadius: "1rem",
    background: "#000000",
  };
  return (
    <div>
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
              <ReactWordcloud words={netflix} />
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
              <ReactWordcloud words={disney} />
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
              <ReactWordcloud words={amazon} />
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
              <ReactWordcloud words={hulu} />
            </div>
          </Resizable>
        </div>
      </div>
    </div>
  );
};

export default WordCloudOtt;
