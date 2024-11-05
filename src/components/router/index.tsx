import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../auth/login";
import Signup from "../auth/signup/email";
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
