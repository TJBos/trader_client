import React from "react";
import { Button, Card, Form } from "react-bootstrap";
import TradingViewWidget, { Themes } from "react-tradingview-widget";
import { URL } from "../App.js";
const { API_KEY } = process.env;
//const URL = "http://localhost:5000/holdings";

const Show = (props) => {
  const { selectedEquity } = props;
  const [quote, setQuote] = React.useState();
  const [formData, setformData] = React.useState(0);

  const getQuote = () => {
    fetch(
      `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${selectedEquity}&apikey=${API_KEY}`
    )
      .then((response) => response.json())
      .then((data) => setQuote(data["Global Quote"]));
  };

  React.useEffect(() => getQuote(), []);

  const handleSubmit = (event) => {
    console.log("submitted");
    event.preventDefault();
    const dollars = formData * parseInt(quote["05. price"]);
    const holding = {
      ticker: selectedEquity,
      shares: formData,
      dollarValue: dollars,
    };

    fetch(URL, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(holding),
    });
    props.history.push("/");
    props.getHoldings();
  };

  const handleChange = (event) => {
    setformData(event.target.value);
  };

  return (
    <>
      <div className="buybox">
        Share Price:
        {quote && quote["05. price"]}
        <Form onSubmit={handleSubmit}>
          <Form.Control
            name="shares"
            type="number"
            min={0}
            placeholder="enter number shares"
            onChange={handleChange}
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
