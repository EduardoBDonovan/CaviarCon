import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import ContactPage from "./components/ContactPage";
import GalleryPage from "./components/GalleryPage";
import RecipePage from "./components/RecipePage";
import ReworkParallax from "./components/ReworkParallax";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router basename="/CaviarCon/">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/recipes" element={<RecipePage />} />
        <Route path="/reworkparallax" element={<ReworkParallax />} />
      </Routes>
    </Router>
  );
}

export default App;
