import React from "react";
import { Form, Button } from "react-bootstrap";
import { URL } from "../App.js";

//make a nice autocomplete form out of this!!

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
    return list.map((item) => {
      const descript = `${item["1. symbol"]} - ${item["2. name"]}`;
      return (
        <div
          style={{ border: "black 1px solid" }}
          onClick={() => {
            setFormData(descript);
            props.selectEquity(item["1. symbol"]);
          }}
        >
          {descript}
        </div>
      );
    });
  };

  return (
    <>
      <h1>Search</h1>
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

        <Button variant="secondary" type="submit">
          Submit
        </Button>
      </Form>
      <h1>Results</h1>
      {results && displayResults(results)}
    </>
  );
};

export default Search;
