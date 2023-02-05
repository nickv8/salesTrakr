import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState} from "react";

import Button from "react-bootstrap/Button";

import Badge from "react-bootstrap/Badge";

import CustomerServices from "../components/CustomerServices";


export default function CustomerDetails() {
  const navigate = useNavigate();
  const { customerId } = useParams();
  const [customer, setCustomer] = useState(null);
  // const CustomerDetailsContext = createContext(customerId);
 

  // handle delete customer
  const handleDelete = () => {
    CustomerServices.delete(customerId);
    //after delete navigate back to all recipes page
    setTimeout(() => navigate("/customers"), 500);
  };


  //print recipe details
  useEffect(() => {
    fetch(`http://localhost:8000/customers/${customerId}`)
      .then((res) => res.json())
      .then((data) => setCustomer(data));
  }, [customer, customerId]);

  return (
    <>
      {customer && (
        <>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/css/all.min.css"
            integrity="sha256-mmgLkCYLUQbXn0B1SRqzHar6dCnv9oZFPEC1g1cwlkk="
            crossorigin="anonymous"
          />
          <div class="container">
            <div class="row">
              <div class="col-md-5">
                <div class="project-info-box">
                  <p>
                    <h3>
                      <Badge pill bg="dark">
                        {customer.name}{" "}
                      </Badge>
                    </h3>
                  </p>
                  
                    <p>
                     <b>Contact Name: </b> {customer.contact_name}
                        </p>                                
                            <p>
                              <p>             
                 
                    <p>
                    <b>Phone Number: </b>
                    {customer.phone_number}
                    </p>
                    
                </p>
                    <p>
                      <p>
                  <p>
                    <b>Address:</b> {customer.address}
                  </p>
                 
                  <Button variant="outline-danger" size="sm" >
                   Add Order 
                  </Button>
                  
                     </p>
                    </p>
                  </p>  

                  <Button
                  variant="outline-warning"
                  size="sm"
                  onClick={handleDelete}
                >
                  Delete this recipe
                </Button>{" "}
                </div> 
                    </div>
                  </div>
                </div>  
        </>
      )}
    </>
  );
}


// name: req.body.name,
//         address: req.body.address,
//         phone_number: req.body.phonenumber,
//         contact_name: req.body.contactname,
//         contact_email: req.body.contactemail