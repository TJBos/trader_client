import React from "react";
import { Button, Card } from "react-bootstrap";

const Display = (props) => {
  const { entries } = props;

  const loaded = () => {
    return (
      <div style={{ textAlign: "center" }}>
        {entries.reverse().map((item) => (
          <Card className="text-center">
            <Card.Header></Card.Header>
            <Card.Body>
              <Card.Title>{item.date}</Card.Title>
              <Card.Text>{item.main.slice(0, 25) + "..."}</Card.Text>
              <Button
                variant="secondary"
                onClick={() => {
                  props.selectEntry(item);
                  props.history.push("/show");
                }}
              >
                View Entry
              </Button>
            </Card.Body>
            <Card.Footer className="text-muted"></Card.Footer>
          </Card>
        ))}
      </div>
    );
  };

  const loading = <h3>Add a Journal Entry!</h3>;

  return entries.length > 0 ? loaded() : loading;
};

export default Display;
