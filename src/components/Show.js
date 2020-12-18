import React from "react";
import { Button, Card } from "react-bootstrap";
import TradingViewWidget, { Themes } from "react-tradingview-widget";

const Show = (props) => {
  return (
    <div id="trading-view">
      <TradingViewWidget
        symbol="NASDAQ:AAPL"
        interval="D"
        timezone="Etc/UTC"
        theme={Themes.DARK}
        style="1"
        locale="en"
        width="600"
        height="400"
      />
    </div>
  );
};
export default Show;
