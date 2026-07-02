"use client"
import React from "react";
import { Header } from "../components/Header/Header";
import Aurora from "../components/landing/Aurora";
import LandingHeroText from "../components/landing/LandingHeroText";
import LandingCodeWindow from "../components/landing/LandingCodeWindow";
import ReviewFeatureSection from "../components/landing/ReviewFeatureSection";
import AIModelsSection from "../components/landing/AIModelsSection";
import RinFeaturesSection from "../components/landing/RinFeaturesSection";
import "./page.css";
import PricingSection from "../components/landing/PricingSection";
import Footer from "../components/landing/Footer";

const Page = () => {
  return (
    <div
      style={{
        position: "relative",
        width: "100vw",
        minHeight: "100vh",
        overflowY: "auto",
        overflowX: "hidden",
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

      {/* Hero Section */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          minHeight: "100vh",
          padding: "0 80px",
          gap: "48px",
          pointerEvents: "none",
        }}
      >
        <LandingHeroText />
        <LandingCodeWindow />
      </div>
      <ReviewFeatureSection />
      <AIModelsSection />
      <RinFeaturesSection />
      <PricingSection/>
      <Footer/>
    </div>
  );
};

export default Page;
