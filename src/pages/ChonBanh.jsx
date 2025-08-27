import React, { useState, useEffect } from "react";

// Import images from the image folder
import VOCALIST from "../assets/image/VOCALIST.png";
import MINI_MOCHI from "../assets/image/MINI_MOCHI.png";
import BEAR_PAW_COOKIES from "../assets/image/BEAR_PAW_COOKIES.png";
import FLUFFY_BEARCAKE from "../assets/image/FLUFFY_BEARCAKE_.png";
import BANH_MI_CUC_HIEN from "../assets/image/BANH_MI_CUC_HIEN.png";
import LAYERS_OF_LOVE from "../assets/image/LAYERS_OF_LOVE.png";
import SKY_WITHIN_YOU from "../assets/image/SKY_WITHIN_YOU.png";

// Cake list with Khóm Mây
const banhList = [
  { name: "VOCALIST", khomMay: 50, image: VOCALIST },
  { name: "MINI MOCHI", khomMay: 10, image: MINI_MOCHI },
  { name: "BEAR PAW COOKIES", khomMay: 20, image: BEAR_PAW_COOKIES },
  { name: "FLUFFY BEARCAKE", khomMay: 30, image: FLUFFY_BEARCAKE },
  { name: "BÁNH MÌ CÚC HIÊN", khomMay: 20, image: BANH_MI_CUC_HIEN },
  { name: "LAYERS OF LOVE", khomMay: 20, image: LAYERS_OF_LOVE },
  { name: "SKY WITHIN YOU", khomMay: 40, image: SKY_WITHIN_YOU },
];

// Notification component
const Notification = ({ message, type, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000); // Auto-dismiss after 3 seconds
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div
      style={{
        position: "fixed",
        top: "20px",
        right: "20px",
        backgroundColor: type === "success" ? "#ec4899" : "#f472b6",
        color: "#fff",
        padding: "16px 24px",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        zIndex: 1000,
        maxWidth: "300px",
        animation: "slideIn 0.3s ease-out",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{ fontSize: "16px", fontWeight: "500" }}>{message}</span>
        <button
          onClick={onClose}
          style={{
            background: "none",
            border: "none",
            color: "#fff",
            fontSize: "18px",
            cursor: "pointer",
          }}
        >
          &times;
        </button>
      </div>
    </div>
  );
};

// BanhCard component
const BanhCard = ({ name, khomMay, image, onSelect, isSelected }) => {
  return (
    <div
      onClick={onSelect}
      style={{
        position: "relative",
        backgroundColor: "#fff",
        borderRadius: "12px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        padding: "16px",
        margin: "8px",
        width: "100%",
        maxWidth: "300px",
        transition: "all 0.3s ease",
        cursor: "pointer",
        border: isSelected ? "4px solid #f472b6" : "1px solid #e5e7eb",
        boxSizing: "border-box",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-4px)";
        e.currentTarget.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.2)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
      }}
    >
      <img
        src={image}
        alt={name}
        style={{
          width: "100%",
          height: "200px",
          objectFit: "contain",
          borderRadius: "8px",
          marginBottom: "12px",
        }}
      />
      <h3
        style={{
          fontSize: "18px",
          fontWeight: "600",
          color: "#1f2937",
          margin: "0 0 8px",
        }}
      >
        {name}
      </h3>
      <p
        style={{
          fontSize: "16px",
          color: "#db2777",
          fontWeight: "500",
          margin: "0",
        }}
      >
        {khomMay} Khóm Mây
      </p>
      <div
        style={{
          position: "absolute",
          top: "8px",
          right: "8px",
          width: "24px",
          height: "24px",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: isSelected ? "#f472b6" : "#e5e7eb",
        }}
      >
        {isSelected && (
          <svg
            style={{ width: "16px", height: "16px", color: "#fff" }}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
        )}
      </div>
    </div>
  );
};

export default function ChonBanh() {
  const [selected, setSelected] = useState([]);
  const [notification, setNotification] = useState(null);

  // Show notification
  const showNotification = (message, type) => {
    setNotification({ message, type });
  };

  // Clear notification
  const clearNotification = () => {
    setNotification(null);
  };

  // Handle cake selection
  const handleSelect = (banh) => {
    const isSelected = selected.find((s) => s.name === banh.name);
    let newSelected;

    if (isSelected) {
      newSelected = selected.filter((s) => s.name !== banh.name);
    } else {
      newSelected = [...selected, banh];
    }

    const total = newSelected.reduce((sum, item) => sum + item.khomMay, 0);

    if (total > 100) {
      showNotification("Bạn chỉ được chọn tối đa 100 Khóm Mây!", "error");
      return;
    }

    setSelected(newSelected);
  };

  // Handle submit
  const handleSubmit = () => {
    if (selected.length === 0) {
      showNotification("Vui lòng chọn ít nhất một loại bánh!", "error");
      return;
    }
    const total = selected.reduce((sum, item) => sum + item.khomMay, 0);
    showNotification(
      `Bạn đã chọn: ${selected.map((s) => s.name).join(", ")} (Tổng: ${total} Khóm Mây)`,
      "success"
    );
  };

  const total = selected.reduce((sum, item) => sum + item.khomMay, 0);

  return (
    <div
      style={{
        backgroundColor: "#f9fafb",
        minHeight: "100vh",
        width: "100%",
        margin: 0,
          // padding: "120px 0 20px 0",
        fontFamily: "'Arial', sans-serif",
        boxSizing: "border-box",
        overflowY: "auto",
        height: "100vh",
      }}
    >
      <style>
        {`
          html, body {
            margin: 0;
            padding: 0;
            width: 100%;
            height: 100%;
            background-color: #f9fafb;
          }
          @keyframes slideIn {
            from { opacity: 0; transform: translateX(20px); }
            to { opacity: 1; transform: translateX(0); }
          }
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .fade-in {
            animation: fadeIn 0.5s ease-out;
          }
          button:hover {
            background-color: #db2777;
            transform: translateY(-2px);
          }
          * {
            box-sizing: border-box;
          }
          @media (max-width: 1024px) {
            .main-container {
              padding: 0 8px;
            }
            .outer-container {
              padding-top: 100px;
            }
            h2 {
              font-size: 22px;
              margin: 12px 0;
              padding-top: 20px;
            }
            p {
              font-size: 16px;
              margin-bottom: 16px;
            }
            .banh-card {
              width: calc(33.33% - 16px);
              margin: 8px;
            }
            button {
              padding: 10px 20px;
              font-size: 15px;
            }
          }
          @media (max-width: 768px) {
            .main-container {
              padding: 0 8px;
            }
            .outer-container {
              padding-top: 120px;
            }
            h2 {
              font-size: 18px;
              margin: 12px 0;
              padding-top: 20px;
            }
            p {
              font-size: 14px;
              margin-bottom: 16px;
            }
            .banh-card {
              width: calc(50% - 16px);
              margin: 8px;
            }
            button {
              padding: 8px 16px;
              font-size: 14px;
            }
          }
          @media (max-width: 480px) {
            .outer-container {
              padding-top: 140px;
            }
            .banh-card {
              width: 100%;
              max-width: 100%;
            }
            h2 {
              font-size: 16px;
              margin: 8px 0;
              padding-top: 20px;
            }
            p {
              font-size: 12px;
              margin-bottom: 12px;
            }
            button {
              padding: 8px 16px;
              font-size: 12px;
            }
          }
        `}
      </style>
      <div
        className="outer-container"
        style={{
          maxWidth: "min(100%, 1400px)",
          width: "100%",
          margin: "0 auto",
          textAlign: "center",
          padding: "0 16px",
        }}
      >
        <h2
          style={{
            fontSize: "28px",
            fontWeight: "700",
            color: "#1f2937",
            marginBottom: "16px",
          }}
          className="fade-in"
        >
          Bạn chỉ được chọn tối đa trong 100 khóm  mây
        </h2>
        <p
          style={{
            fontSize: "18px",
            color: "#4b5563",
            marginBottom: "24px",
          }}
          className="fade-in"
        >
          Tổng Khóm Mây: <span style={{ color: "#db2777" }}>{total}/100</span>
        </p>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "8px",
          }}
        >
          {banhList.map((banh) => (
            <BanhCard
              key={banh.name}
              {...banh}
              onSelect={() => handleSelect(banh)}
              isSelected={selected.some((s) => s.name === banh.name)}
            />
          ))}
        </div>
        <button
          onClick={handleSubmit}
          style={{
            marginTop: "32px",
            padding: "12px 24px",
            backgroundColor: "#ec4899",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            fontSize: "16px",
            fontWeight: "500",
            cursor: "pointer",
            transition: "all 0.3s ease",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          }}
          className="fade-in"
        >
          Xác Nhận
        </button>
      </div>
      {notification && (
        <Notification
          message={notification.message}
          type={notification.type}
          onClose={clearNotification}
        />
      )}
    </div>
  );
}