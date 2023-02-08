import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import { useState } from "react";
import CustomerServices from "../components/CustomerServices";
import { useNavigate } from "react-router-dom";

export default function AddCustomer() {
  const navigate = useNavigate()
  const [name, setName] = useState("");
  const [contactName, setContactName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  const handleNameChange = (ev) => setName(ev.target.value);
  const handleContactNameChange = (ev) => setContactName(ev.target.value);
  const handlePhoneNumberChange = (ev) => setPhoneNumber(ev.target.value);
  const handleEmailChange = (ev) => setEmail(ev.target.value);
  const handleAddressChange = (ev) => setAddress(ev.target.value);

  const clearState = () => {
    setName("");
    setContactName("");
    setPhoneNumber("");
    setEmail("");
    setAddress("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRecipe = {
      name: name,
      contactName: contactName,
      phoneNumber: phoneNumber,
      contactEmail: email,
      address: address,
    };
    CustomerServices.create(newRecipe).then(() => clearState());
    alert("Customer Submitted");
    setTimeout(navigate('/customers'),10000)
  };
  return (
    
      <div class="container" >
        
       
        <div class="col-md-5 col-md-offset-1" >
              <Form
                  method="post"
                  onSubmit={handleSubmit}
                  role="form"
                  id="floating-label"
                  style={{ position: "relative", left: "350px", paddingBottom: "10px" }}>
          <h1> <Badge pill bg ="dark">Add New Customer</Badge></h1>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Customer Name</Form.Label>
                      <Form.Control
                          type="text"
                          placeholder="Customer/Facility name"
                          onChange={handleNameChange}
                          value={name}
                      />           
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Contact Name</Form.Label>
                      <Form.Control
                          type="text"
                          placeholder="Contact Name"
                          onChange={handleContactNameChange}
                          value={contactName}
                      />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Phone Number</Form.Label>
                      <Form.Control
                          type="text"
                          placeholder="Phone Number"
                      onChange={handlePhoneNumberChange}
                      value={phoneNumber}
                      />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Email</Form.Label>
                      <Form.Control
                          type="email"
                          placeholder="Email"
                      onChange={handleEmailChange}
                      value={email}
                      />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Address</Form.Label>
                      <Form.Control as="textarea"
                          rows={5}
                          placeholder="Address"
                          onChange={handleAddressChange}
                          value={address}
                      />
            </Form.Group>
            <Button variant="success" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    
  );
}
