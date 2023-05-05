
import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import SingleProduct from "./SingleProduct";

const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
      
      </Routes>
    </div>
  );
};

export default MainRoutes;
