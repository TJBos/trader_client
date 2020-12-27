import React from "react";
import { Button, Card } from "react-bootstrap";
import rd3 from "react-d3-library";
import { ResponsivePie } from "@nivo/pie";

const Display = (props) => {
  const { holdings } = props;
  const chartData = [];
  holdings &&
    holdings.forEach((el) => {
      chartData.push({
        id: el.ticker,
        value: el.dollarValue,
      });
    });
  let total = 0;
  chartData.forEach((el) => (total += el.value));

  const handleClick = (node, event) => {
    console.log(node);
    props.selectEquity(node.id);
    props.history.push("/show");
  };

  return (
    <>
      <div
        className="portfolio"
        style={{ border: "1px solid black", width: "40%" }}
      >
        Portfolio Value ={" "}
        <span style={{ fontWeight: "bold", color: "cyan" }}>{"$" + total}</span>
      </div>
      <div style={{ textAlign: "center", height: "400px" }}>
        <ResponsivePie
          data={chartData}
          margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
          innerRadius={0.5}
          padAngle={0.7}
          cornerRadius={3}
          colors={{ scheme: "dark2" }}
          borderWidth={1}
          borderColor={{ from: "color", modifiers: [["darker", 0.2]] }}
          radialLabelsSkipAngle={10}
          radialLabelsTextColor="#333333"
          radialLabelsLinkColor={{ from: "color" }}
          sliceLabelsSkipAngle={10}
          sliceLabelsTextColor="#333333"
          onClick={handleClick}
          defs={[
            {
              id: "dots",
              type: "patternDots",
              background: "inherit",
              color: "rgba(255, 255, 255, 0.3)",
              size: 4,
              padding: 1,
              stagger: true,
            },
            {
              id: "lines",
              type: "patternLines",
              background: "inherit",
              color: "rgba(255, 255, 255, 0.3)",
              rotation: -45,
              lineWidth: 6,
              spacing: 10,
            },
          ]}
          legends={[
            {
              anchor: "bottom",
              direction: "row",
              justify: false,
              translateX: 0,
              translateY: 56,
              itemsSpacing: 0,
              itemWidth: 100,
              itemHeight: 18,
              itemTextColor: "#999",
              itemDirection: "left-to-right",
              itemOpacity: 1,
              symbolSize: 18,
              symbolShape: "circle",
              effects: [
                {
                  on: "hover",
                  style: {
                    itemTextColor: "#000",
                  },
                },
              ],
            },
          ]}
        />
      </div>
    </>
  );
};

export default Display;
