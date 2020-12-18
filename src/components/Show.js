import React from "react";
import { Button, Card } from "react-bootstrap";

const Show = (props) => {
  return (
    <div class="tradingview-widget-container">
      <div id="tradingview_0f286"></div>
      <div className="tradingview-widget-copyright">
        <a
          href="https://www.tradingview.com/symbols/NASDAQ-AAPL/"
          rel="noopener"
          target="_blank"
        >
          <span class="blue-text">AAPL Chart</span>
        </a>{" "}
        by TradingView
      </div>
      <script
        type="text/javascript"
        src="https://s3.tradingview.com/tv.js"
      ></script>
      <script type="text/javascript">
        {
          new TradingView.widget({
            width: 980,
            height: 610,
            symbol: "NASDAQ:AAPL",
            interval: "D",
            timezone: "Etc/UTC",
            theme: "light",
            style: "1",
            locale: "en",
            toolbar_bg: "#f1f3f6",
            enable_publishing: false,
            allow_symbol_change: true,
            container_id: "tradingview_0f286",
          })
        }
      </script>
    </div>
  );
};
export default Show;
