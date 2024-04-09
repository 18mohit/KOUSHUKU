import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./componetnts/Header";
import Footer from "./componetnts/Footer";
import Home from "./componetnts/Home";
import AdmiForm from "./componetnts/AdmiForm";
import Exam from "./componetnts/Exam";
import StoreHome from "./componetnts/store/StoreHome";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BranchHome from "./componetnts/OurBranch/BranchHome";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Admisson" element={<AdmiForm />} />
          <Route path="/Exam" element={<Exam />} />
          <Route path="/StoreHome" element={<StoreHome />} />
          <Route path="/OurBranch" element={<BranchHome />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
