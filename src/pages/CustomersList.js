import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Customer from "./Customer";
import NavBar from "../components/NavBar";

export default function CustomersList() {
  const [customers, setCustomers] = useState(null);
  

  useEffect(() => {
      fetch("http://localhost:8000/customers")
      .then((res) => res.json())
      .then((data) => setCustomers(data));
  }, [customers]);

  return (
    <>
   
    <Container>
      <Row>
        <Col className="py-4">
          <h1>
            All Customers
          </h1>
        </Col>
      </Row>
    
      <Row>
      
         {customers && customers.map((customer) => <Customer key={customer.name} customer={customer} />)}

      </Row>
      </Container>
      </>
  );
}
