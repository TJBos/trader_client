import React from "react";
import { Form, Button } from "react-bootstrap";

//make a nice autocomplete form out of this!!

const Search = () => {
  const api_url =
    "https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=BA&apikey=4IXJY1MI0KBS3R8P";

  const [formData, setFormData] = React.useState({ search: "" });
  const [results, setResults] = React.useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(
      `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${formData.search}&apikey=${env.API_KEY}`
    )
      .then((response) => response.json())
      .then((data) => setResults(data));
  };

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const displayResults = (list) => {
    return list.bestMatches.map((item) => (
      <li>
        {item["1. symbol"]} ---- {item["2. name"]}
      </li>
    ));
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
            value={formData.search}
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
