import React, { useState } from "react";
import BanhCard from "../components/BanhCard";
import ReactSvg from "../assets/react.svg"; // ví dụ ảnh

const banhList = [
  { name: "Bánh mì", price: 15000, image: ReactSvg },
  { name: "Bánh ngọt", price: 25000, image: ReactSvg },
  { name: "Bánh su kem", price: 20000, image: ReactSvg },
];

export default function ChonBanh() {
  const [selected, setSelected] = useState(null);

  const handleSelect = (name) => {
    setSelected(name);
    alert(`Bạn chọn: ${name}`);
  };

  return (
    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
      {banhList.map((banh) => (
        <BanhCard key={banh.name} {...banh} onSelect={handleSelect} />
      ))}
      {selected && <p>Bạn đã chọn: {selected}</p>}
    </div>
  );
}
