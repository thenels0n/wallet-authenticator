import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import DetailsPage from "./components/DetailsPage/DetailsPage";
import SucessPage from "./components/SucessPage/SucessPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:wallet" element={<DetailsPage />} />
        <Route path="/success" element={<SucessPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
