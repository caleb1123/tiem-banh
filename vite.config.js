import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  server: {
    host: "0.0.0.0", // Cho phép truy cập từ bên ngoài
    port: 5173, // Chạy trên cổng 5173
    strictPort: true,
    allowedHosts: ["tiembanhvuive.io.vn", "www.tiembanhvuive.io.vn"], // Thêm domain vào danh sách cho phép
  },
});