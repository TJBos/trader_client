import React from "react";
import { Button, Card, Form } from "react-bootstrap";
import TradingViewWidget, { Themes } from "react-tradingview-widget";
const { API_KEY } = process.env;

const Show = (props) => {
  const { selectedEquity } = props;
  const [quote, setQuote] = React.useState();

  const getQuote = () => {
    fetch(
      `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${selectedEquity}&apikey=${API_KEY}`
    )
      .then((response) => response.json())
      .then((data) => setQuote(data["Global Quote"]));
  };

  React.useEffect(() => getQuote(), []);

  return (
    <>
      <div className="buybox">
        Share Price:
        {quote && quote["05. price"]}
        <Form>
          <Form.Control
            type="number"
            placeholder="enter number shares"
          ></Form.Control>

          <Button variant="primary" type="submit">
            Buy
          </Button>
        </Form>
      </div>

      <div className="trading-view">
        <TradingViewWidget
          symbol={`${selectedEquity}`}
          interval="D"
          timezone="Etc/UTC"
          theme={Themes.DARK}
          style="1"
          locale="en"
          width="600"
          height="400"
        />
      </div>
    </>
  );
};
export default Show;
