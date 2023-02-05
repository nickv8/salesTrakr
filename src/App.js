import React from "react";
import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import "./index.css";
import CustomersList from "./pages/CustomersList";
import CustomerDetails from "./pages/CustomerDetails";


function App() {

    return (
      
        <BrowserRouter>
            <div className="App">
                <div className="page.body">
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/customers" element={<CustomersList />} />
                        <Route path="/customers/:customerId" element={<CustomerDetails />} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    )

}

export default App;