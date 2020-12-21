import "./App.css";
import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import Display from "./components/Display";
import Show from "./components/Show";

import { Button, Card } from "react-bootstrap";
import Search from "./components/Search";
import NaviLoggedIn from "./components/NaviLoggedIn";
export const GlobalCtx = React.createContext(null);
export const URL = "http://localhost:5000/";

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
          <Route
            exact
            path="/"
            render={(rp) => (
              <Display
                {...rp}
                selectEquity={selectEquity}
                holdings={holdings}
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
            path="/show"
            render={(rp) => (
              <Show
                {...rp}
                selectedEquity={selectedEquity}
                getHoldings={getHoldings}
              />
            )}
          />
        </Switch>
      </main>
    </div>
  );
}

export default App;
