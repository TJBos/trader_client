import "./App.css";
import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import Display from "./components/Display";
import Show from "./components/Show";
import NaviLoggedIn from "./components/NaviLoggedIn";
import Navi from "./components/Navi";
import Signup from "./components/auth/Signup";
import Login from "./components/auth/Login";
import { Button, Card } from "react-bootstrap";
import Search from "./components/Search";

export const GlobalCtx = React.createContext(null);

function App() {
  return (
    <div className="App">
      <NaviLoggedIn />
      <main>
        <Switch>
          <Route path="/signup" exact component={Signup} />
          <Route path="/login" exact component={Login} />
          <Route exact path="/" render={(rp) => <Search {...rp} />} />
          <Route
            exact
            path="/calendar"
            render={(rp) => (
              <CalendarView
                {...rp}
                entries={entries}
                selectEntry={selectEntry}
              />
            )}
          />
          <Route
            exact
            path="/show"
            render={(rp) => (
              <Show
                {...rp}
                entry={selectedEntry}
                selectEntry={selectEntry}
                deleteEntry={deleteEntry}
              />
            )}
          />
        </Switch>
      </main>
    </div>
  );
}

export default App;
