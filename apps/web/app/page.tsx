"use client"
import React from "react";
import { Header } from "../components/Header/Header";
import SplitText from "../components/SplitText/SplitText";
import { motion } from "framer-motion";
import Aurora from "../components/Aurora/Aurora";
import MorphingWord from "../components/MorphingWord/MorphingWord";
import "./page.css";

const Page = () => {
  const GitHubIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
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
        {/* LEFT — Text */}
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

        {/* RIGHT — Code Window */}
        <motion.div
          initial={{ opacity: 0, x: 40, scale: 0.96 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          style={{
            flex: "1",
            display: "flex",
            justifyContent: "flex-end",
            pointerEvents: "auto",
          }}
        >
          <div className="code-window">
            <div className="code-titlebar">
              <div className="dot dot-red"></div>
              <div className="dot dot-yellow"></div>
              <div className="dot dot-green"></div>
              <span
                style={{
                  marginLeft: "8px",
                  fontSize: "12px",
                  color: "rgba(255,255,255,0.25)",
                }}
              >
                rin.config.ts
              </span>
            </div>
            <div className="code-body">
              <div>
                <span className="c-keyword">import</span>{" "}
                <span className="c-white">rin</span>{" "}
                <span className="c-keyword">from</span>{" "}
                <span className="c-str">'@rin/core'</span>
                <span className="c-white">;</span>
              </div>
              <div>&nbsp;</div>
              <div>
                <span className="c-keyword">export default</span>{" "}
                <span className="c-fn">Rin</span>
                <span className="c-white">{"({"}</span>
              </div>
              <div>
                &nbsp;&nbsp;<span className="c-prop">model</span>
                <span className="c-white">: </span>
                <span className="c-str">"claude-haiku"</span>
                <span className="c-white">,</span>
              </div>
              <div>
                &nbsp;&nbsp;<span className="c-prop">autoFix</span>
                <span className="c-white">: </span>
                <span className="c-keyword">true</span>
                <span className="c-white">,</span>
              </div>
              <div>
                &nbsp;&nbsp;<span className="c-prop">severity</span>
                <span className="c-white">: [</span>
                <span className="c-str">"critical"</span>
                <span className="c-white">, </span>
                <span className="c-str">"high"</span>
                <span className="c-white">],</span>
              </div>
              <div>
                &nbsp;&nbsp;<span className="c-prop">createPR</span>
                <span className="c-white">: </span>
                <span className="c-keyword">true</span>
                <span className="c-white">,</span>
              </div>
              <div>
                &nbsp;&nbsp;<span className="c-prop">rules</span>
                <span className="c-white">: {"{"}</span>
              </div>
              <div>
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="c-prop">security</span>
                <span className="c-white">: </span>
                <span className="c-keyword">true</span>
                <span className="c-white">,</span>
              </div>
              <div>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <span className="c-prop">performance</span>
                <span className="c-white">: </span>
                <span className="c-keyword">true</span>
                <span className="c-white">,</span>
              </div>
              <div>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <span className="c-prop">bestPractices</span>
                <span className="c-white">: </span>
                <span className="c-keyword">true</span>
              </div>
              <div>
                &nbsp;&nbsp;<span className="c-white">{"}"}</span>
              </div>
              <div>
                <span className="c-white">{"});"}</span>
              </div>
              <div>&nbsp;</div>
              <div>
                <span className="c-comment">
                  // ✓ PR #42 — 3 issues fixed automatically
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Page;
