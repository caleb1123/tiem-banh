import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header
      style={{
        backgroundColor: "#f9fafb",
        width: "100%",
        padding: "16px 0",
        fontFamily: "'Arial', sans-serif",
        boxSizing: "border-box",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 1000,
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
      }}
    >
      {/* This style block contains all the CSS rules for the Header component.
        It's included directly within the component to ensure the styles are loaded correctly.
        Note: For larger applications, it is better to import CSS files separately.
      */}
      <style>
        {`
          .nav-container {
            max-width: min(100%, 1400px);
            width: 100%;
            margin: 0 auto;
            padding: 0 16px;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .nav-list {
            list-style: none;
            margin: 0;
            padding: 0;
            display: flex;
            gap: 32px;
          }
          .nav-item {
            margin: 0;
          }
          .nav-link {
            text-decoration: none;
            font-size: 18px;
            font-weight: 500;
            color: #1f2937;
            transition: all 0.3s ease;
            padding: 8px 16px;
            border-radius: 8px;
          }
          .nav-link:hover {
            background-color: #ec4899;
            color: #fff;
            transform: translateY(-2px);
          }
          .nav-link.active {
            background-color: #ec4899;
            color: #fff;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          }
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-10px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .fade-in {
            animation: fadeIn 0.5s ease-out;
          }
          @media (max-width: 768px) {
            .nav-container {
              padding: 0 8px;
            }
            .nav-list {
              gap: 16px;
            }
            .nav-link {
              font-size: 14px;
              padding: 6px 12px;
            }
          }
          @media (max-width: 480px) {
            .nav-list {
              gap: 8px;
              flex-wrap: wrap;
              justify-content: center;
            }
            .nav-link {
              font-size: 12px;
              padding: 4px 8px;
            }
          }
        `}
      </style>
      <div className="nav-container">
        <ul className="nav-list">
          <li className="nav-item fade-in">
            <NavLink
              to="/"
              className="nav-link"
              activeClassName="active"
            >
              Trang Chủ
            </NavLink>
          </li>
          <li className="nav-item fade-in">
            <NavLink
              to="/chon-banh"
              className="nav-link"
              activeClassName="active"
            >
              Chọn Bánh
            </NavLink>
          </li>
          <li className="nav-item fade-in">
            <NavLink
              to="/video"
              className="nav-link"
              activeClassName="active"
            >
              Video
            </NavLink>
          </li>
          <li className="nav-item fade-in">
            <NavLink
              to="/menu"
              className="nav-link"
              activeClassName="active"
            >
              Menu
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
