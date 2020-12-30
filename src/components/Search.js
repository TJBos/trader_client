import React from "react";
import { Form, Button, ListGroup } from "react-bootstrap";
import { URL } from "../App.js";
import "./search.css";

const Search = (props) => {
  const [formData, setFormData] = React.useState("");
  const [results, setResults] = React.useState();

  const handleSubmit = (event) => {
    if (props.selectedEquity) {
      event.preventDefault();
      props.history.push("/show");
    } else {
      alert("Please select a ticker from the list");
    }
  };

  const handleChange = (event) => {
    setFormData(event.target.value);
    const keyword = event.target.value;
    fetch(URL + `search/${keyword}`)
      .then((response) => response.json())
      .then((data) => {
        setResults(data.results.bestMatches);
        console.log(data.message);
      });
  };

  const displayResults = (list) => {
    return (
      <ListGroup variant="flush">
        {list.map((item) => {
          const descript = `${item["1. symbol"]} - ${item["2. name"]}`;
          return (
            <a className="result-item">
              <ListGroup.Item
                onClick={() => {
                  setFormData(descript);
                  props.selectEquity(item["1. symbol"]);
                }}
              >
                {descript}
              </ListGroup.Item>{" "}
            </a>
          );
        })}
      </ListGroup>
    );
  };

  return (
    <>
      <h3>Search by ticker or company</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Control
            type="text"
            placeholder="Enter search term"
            name="search"
            value={formData}
            onChange={handleChange}
          />
        </Form.Group>

        <Button variant="info" type="submit">
          Go!
        </Button>
      </Form>
      <div className="results">{results && displayResults(results)}</div>
    </>
  );
};

export default Search;
