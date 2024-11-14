import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignupEmail from 'src/components/auth/signup/email';
import SignupPassword from 'src/components/auth/signup/password';
import Profile from '../common/profile';
import Login from '../auth/login';
import News from '../Home/news';
import Write from "src/components/write";

const Router = () => {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/news" element={<News />} />
        <Route path="/signup/email" element={<SignupEmail />} />
        <Route path="/signup/password" element={<SignupPassword />} />
        <Route path="/write" element={<Write />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
