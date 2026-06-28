"use client";

import { a } from "framer-motion/client";
import React from "react";

export const Footer = () => {
  return (
    <footer
      style={{
        width: "100%",
        padding: "48px 24px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "20px",
        position: "relative",
        zIndex: 2,
        borderTop: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      {/* Logo */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          color: "#a855f7",
        }}
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
        </svg>
        <span
          style={{
            fontSize: "16px",
            fontWeight: 700,
            color: "#a855f7",
            fontFamily: "'Unbounded', sans-serif",
            letterSpacing: "0.02em",
          }}
        >
          Rin
        </span>
      </div>

      {/* Tagline */}
      <p
        style={{
          margin: 0,
          fontSize: "14px",
          color: "rgba(255,255,255,0.35)",
          fontWeight: 400,
        }}
      >
        Rin · Built for developers
      </p>

      {/* Links */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
        }}
      >
        {[
          { label: "GitHub", href: "https://github.com/ggoswami777/rin" },
          { label: "Twitter", href: "#" },
          { label: "Docs", href: "#" },
        ].map(({ label, href }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: "5px 14px",
              borderRadius: "6px",
              fontSize: "13px",
              fontWeight: 500,
              color: "rgba(255,255,255,0.5)",
              textDecoration: "none",
              border: "1px solid rgba(255,255,255,0.1)",
              background: "rgba(255,255,255,0.03)",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#fff";
              e.currentTarget.style.borderColor = "rgba(168,85,247,0.4)";
              e.currentTarget.style.background = "rgba(168,85,247,0.08)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "rgba(255,255,255,0.5)";
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
              e.currentTarget.style.background = "rgba(255,255,255,0.03)";
            }}
          >
            {label}
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;