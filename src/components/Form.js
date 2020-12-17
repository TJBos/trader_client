import React from "react";
import { Form, Button } from "react-bootstrap";

const CustomForm = (props) => {
  //STATE FOR THE FORM
  // for create this will be set to an "empty entry"
  // for update this will be set to current entry
  const [formData, setFormData] = React.useState(props.entry);

  //FUNCTIONS
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent Form from Refreshing
    const user = JSON.parse(window.localStorage.getItem("user"));
    formData.user_id = user.id;
    props.handleSubmit(formData); // Submit to Parents desired function
    props.history.push("/"); //Push back to display page
  };

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Control
          as="textarea"
          rows={10}
          placeholder="What's on your mind today?"
          name="main"
          value={formData.main}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
        />
      </Form.Group>
      <Button variant="secondary" type="submit">
        {" "}
        {props.label}{" "}
      </Button>
    </Form>
  );
};

export default CustomForm;
