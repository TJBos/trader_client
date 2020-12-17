import "./App.css";
import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import Display from "./components/Display";
import CustomForm from "./components/Form";
import Show from "./components/Show";

function AppB() {
  //variable for url
  const url = "http://localhost:3000";
  //create the state to hold the entries
  const [entries, setEntries] = React.useState([]);
  //empty
  const emptyEntry = {
    main: "",
    date: null,
  };
  //select an entry
  const [selectedEntry, setSelectedEntry] = React.useState({});

  //make function that calls API to get the entries
  const getEntries = () => {
    fetch(url + "/entries/")
      .then((response) => response.json())
      .then((data) => setEntries(data));
  };

  //useEffect to do initial fetch of entries
  React.useEffect(() => getEntries(), []);

  //handleCreate function for creating new entries
  const handleCreate = (newEntry) => {
    fetch(url + "/entries/", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newEntry),
    }).then(() => {
      getEntries();
    });
  };

  const handleUpdate = (entry) => {
    fetch(url + `/entries/${entry.id}`, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(entry),
    }).then(() => {
      // don't need the response from the post but will be using the .then to update the list of entries
      getEntries();
    });
  };

  const selectEntry = (entry) => {
    setSelectedEntry(entry);
  };

  const deleteEntry = (entry) => {
    fetch(url + `/entries/${entry.id}`, {
      method: "delete",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      // don't need the response from the post but will be using the .then to update the list
      getEntries();
    });
  };

  return (
    <div className="App">
      <h1>Journal</h1>
      <main>
        <Switch>
          <Route
            exact
            path="/"
            render={(rp) => (
              <>
                <Link to="/create">
                  <button>Add Entry</button>
                </Link>
                <Display
                  {...rp}
                  entries={entries}
                  selectEntry={selectEntry}
                  deleteEntry={deleteEntry}
                />
              </>
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
          <Route
            exact
            path="/create"
            render={(rp) => (
              <CustomForm
                {...rp}
                label="create"
                entry={emptyEntry}
                handleSubmit={handleCreate}
              />
            )}
          />
          <Route
            exact
            path="/edit"
            render={(rp) => (
              <CustomForm
                {...rp}
                label="update"
                entry={selectedEntry}
                handleSubmit={handleUpdate}
              />
            )}
          />
        </Switch>
      </main>
    </div>
  );
}

export default AppB;
