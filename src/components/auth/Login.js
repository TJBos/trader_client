import React from "react";
import { GlobalCtx } from "../../App";
import "./Login.css";
import { Button, Form } from "react-bootstrap";

const Login = (props) => {
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
    fetch(`${url}/login`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        window.localStorage.setItem("token", data.token);
        window.localStorage.setItem("user", JSON.stringify(data.user));
        setgState({ ...gState, token: true, user: data.user });
        setForm(blank);
        props.history.push("/");
      });
  };

  return (
    <Form onSubmit={handleSubmit} className="form-container">
      <h1>Log in</h1>
      <Form.Goup controlId="formUser">
        <Form.Control
          id="username"
          type="text"
          name="username"
          className="form-control"
          placeholder="Enter your username"
          value={form.username}
          onChange={handleChange}
        />
      </Form.Goup>

      <Form.Group controlId="formPassword">
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
export default Login;
