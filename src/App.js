import "./App.css";
import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import Display from "./components/Display";
import Show from "./components/Show";
import Strategy from "./components/Strategy";
import Home from "./components/Home";
import { Button, Card } from "react-bootstrap";
import Search from "./components/Search";
import NaviLoggedIn from "./components/NaviLoggedIn";
import TradingBot from "./components/tradingbot";
export const GlobalCtx = React.createContext(null);
export const URL = "https://levels-api.herokuapp.com/";

function App() {
  const [holdings, setHoldings] = React.useState();
  const [selectedEquity, setSelectedEquity] = React.useState({});

  const getHoldings = () => {
    fetch(URL + "holdings")
      .then((response) => response.json())
      .then((data) => setHoldings(data));
  };

  React.useEffect(() => getHoldings(), []);

  const selectEquity = (equity) => {
    setSelectedEquity(equity);
  };

  return (
    <div className="App">
      <NaviLoggedIn />
      <main>
        <Switch>
          <Route exact path="/" render={() => <Home />} />
          <Route
            exact
            path="/portfolio"
            render={(rp) => (
              <Display
                {...rp}
                selectEquity={selectEquity}
                holdings={holdings}
                getHoldings={getHoldings}
              />
            )}
          />
          <Route
            exact
            path="/search"
            render={(rp) => (
              <Search
                {...rp}
                selectEquity={selectEquity}
                selectedEquity={selectedEquity}
              />
            )}
          />
          <Route
            exact
            path="/strategy"
            render={(rp) => (
              <Strategy
                {...rp}
                selectEquity={selectEquity}
                selectedEquity={selectedEquity}
              />
            )}
          />
          <Route exact path="/tradingbot" render={() => <TradingBot />} />

          <Route
            exact
            path="/show"
            render={(rp) => (
              <Show
                {...rp}
                selectedEquity={selectedEquity}
                getHoldings={getHoldings}
                holdings={holdings}
              />
            )}
          />
        </Switch>
      </main>
    </div>
  );
}

export default App;
