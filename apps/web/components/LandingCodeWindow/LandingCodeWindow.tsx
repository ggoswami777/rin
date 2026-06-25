"use client"
import React from "react";
import { motion } from "framer-motion";

export const LandingCodeWindow = () => {
  return (
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
  );
};

export default LandingCodeWindow;
