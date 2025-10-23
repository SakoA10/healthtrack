import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import DailyLog from "./pages/DailyLog";
import Progress from "./pages/Progress";
import Contact from "./pages/Contact";
import DailyLogDetail from "./pages/DailyLogDetail";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/daily-log" element={<DailyLog />} />
        <Route path="/progress" element={<Progress />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/log/:date" element={<DailyLogDetail />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
