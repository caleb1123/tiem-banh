import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./pages/Header";
import Home from "./pages/Home";
import ChonBanh from "./pages/ChonBanh";
import VideoPage from "./pages/video";
// import Menu from "./pages/";

export default function App() {
  return (
    <Router>
      <Header />
      <div style={{ paddingTop: "80px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chon-banh" element={<ChonBanh />} />
          <Route path="/video" element={<VideoPage />} />
          {/* <Route path="/menu" element={<Menu />} /> */}
        </Routes>
      </div>
    </Router>
  );
}