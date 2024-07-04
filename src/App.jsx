import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./assets/Login";
import Register from "./assets/Register";
import "./index.css"
const App = () => {
  return (
 
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
  );
};

export default App;
