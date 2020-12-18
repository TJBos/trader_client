import "./App.css";
import React from "react";
import { Route, Link, Switch } from "react-router-dom";

import Show from "./components/Show";

import { Button, Card } from "react-bootstrap";
import Search from "./components/Search";
import NaviLoggedIn from "./components/NaviLoggedIn";
export const GlobalCtx = React.createContext(null);

function App() {
  const [equity, setEquity] = React.useState();
  const [selectedEquity, setSelectedEquity] = React.useState("");

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
            render={(rp) => <Show {...rp} ticker={selectedEquity} />}
          />
        </Switch>
      </main>
    </div>
  );
}

export default App;
