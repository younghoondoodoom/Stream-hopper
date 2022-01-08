import React from "react";
import { ottData } from "../chart/ott";
import {
  ResponsiveContainer,
  ComposedChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

// mau, 매출액 차트
const MauChart = () => {
  return (
    <div>
      <h5>코로나 이후 ott 사용자 및 연간 매출액 추이</h5>
      <div className="chart1" style={{ width: "100%", height: 300 }}>
        <ResponsiveContainer>
          <ComposedChart
            width={600}
            height={400}
            data={ottData}
            margin={{
              top: 20,
              right: 20,
              bottom: 20,
              left: 20,
            }}
          >
            <CartesianGrid stroke="#808080" />
            <XAxis
              dataKey="name"
              tick={{ fill: "white" }}
              label={{
                value: "OTT",
                position: "insideBottomRight",
                offset: -5,
                fill: "white",
              }}
              scale="band"
            />
            <YAxis
              label={{
                value: "단위:만(명), 억(원)",
                angle: -90,
                offset: -5,
                position: "insideBottomLeft",
                fill: "white",
              }}
            />
            <Tooltip />
            <Legend />
            <Bar dataKey="2019(MAU)" stackId="a" barSize={50} fill="#808080" />
            <Bar dataKey="2020(MAU)" stackId="b" barSize={50} fill="#ffbb00" />
            <Bar dataKey="19매출액" stackId="a" fill="#FFE4E1" />
            <Bar dataKey="20매출액" stackId="b" fill="#FFB6C1" />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default MauChart;
