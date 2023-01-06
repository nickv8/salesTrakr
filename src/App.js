import React from "react";
import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./pages/HomePage";



function App() {

    return (
        <BrowserRouter>
            <div className="App">
                <div className="page.body">
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    )

}

export default App;