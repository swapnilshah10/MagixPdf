import "./App.css";
import Gridd from "./components/Gridd";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Mergee from "./components/Mergee";
import Compress from "./components/Compress";
import Eimage from "./components/Eimage";
import Extext from "./components/Etext";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
        <Navbar></Navbar>
      <Routes>
        <Route exact path="/" element={<Gridd />}></Route>
        <Route exact path="/merge" element={<Mergee />}></Route>
        <Route exact path="/Compress" element={<Compress />}></Route>
        <Route exact path="/ExtractImage" element={<Eimage />}></Route>
        <Route exact path="/ExtractText" element={<Extext />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
