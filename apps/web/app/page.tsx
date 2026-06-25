"use client"
import React from "react";
import { Header } from "../components/Header/Header";
import Aurora from "../components/Aurora/Aurora";
import LandingHeroText from "../components/LandingHeroText/LandingHeroText";
import LandingCodeWindow from "../components/LandingCodeWindow/LandingCodeWindow";
import "./page.css";

const Page = () => {
  return (
    <div
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#000",
      }}
    >
      <Header />

      {/* Purple WebGL Aurora Background */}
      <div className="aurora-bg">
        <Aurora
          colorStops={["#7c3aed", "#1e1b4b", "#db2777"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
        <div className="aurora-noise" />
      </div>

      <div
        style={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "100%",
          padding: "0 80px",
          gap: "48px",
          pointerEvents: "none",
        }}
      >
        <LandingHeroText />
        <LandingCodeWindow />
      </div>
    </div>
  );
};

export default Page;
