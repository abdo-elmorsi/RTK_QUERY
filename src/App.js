import React from "react";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./pages/index";
import { Route, Routes } from "react-router-dom";
import UpdateProduct from "./pages/UpdateProduct";
const App = () => {
    return (
        <div className="container py-4 text-center">
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route
                    path={`/product/:id`}
                    element={<UpdateProduct />}
                ></Route>
            </Routes>
        </div>
    );
};

export default App;
