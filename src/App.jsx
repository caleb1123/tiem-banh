import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import ChonBanh from "./pages/ChonBanh";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chon-banh" element={<ChonBanh />} />
      </Routes>
    </Router>
  );
}
