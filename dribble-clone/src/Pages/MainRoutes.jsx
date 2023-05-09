
import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import CreditScorePage from "./CreditScorePage";


const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/credit" element={<CreditScorePage />}></Route>
      
      </Routes>
    </div>
  );
};

export default MainRoutes;
