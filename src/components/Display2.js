import React from "react";
import { Button, Card } from "react-bootstrap";
import { ResponsiveSunburst } from "@nivo/sunburst";
import chartData2 from "./chartdata.js";

const Display2 = (props) => {
  const { holdings } = props;
  const chartData = { name: "chart", children: [] };
  holdings &&
    holdings.forEach((el) => {
      chartData.children.push({
        name: el.ticker,
        val: el.dollarValue,
      });
    });

  return (
    <div style={{ textAlign: "center", height: "400px" }}>
      <ResponsiveSunburst
        data={chartData}
        margin={{ top: 40, right: 20, bottom: 20, left: 20 }}
        id="name"
        value="val"
        label="name"
        cornerRadius={2}
        borderWidth={1}
        borderColor="white"
        colors={{ scheme: "accent" }}
        childColor={{ from: "color", modifiers: [] }}
        animate={true}
        motionConfig="gentle"
        isInteractive={true}
      />
    </div>
  );
};

export default Display2;
