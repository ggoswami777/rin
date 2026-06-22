import React from "react";
import LightRays from "../components/LightRays/LightRays";
import { Header } from "../components/Header/Header";
import SplitText from "../components/SplitText/SplitText";

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
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
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
            0 0 20px rgba(130, 170, 255, 0.15),
            0 0 60px rgba(130, 170, 255, 0.1),
            0 0 100px rgba(199, 146, 234, 0.08);
          border-color: rgba(130, 170, 255, 0.2);
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
          font-weight: 800;
          letter-spacing: -0.02em;
          color: #FFFFFF;
          margin: 0;
          line-height: 1.15;
          display: block;
        }
      `}</style>

      <Header />

      <div
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
        }}
      >
        <LightRays
          raysOrigin="top-center"
          raysColor="#ffffff"
          raysSpeed={1}
          lightSpread={2}
          rayLength={3}
          pulsating={false}
          fadeDistance={1.0}
          saturation={1.0}
          followMouse={true}
          mouseInfluence={0.1}
        />
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
            maxWidth: "520px",
            flex: "1",
          }}
        >
          <div
            style={{
              margin: "0 0 16px 0",
              userSelect: "none",
            }}
          >
            <SplitText
              text="Fix your code"
              tag="h1"
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
            <SplitText
              text="without hassle"
              tag="h1"
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
          </div>

          <p
            style={{
              fontSize: "1.05rem",
              fontWeight: 400,
              margin: "0 0 36px 0",
              lineHeight: "1.7",
              letterSpacing: "0.01em",
              color: "rgba(255,255,255,0.45)",
              maxWidth: "400px",
              fontFamily: "sans-serif",
            }}
          >
            AI powered code reviewer with BYOK features
          </p>

          <div
            style={{
              display: "flex",
              gap: "12px",
              pointerEvents: "auto",
            }}
          >
            <button
              style={{
                backgroundColor: "#FFFFFF",
                color: "#000",
                border: "none",
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
              Install on GitHub →
            </button>

            <button
              style={{
                backgroundColor: "transparent",
                color: "rgba(255,255,255,0.6)",
                border: "1px solid rgba(255,255,255,0.12)",
                padding: "13px 26px",
                borderRadius: "8px",
                fontSize: "14px",
                fontWeight: 400,
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
        </div>

        {/* RIGHT — Code Window */}
        <div
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
                <span className="c-str">'@kaiser/core'</span>
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
        </div>
      </div>
    </div>
  );
};

export default Page;
