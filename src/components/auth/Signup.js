import React from "react";
import { GlobalCtx } from "../../App";
import { Button, Form } from "react-bootstrap";
import "./Login.css";

const Signup = ({ history }) => {
  const { gState, setgState } = React.useContext(GlobalCtx);
  const { url } = gState;

  const blank = {
    username: "",
    password: "",
  };
  const [form, setForm] = React.useState(blank);

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { username, password } = form;
    fetch(`${url}/users`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        setForm(blank);
        console.log("signed up");
        history.push("/login");
      });
  };

  return (
    <Form className="form" onSubmit={handleSubmit} className="form-container">
      <h1>Sign up</h1>
      <Form.Group>
        <Form.Control
          id="username"
          type="text"
          name="username"
          className="form-control"
          placeholder="Enter your username"
          value={form.username}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group>
        <Form.Control
          id="password"
          type="password"
          name="password"
          className="form-control"
          placeholder="Enter your password"
          value={form.password}
          onChange={handleChange}
        />
      </Form.Group>
      <Button variant="secondary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default Signup;
