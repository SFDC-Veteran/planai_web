import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../auth/login";
import Signup from "../auth/signup/email";
import Write from "src/components/write";
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/write" element={<Write />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
