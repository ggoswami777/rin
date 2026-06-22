"use client";

import React from "react";
import { SpotlightNavbar } from "../SpotlightNavbar/SpotlightNavbar";

export function Header() {
  return (
    <header style={{
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      height: "80px",
      zIndex: 100,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0 2rem",
      background: "transparent"
    }}>
      {/* Left: Brand logo/text */}
      <div style={{
        fontSize: "1.5rem",
        fontWeight: 800,
        letterSpacing: "0.1em",
        color: "#fff",
        userSelect: "none"
      }}>
       RIN
      </div>

      {/* Center: Navigation Navbar */}
      <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
        <SpotlightNavbar
          items={[
            { label: "Home", href: "#home" },
            { label: "Dashboard", href: "#dashboard" },
            { label: "Pricing", href: "#pricing" },
            { label: "About", href: "#about" },
          ]}
        />
      </div>

      {/* Right: Social Media Icons */}
      <div style={{
        display: "flex",
        alignItems: "center",
        gap: "1.25rem"
      }}>
        {/* GitHub link */}
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "rgba(255, 255, 255, 0.7)",
            display: "inline-flex",
            alignItems: "center",
            transition: "color 0.2s ease"
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255, 255, 255, 0.7)")}
          aria-label="GitHub"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
            <path d="M9 18c-4.51 2-5-2-7-2" />
          </svg>
        </a>

        {/* X (formerly Twitter) logo link - custom clean SVG */}
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "rgba(255, 255, 255, 0.7)",
            display: "inline-flex",
            alignItems: "center",
            transition: "color 0.2s ease"
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255, 255, 255, 0.7)")}
          aria-label="X"
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
            <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
            <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
          </svg>
        </a>
      </div>
    </header>
  );
}
