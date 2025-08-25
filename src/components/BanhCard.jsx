import React from "react";

export default function BanhCard({ name, price, image, onSelect }) {
  return (
    <div
      onClick={() => onSelect(name)}
      style={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "10px",
        margin: "10px",
        textAlign: "center",
        cursor: "pointer",
        width: "120px"
      }}
    >
      <img src={image} alt={name} style={{ width: "100px", height: "100px" }} />
      <h3>{name}</h3>
      <p>{price} VNĐ</p>
    </div>
  );
}
