"use client"
import React from "react";
import { motion } from "framer-motion";
import SplitText from "./SplitText";
import MorphingWord from "./MorphingWord";

const GitHubIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

export const LandingHeroText = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        maxWidth: "550px",
        flex: "1",
      }}
    >
      {/* Pill Tag */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.05 }}
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "6px",
          padding: "6px 12px",
          borderRadius: "9999px",
          background: "rgba(168, 85, 247, 0.08)",
          border: "1px solid rgba(168, 85, 247, 0.25)",
          marginBottom: "20px",
          fontSize: "12px",
          fontWeight: 500,
          color: "#c084fc",
          userSelect: "none",
        }}
      >
        <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#a855f7", boxShadow: "0 0 8px #a855f7" }} />
        Now in public beta
      </motion.div>

      <div
        style={{
          margin: "0 0 20px 0",
          userSelect: "none",
          display: "flex",
          flexDirection: "column",
          gap: "4px",
        }}
      >
        <h1 className="hero-heading" style={{ margin: 0 }}>
          <SplitText
            text="Fix your code"
            tag="span"
            className="hero-heading"
            delay={80}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-50px"
            textAlign="left"
          />
        </h1>
        <h1 className="hero-heading" style={{ margin: 0 }}>
          <SplitText
            text="without"
            tag="span"
            className="hero-heading"
            delay={80}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-50px"
            textAlign="left"
          />
          {" "}
          <MorphingWord />
        </h1>
      </div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
        style={{
          fontSize: "1.05rem",
          fontWeight: 400,
          margin: "0 0 36px 0",
          lineHeight: "1.7",
          letterSpacing: "0.01em",
          color: "rgba(255,255,255,0.45)",
          maxWidth: "450px",
        }}
      >
        AI-powered code reviews that actually fix your code. Apply fixes in one click and ship cleaner software faster.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: "12px",
          pointerEvents: "auto",
        }}
      >
        <div style={{ display: "flex", gap: "12px" }}>
          <button
            style={{
              background: "linear-gradient(135deg, #a855f7, #7c3aed)",
              color: "#fff",
              border: "none",
              padding: "13px 26px",
              borderRadius: "8px",
              fontSize: "14px",
              fontWeight: 600,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              transition: "transform 0.2s ease, box-shadow 0.2s ease",
              boxShadow: "0 4px 20px rgba(124, 58, 237, 0.3)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-1px)";
              e.currentTarget.style.boxShadow = "0 6px 24px rgba(124, 58, 237, 0.45)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "none";
              e.currentTarget.style.boxShadow = "0 4px 20px rgba(124, 58, 237, 0.3)";
            }}
          >
            <GitHubIcon />
            Install on GitHub →
          </button>

          <button
            className="aurora-btn"
            style={{
              padding: "13px 26px",
              borderRadius: "8px",
              fontSize: "14px",
              fontWeight: 600,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <GitHubIcon />
            Login with GitHub
          </button>
        </div>

        <span
          style={{
            fontSize: "12px",
            color: "rgba(255, 255, 255, 0.35)",
            marginLeft: "4px",
            userSelect: "none",
          }}
        >
          Free to start • No credit card required
        </span>
      </motion.div>
    </div>
  );
};

export default LandingHeroText;
