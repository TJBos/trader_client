import React from "react";
import { Button, Card, Form } from "react-bootstrap";
import TradingViewWidget, { Themes } from "react-tradingview-widget";
import { URL } from "../App.js";

const Show = (props) => {
  const { selectedEquity } = props;
  const { holdings } = props;
  const [quote, setQuote] = React.useState();
  const [buyFormData, setBuyFormData] = React.useState(0);
  const [sellFormData, setSellFormData] = React.useState(0);

  const getQuote = () => {
    fetch(URL + `quote/${selectedEquity}`)
      .then((response) => response.json())
      .then((data) => setQuote(data["Global Quote"]));
  };

  React.useEffect(() => getQuote(), []);

  const handleBuySubmit = (event) => {
    console.log("submitted");
    event.preventDefault();
    const dollars = buyFormData * parseInt(quote["05. price"]);
    const holding = {
      ticker: selectedEquity,
      shares: buyFormData,
      dollarValue: dollars,
    };

    fetch(URL + "holdings", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(holding),
    });
    props.getHoldings();
    props.history.push("/");
  };

  const handleSellSubmit = (event) => {
    event.preventDefault();
    const sharesOwned = holdings.find((item) => item.ticker == selectedEquity)
      .shares;
    console.log("submitted");
    const holding = {
      ticker: selectedEquity,
      shares: sharesOwned - sellFormData,
      dollarValue: (sharesOwned - sellFormData) * parseInt(quote["05. price"]),
    };
    console.log(holding);

    fetch(
      URL +
        "holdings" +
        `/${holdings.find((item) => item.ticker == selectedEquity)._id}`,
      {
        method: "put",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(holding),
      }
    );
    props.getHoldings();
    props.history.push("/");
  };

  const handleBuyChange = (event) => {
    setBuyFormData(event.target.value);
  };

  const handleSellChange = (event) => {
    setSellFormData(event.target.value);
  };

  const determineHolding = () => {
    if (holdings.some((item) => item.ticker == selectedEquity)) {
      const sharesOwned = holdings.find((item) => item.ticker == selectedEquity)
        .shares;
      return (
        <div className="sellbox">
          Shares owned: {sharesOwned}
          <Form onSubmit={handleSellSubmit}>
            <Form.Control
              name="shares"
              type="number"
              min={0}
              max={sharesOwned}
              placeholder="enter number shares to sell"
              onChange={handleSellChange}
            ></Form.Control>
            <Button variant="primary" type="submit">
              Sell
            </Button>
          </Form>
        </div>
      );
    }
  };

  return (
    <>
      <div className="buybox">
        Share Price:
        {quote && quote["05. price"]}
        <Form onSubmit={handleBuySubmit}>
          <Form.Control
            name="shares"
            type="number"
            min={0}
            placeholder="enter number shares to buy"
            onChange={handleBuyChange}
          ></Form.Control>
          <Button variant="primary" type="submit">
            Buy
          </Button>
        </Form>
      </div>
      {holdings && determineHolding()}
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
