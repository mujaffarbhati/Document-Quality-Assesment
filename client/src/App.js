import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Result from "./components/Result/Result";

function App() {
  const [result, setResult] = useState(2);
  const [ocrText, setOcrText] = useState(
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  );

  // 0 - very bad
  // 1 - bad
  // 2 - good
  // 3 - very good

  const handleSubmit = (e, image) => {
    e.preventDefault();
    console.log(image);

    // TODO - make axios call and save result and ocr
  };
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home handleSubmit={handleSubmit} />} />
        <Route
          exact
          path="/result"
          element={<Result result={result} ocrText={ocrText} />}
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
