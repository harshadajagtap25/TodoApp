import React from "react";
import { Route, Routes } from "react-router-dom";
import AddNew from "./AddNew";
import Home from "./Home";
import Login from "./Login";
import Signup from "./Signup";

const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/create" element={<AddNew />} />
      </Routes>
    </>
  );
};

export default AllRoutes;
