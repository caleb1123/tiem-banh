import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ChonBanh from "./pages/ChonBanh"; // chỉnh tên file đúng
import VideoPage from "./pages/video";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chon-banh" element={<ChonBanh />} />
        <Route path="/video" element={<VideoPage />} />
      </Routes>
    </Router>
  );
}
