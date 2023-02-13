import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Result from "./components/Result/Result";
// import baseUrl from "./baseUrl";
import axios from "axios";

function App() {
  // const [result, setResult] = useState(2);
  // const [ocrText, setOcrText] = useState(
  //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  // );

  // const navigate = useNavigate();
  const [result, setResult] = useState();
  const [ocrText, setOcrText] = useState();

  // 0 - very bad
  // 1 - bad
  // 2 - good
  // 3 - very good

  const handleSubmit = async (e, image) => {
    e.preventDefault();
    // console.log({ image });
    const formData = new FormData();
    formData.append("image", image);
    try {
      await axios
        .post(`http://localhost:5000/hope2`, formData)
        .then((response) => {
          setResult(Number(response.data));
        });
    } catch (err) {
      console.log("Image Post Error ", err);
    }
  };
  return (
    <Router>
      {/* {result && <Navigate to="/result" />} */}
      <Navbar />
      <Routes>
        <Route
          exact
          path="/result"
          element={<Result result={result} ocrText={ocrText} />}
        />
        <Route
          path="/"
          element={<Home handleSubmit={handleSubmit} result={result} />}
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
