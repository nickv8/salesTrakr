import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import React from "react";


export default function Customer(props) {
  return (
    <Col className="p-3">
      <Card border="dark" style={{ width: "20rem" }}>
        <Card.Body>
          <Card.Title className="text-truncate">{props.customer.name}</Card.Title>
          <Row
            style={{
              position: "relative",
              left: "80px",
              paddingBottom: "10px",
            }}
          >
          </Row>

          <Button variant="success" href={`/customers/${props.customer._id}`}>
            Learn More
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
}
