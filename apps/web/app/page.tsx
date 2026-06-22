"use client"
import React from "react";
import { Header } from "../components/Header/Header";
import SplitText from "../components/SplitText/SplitText";
import { motion } from "framer-motion";
import Aurora from "../components/Aurora/Aurora";

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
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

        * {
          font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
        @keyframes aurora-drift {
          0%, 100% { opacity: 0.7; transform: scale(1) translate(0, 0); }
          33% { opacity: 0.9; transform: scale(1.05) translate(10px, -8px); }
          66% { opacity: 0.75; transform: scale(0.98) translate(-5px, 5px); }
        }
        @keyframes aurora-drift-2 {
          0%, 100% { opacity: 0.5; transform: scale(1) translate(0, 0) rotate(0deg); }
          50% { opacity: 0.7; transform: scale(1.1) translate(-15px, 10px) rotate(2deg); }
        }
        .aurora-bg {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
          overflow: hidden;
          background: #0a0a0a;
        }
        .aurora-layer-1 {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse 80% 60% at 0% 100%, rgba(120, 50, 200, 0.45) 0%, transparent 65%),
            radial-gradient(ellipse 60% 50% at 10% 90%, rgba(160, 60, 220, 0.3) 0%, transparent 55%);
          animation: aurora-drift 12s ease-in-out infinite;
        }
        .aurora-layer-2 {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse 70% 50% at 20% 80%, rgba(100, 40, 180, 0.35) 0%, transparent 60%),
            radial-gradient(ellipse 50% 40% at 50% 70%, rgba(140, 60, 200, 0.15) 0%, transparent 50%);
          animation: aurora-drift-2 15s ease-in-out infinite;
        }
        .aurora-beam {
          position: absolute;
          bottom: -20%;
          left: -10%;
          width: 80%;
          height: 120%;
          background: linear-gradient(
            55deg,
            rgba(130, 50, 210, 0.3) 0%,
            rgba(100, 40, 180, 0.15) 30%,
            transparent 60%
          );
          filter: blur(40px);
          animation: aurora-drift 18s ease-in-out infinite reverse;
        }
        .aurora-beam-2 {
          position: absolute;
          bottom: -10%;
          left: 5%;
          width: 60%;
          height: 100%;
          background: linear-gradient(
            65deg,
            rgba(160, 80, 240, 0.2) 0%,
            rgba(120, 50, 200, 0.1) 25%,
            transparent 50%
          );
          filter: blur(60px);
          animation: aurora-drift-2 20s ease-in-out infinite;
        }
        .aurora-noise {
          position: absolute;
          inset: 0;
          opacity: 0.03;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
          background-size: 128px 128px;
          pointer-events: none;
        }
        .code-window {
          animation: float 4s ease-in-out infinite;
          background: rgba(255,255,255,0.04);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 14px;
          overflow: hidden;
          width: 100%;
          max-width: 520px;
          transition: box-shadow 0.5s ease, border-color 0.5s ease;
          box-shadow: 0 4px 30px rgba(0,0,0,0.3);
        }
        .code-window:hover {
          box-shadow:
            0 0 20px rgba(140, 60, 220, 0.2),
            0 0 60px rgba(120, 50, 200, 0.12),
            0 0 100px rgba(160, 80, 240, 0.08);
          border-color: rgba(140, 60, 220, 0.25);
        }
        .code-titlebar {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 12px 16px;
          border-bottom: 1px solid rgba(255,255,255,0.06);
        }
        .dot { width: 10px; height: 10px; border-radius: 50%; }
        .dot-red { background: #FF5F57; }
        .dot-yellow { background: #FFBD2E; }
        .dot-green { background: #28CA41; }
        .code-body {
          padding: 20px 24px;
          font-family: "Geist Mono", "Fira Code", monospace;
          font-size: 13px;
          line-height: 1.8;
          text-align: left;
        }
        .c-comment { color: rgba(255,255,255,0.25); }
        .c-keyword { color: #c792ea; }
        .c-fn { color: #82aaff; }
        .c-str { color: #c3e88d; }
        .c-prop { color: #57f1db; }
        .c-num { color: #f78c6c; }
        .c-white { color: rgba(255,255,255,0.75); }
        .hero-heading {
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 700;
          letter-spacing: -0.03em;
          color: #FFFFFF;
          margin: 0;
          line-height: 1.15;
          display: block;
        }
        .hero-heading-purple {
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 700;
          letter-spacing: -0.03em;
          margin: 0;
          line-height: 1.15;
          display: inline-block;
        }
        .hero-heading-purple .split-char {
          background: linear-gradient(135deg, #c084fc, #a855f7, #9333ea, #7c3aed);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          display: inline-block;
        }
        .aurora-btn {
          background: #0a0a0a !important;
          border: 1px solid rgba(255, 255, 255, 0.22) !important;
          color: rgba(255, 255, 255, 0.85) !important;
          box-shadow: 0 0 12px rgba(255, 255, 255, 0.08);
          transition: all 0.3s ease;
        }
        .aurora-btn:hover {
          background: linear-gradient(#0a0a0a, #0a0a0a) padding-box,
                      linear-gradient(135deg, #a855f7, #db2777, #3b82f6) border-box !important;
          border: 1px solid transparent !important;
          color: #fff !important;
          box-shadow: 0 0 25px rgba(219, 39, 119, 0.6), inset 0 0 4px rgba(219, 39, 119, 0.2);
          animation: aurora-btn-glow 6s ease infinite;
          transform: translateY(-1px);
        }
        @keyframes aurora-btn-glow {
          0%, 100% {
            background: linear-gradient(#0a0a0a, #0a0a0a) padding-box,
                        linear-gradient(135deg, #a855f7, #db2777, #3b82f6) border-box;
            box-shadow: 0 0 25px rgba(168, 85, 247, 0.6);
          }
          50% {
            background: linear-gradient(#0a0a0a, #0a0a0a) padding-box,
                        linear-gradient(135deg, #3b82f6, #a855f7, #db2777) border-box;
            box-shadow: 0 0 22px rgba(219, 39, 119, 0.5);
          }
        }
      `}</style>

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
              <SplitText
                text="hassle"
                tag="span"
                className="hero-heading-purple"
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
