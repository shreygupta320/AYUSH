import { useState } from "react";
import "./doctor.css";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Booking from "./Pages/Booking";
import Recommendation from "./Pages/Recommendation";
import Support from "./Pages/Support";
import Login from "./Pages/Login";
import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Booking />} />
          <Route path="/Recommendation" element={<Recommendation />} />
          <Route path="/Support" element={<Support />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
