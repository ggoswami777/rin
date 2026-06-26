"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const ReviewFeatureSection = () => {
  const [fixed, setFixed] = useState(false);

  return (
    <section
      style={{
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "80px 24px",
        position: "relative",
        zIndex: 2,
        pointerEvents: "auto",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          width: "100%",
          textAlign: "center",
          marginBottom: "48px",
        }}
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            fontSize: "clamp(2rem, 3.5vw, 3rem)",
            fontWeight: 800,
            color: "#FFF",
            marginBottom: "16px",
            fontFamily: "'Unbounded', sans-serif",
            letterSpacing: "-0.03em",
          }}
        >
          Automate reviews.{" "}
          <span className="hero-heading-purple">Instantly.</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{
            fontSize: "1.1rem",
            color: "rgba(255,255,255,0.45)",
            maxWidth: "600px",
            margin: "0 auto",
            lineHeight: "1.6",
          }}
        >
          Rin analyzes pull requests, flags vulnerabilities and performance
          issues, and suggests precise refactor diffs.
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{
          width: "100%",
          maxWidth: "1000px",
          background: "rgba(255, 255, 255, 0.02)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          border: "1px solid rgba(255, 255, 255, 0.08)",
          borderRadius: "16px",
          overflow: "hidden",
          boxShadow:
            "0 24px 80px rgba(0, 0, 0, 0.6), 0 0 40px rgba(124, 58, 237, 0.05)",
        }}
      >
        {/* Mock window titlebar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "16px 24px",
            borderBottom: "1px solid rgba(255, 255, 255, 0.06)",
            background: "rgba(255,255,255,0.01)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <div className="dot dot-red" />
            <div className="dot dot-yellow" />
            <div className="dot dot-green" />
            <span
              style={{
                marginLeft: "12px",
                fontSize: "13px",
                fontFamily: "monospace",
                color: "rgba(255,255,255,0.45)",
              }}
            >
              forge › review › a3f9b2c
            </span>
          </div>

          <div
            style={{
              padding: "4px 10px",
              borderRadius: "9999px",
              background: "rgba(168, 85, 247, 0.12)",
              border: "1px solid rgba(168, 85, 247, 0.25)",
              fontSize: "11px",
              fontWeight: 600,
              color: "#c084fc",
              letterSpacing: "0.02em",
            }}
          >
            Claude Haiku
          </div>
        </div>

        {/* Panel body */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.2fr 1fr",
            minHeight: "360px",
          }}
        >
          {/* Left panel: Code diff */}
          <div
            style={{
              background: "rgba(0, 0, 0, 0.3)",
              padding: "24px",
              fontFamily: "'Geist Mono', 'Fira Code', monospace",
              fontSize: "13px",
              lineHeight: "2",
              borderRight: "1px solid rgba(255, 255, 255, 0.06)",
              overflowX: "auto",
              textAlign: "left",
            }}
          >
            <div style={{ color: "rgba(255,255,255,0.3)" }}>
              <span style={{ marginRight: "16px" }}>38</span>
              <span className="c-keyword">export async function</span>{" "}
              <span className="c-fn">getUserPosts</span>(userId) {"{"}
            </div>
            <div style={{ color: "rgba(255,255,255,0.3)" }}>
              <span style={{ marginRight: "16px" }}>39</span>
              &nbsp;&nbsp;<span className="c-keyword">const</span> db ={" "}
              <span className="c-keyword">await</span>{" "}
              <span className="c-fn">getDb</span>();
            </div>

            {/* Red / vulnerable line */}
            <AnimatePresence mode="wait">
              {!fixed ? (
                <motion.div
                  key="vulnerable-line"
                  initial={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0, overflow: "hidden" }}
                  style={{
                    background: "rgba(239, 68, 68, 0.1)",
                    borderLeft: "4px solid #ef4444",
                    padding: "0 8px",
                    color: "#fca5a5",
                  }}
                >
                  <span
                    style={{
                      marginRight: "16px",
                      color: "rgba(239, 68, 68, 0.4)",
                    }}
                  >
                    41
                  </span>
                  - const query = `SELECT * FROM posts WHERE user_id = ${"$"}
                  {"{"}userId{"}"}`;
                </motion.div>
              ) : null}
            </AnimatePresence>

            {/* Green / fixed lines */}
            <AnimatePresence>
              {fixed ? (
                <motion.div
                  key="fixed-lines"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  style={{ overflow: "hidden" }}
                >
                  <div
                    style={{
                      background: "rgba(34, 197, 94, 0.1)",
                      borderLeft: "4px solid #22c55e",
                      padding: "0 8px",
                      color: "#86efac",
                    }}
                  >
                    <span
                      style={{
                        marginRight: "16px",
                        color: "rgba(34, 197, 94, 0.4)",
                      }}
                    >
                      42
                    </span>
                    + const query = "SELECT * FROM posts WHERE user_id = ?";
                  </div>
                  <div
                    style={{
                      background: "rgba(34, 197, 94, 0.1)",
                      borderLeft: "4px solid #22c55e",
                      padding: "0 8px",
                      color: "#86efac",
                    }}
                  >
                    <span
                      style={{
                        marginRight: "16px",
                        color: "rgba(34, 197, 94, 0.4)",
                      }}
                    >
                      43
                    </span>
                    + const rows = await db.execute(query, [userId]);
                  </div>
                </motion.div>
              ) : null}
            </AnimatePresence>

            <div style={{ color: "rgba(255,255,255,0.3)" }}>
              <span style={{ marginRight: "16px" }}>44</span>
              {"}"}
            </div>
          </div>

          {/* Right panel: Summary & issues */}
          <div
            style={{
              padding: "24px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              textAlign: "left",
            }}
          >
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: "20px",
                }}
              >
                <h3
                  style={{
                    fontSize: "16px",
                    fontWeight: 700,
                    color: "#FFF",
                    margin: 0,
                  }}
                >
                  Review Summary
                </h3>
                <div
                  style={{
                    background: fixed
                      ? "rgba(34, 197, 94, 0.15)"
                      : "rgba(99, 102, 241, 0.15)",
                    border: fixed
                      ? "1px solid rgba(34, 197, 94, 0.3)"
                      : "1px solid rgba(99, 102, 241, 0.3)",
                    padding: "4px 10px",
                    borderRadius: "9999px",
                    color: fixed ? "#4ade80" : "#818cf8",
                    fontSize: "12px",
                    fontWeight: 700,
                    transition: "all 0.3s ease",
                  }}
                >
                  {fixed ? "10/10" : "7/10"}
                </div>
              </div>

              {/* Vulnerabilities cards */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                {/* Critical vulnerability card */}
                <AnimatePresence mode="wait">
                  {!fixed ? (
                    <motion.div
                      key="vulnerability-card"
                      exit={{
                        opacity: 0,
                        y: -10,
                        height: 0,
                        margin: 0,
                        overflow: "hidden",
                      }}
                      transition={{ duration: 0.3 }}
                      style={{
                        padding: "16px",
                        background: "rgba(239, 68, 68, 0.03)",
                        border: "1px solid rgba(239, 68, 68, 0.2)",
                        borderRadius: "10px",
                      }}
                    >
                      <div
                        style={{
                          color: "#ef4444",
                          fontSize: "12px",
                          fontWeight: 700,
                          marginBottom: "4px",
                          display: "flex",
                          alignItems: "center",
                          gap: "6px",
                        }}
                      >
                        ⚠️ Critical · Line 42
                      </div>
                      <div
                        style={{
                          color: "#FFF",
                          fontSize: "14px",
                          fontWeight: 600,
                          marginBottom: "4px",
                        }}
                      >
                        SQL Injection Vulnerability
                      </div>
                      <div
                        style={{
                          color: "rgba(255,255,255,0.45)",
                          fontSize: "12px",
                        }}
                      >
                        User input concatenated into SQL query.
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="vulnerability-card-fixed"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      style={{
                        padding: "16px",
                        background: "rgba(34, 197, 94, 0.03)",
                        border: "1px solid rgba(34, 197, 94, 0.2)",
                        borderRadius: "10px",
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                      }}
                    >
                      <span style={{ fontSize: "18px" }}>✅</span>
                      <div>
                        <div
                          style={{
                            color: "#22c55e",
                            fontSize: "13px",
                            fontWeight: 700,
                          }}
                        >
                          Vulnerability fixed!
                        </div>
                        <div
                          style={{
                            color: "rgba(255,255,255,0.45)",
                            fontSize: "12px",
                          }}
                        >
                          Parameterized queries protect from SQL injection.
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Warning card */}
                <div
                  style={{
                    padding: "16px",
                    background: "rgba(255, 255, 255, 0.01)",
                    border: "1px solid rgba(255, 255, 255, 0.06)",
                    borderRadius: "10px",
                  }}
                >
                  <div
                    style={{
                      color: "#f59e0b",
                      fontSize: "12px",
                      fontWeight: 700,
                      marginBottom: "4px",
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                    }}
                  >
                    ⚠️ Warning · Line 44
                  </div>
                  <div
                    style={{ color: "#FFF", fontSize: "14px", fontWeight: 600 }}
                  >
                    Cache stampede risk
                  </div>
                </div>
              </div>
            </div>

            {/* Apply button */}
            <button
              onClick={() => setFixed(!fixed)}
              className={`gradient-border-btn ${fixed ? "revert" : ""}`}
            >
              {fixed ? (
                <>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M9 14 4 9l5-5" />
                    <path d="M4 9h10.5a5.5 5.5 0 0 1 0 11H11" />
                  </svg>
                  <span>Revert fixes</span>
                </>
              ) : (
                <>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M9 11.5 11.5 14 16 9" />
                    <rect x="3" y="3" width="18" height="18" rx="3" />
                  </svg>
                  <span>Apply all fixes</span>
                </>
              )}
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ReviewFeatureSection;
