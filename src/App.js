import React from "react";
import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import "./index.css";
import CustomersList from "./pages/CustomersList";
import CustomerDetails from "./pages/CustomerDetails";
import AddCustomer from "./pages/AddCustomer";
import NavBar from "./components/NavBar";


function App() {

    return (
      
        <BrowserRouter>
            <div className="App">
            <NavBar />
                <div className="page.body">
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/customers" element={<CustomersList />} />
                        <Route path="/customers/:customerId" element={<CustomerDetails />} />
                        <Route path="/customers/addcustomer" element={<AddCustomer />} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    )

}

export default App;