import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Chào mừng đến Tiệm Bánh 🍞</h1>
      <p>Chọn ngay bánh ngon cho bạn!</p>
      <div style={{ marginTop: "20px" }}>
        <Link to="/chon-banh">
          <button style={{ padding: "10px 20px", fontSize: "16px", marginRight: "10px" }}>
            Chọn bánh
          </button>
        </Link>
        <Link to="/video">
          <button style={{ padding: "10px 20px", fontSize: "16px" }}>
            Xem video
          </button>
        </Link>
      </div>
    </div>
  );
}
