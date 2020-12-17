import React from "react";
import { Button, Card } from "react-bootstrap";

const Show = (props) => {
  const { entry } = props;
  return (
    <Card className="text-center">
      <Card.Header>Your thoughts on {entry.date}</Card.Header>
      <Card.Body>
        <Card.Text>{entry.main}</Card.Text>
        <Button
          variant="secondary"
          onClick={() => {
            props.history.push("/edit");
          }}
        >
          Edit
        </Button>
        <Button
          style={{ marginLeft: "10px" }}
          variant="secondary"
          onClick={() => {
            props.deleteEntry(entry);
            props.history.push("/");
          }}
        >
          Delete
        </Button>
      </Card.Body>
      <Card.Footer className="text-muted"></Card.Footer>
    </Card>
  );
};

export default Show;
