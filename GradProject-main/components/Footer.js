import { useState } from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#F9FAFB",
        padding: "40px 0",
        textAlign: "center",
      }}
    >
      <div className="container">
        <p style={{ color: "#9CA3AF", fontSize: "14px", marginBottom: "16px" }}>
          &copy; 2023 MedicalRoom. All rights reserved.
        </p>
        <ul
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            listStyle: "none",
            margin: 0,
            padding: 0,
          }}
        >
          <li style={{ marginRight: "16px" }}>
            <a
              href="#"
              style={{
                color: "#9CA3AF",
                textDecoration: "none",
                transition: "color 0.2s ease-in-out",
              }}
            >
              Terms of Service
            </a>
          </li>
          <li style={{ marginRight: "16px" }}>
            <a
              href="#"
              style={{
                color: "#9CA3AF",
                textDecoration: "none",
                transition: "color 0.2s ease-in-out",
              }}
            >
              Privacy Policy
            </a>
          </li>
          <li>
            <a
              href="#"
              style={{
                color: "#9CA3AF",
                textDecoration: "none",
                transition: "color 0.2s ease-in-out",
              }}
            >
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
