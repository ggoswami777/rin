"use client";

import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import type { SpringOptions } from "framer-motion";

const springValues: SpringOptions = {
  damping: 30,
  stiffness: 100,
  mass: 2,
};

interface PricingCardProps {
  plan: "free" | "pro";
  price: string;
  period: string;
  features: string[];
  cta: string;
  badge?: string;
}

const PricingCard: React.FC<PricingCardProps> = ({
  plan,
  price,
  period,
  features,
  cta,
  badge,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const rotateX = useSpring(useMotionValue(0), springValues);
  const rotateY = useSpring(useMotionValue(0), springValues);
  const scale = useSpring(1, springValues);
  const [lastY, setLastY] = useState(0);

  const isPro = plan === "pro";

  function handleMouse(e: React.MouseEvent<HTMLDivElement>) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;
    rotateX.set((offsetY / (rect.height / 2)) * -8);
    rotateY.set((offsetX / (rect.width / 2)) * 8);
    setLastY(offsetY);
  }

  function handleMouseEnter() {
    scale.set(1.03);
  }

  function handleMouseLeave() {
    scale.set(1);
    rotateX.set(0);
    rotateY.set(0);
  }

  return (
    <div
      style={{
        perspective: "900px",
        width: "100%",
        maxWidth: "360px",
      }}
    >
      <motion.div
        ref={ref}
        onMouseMove={handleMouse}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          scale,
          transformStyle: "preserve-3d",
          position: "relative",
          borderRadius: "20px",
          padding: "2px",
          background: isPro
            ? "linear-gradient(135deg, rgba(124,58,237,0.8) 0%, rgba(219,39,119,0.6) 50%, rgba(30,27,75,0.4) 100%)"
            : "linear-gradient(135deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.04) 100%)",
          boxShadow: isPro
            ? "0 0 40px rgba(124,58,237,0.25), 0 24px 60px rgba(0,0,0,0.5)"
            : "0 0 0 1px rgba(255,255,255,0.06), 0 24px 60px rgba(0,0,0,0.4)",
          cursor: "default",
        }}
      >
        {/* inner glass card */}
        <div
          style={{
            borderRadius: "18px",
            background: isPro
              ? "rgba(10, 6, 20, 0.82)"
              : "rgba(10, 6, 20, 0.75)",
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
            padding: "36px 32px 40px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* pro ambient glow inside */}
          {isPro && (
            <div
              style={{
                position: "absolute",
                top: "-60px",
                right: "-60px",
                width: "200px",
                height: "200px",
                borderRadius: "50%",
                background:
                  "radial-gradient(circle, rgba(124,58,237,0.18) 0%, transparent 70%)",
                pointerEvents: "none",
              }}
            />
          )}

          {/* badge */}
          {badge && (
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                padding: "4px 12px",
                borderRadius: "9999px",
                background: "rgba(124,58,237,0.15)",
                border: "1px solid rgba(124,58,237,0.35)",
                fontSize: "11px",
                fontWeight: 700,
                color: "#c084fc",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                marginBottom: "20px",
              }}
            >
              <span
                style={{
                  width: "5px",
                  height: "5px",
                  borderRadius: "50%",
                  background: "#a855f7",
                  boxShadow: "0 0 6px #a855f7",
                }}
              />
              {badge}
            </div>
          )}

          {/* plan name */}
          <div
            style={{
              fontSize: "13px",
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: isPro ? "rgba(192,132,252,0.8)" : "rgba(255,255,255,0.4)",
              marginBottom: "12px",
            }}
          >
            {plan === "free" ? "Free" : "Pro"}
          </div>

          {/* price */}
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              gap: "4px",
              marginBottom: "6px",
            }}
          >
            <span
              style={{
                fontSize: "clamp(2.8rem, 5vw, 3.6rem)",
                fontWeight: 800,
                color: "#fff",
                fontFamily: "'Unbounded', sans-serif",
                letterSpacing: "-0.04em",
                lineHeight: 1,
              }}
            >
              {price}
            </span>
            <span
              style={{
                fontSize: "14px",
                color: "rgba(255,255,255,0.35)",
                fontWeight: 400,
              }}
            >
              {period}
            </span>
          </div>

          <div
            style={{
              height: "1px",
              background: isPro
                ? "linear-gradient(to right, rgba(124,58,237,0.4), rgba(219,39,119,0.2), transparent)"
                : "rgba(255,255,255,0.07)",
              margin: "24px 0",
            }}
          />

          {/* features */}
          <ul
            style={{
              listStyle: "none",
              margin: "0 0 32px",
              padding: 0,
              display: "flex",
              flexDirection: "column",
              gap: "14px",
            }}
          >
            {features.map((f, i) => (
              <li
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  fontSize: "14px",
                  color: "rgba(255,255,255,0.75)",
                  lineHeight: 1.4,
                }}
              >
                <span
                  style={{
                    flexShrink: 0,
                    width: "18px",
                    height: "18px",
                    borderRadius: "50%",
                    background: isPro
                      ? "rgba(124,58,237,0.2)"
                      : "rgba(255,255,255,0.07)",
                    border: isPro
                      ? "1px solid rgba(124,58,237,0.4)"
                      : "1px solid rgba(255,255,255,0.12)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="none"
                  >
                    <path
                      d="M2 5l2 2 4-4"
                      stroke={isPro ? "#a855f7" : "rgba(255,255,255,0.5)"}
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                {f}
              </li>
            ))}
          </ul>

          {/* CTA */}
          <button
            style={{
              width: "100%",
              padding: "14px 24px",
              borderRadius: "10px",
              fontSize: "14px",
              fontWeight: 700,
              cursor: "pointer",
              border: "none",
              letterSpacing: "0.02em",
              transition: "all 0.25s ease",
              background: isPro
                ? "linear-gradient(135deg, #a855f7, #7c3aed)"
                : "rgba(255,255,255,0.07)",
              color: isPro ? "#fff" : "rgba(255,255,255,0.65)",
              boxShadow: isPro
                ? "0 4px 20px rgba(124,58,237,0.35)"
                : "inset 0 0 0 1px rgba(255,255,255,0.1)",
            }}
            onMouseEnter={(e) => {
              if (isPro) {
                e.currentTarget.style.boxShadow =
                  "0 6px 28px rgba(124,58,237,0.5)";
                e.currentTarget.style.transform = "translateY(-1px)";
              } else {
                e.currentTarget.style.background = "rgba(255,255,255,0.11)";
                e.currentTarget.style.color = "#fff";
              }
            }}
            onMouseLeave={(e) => {
              if (isPro) {
                e.currentTarget.style.boxShadow =
                  "0 4px 20px rgba(124,58,237,0.35)";
                e.currentTarget.style.transform = "none";
              } else {
                e.currentTarget.style.background = "rgba(255,255,255,0.07)";
                e.currentTarget.style.color = "rgba(255,255,255,0.65)";
              }
            }}
          >
            {cta}
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export const PricingSection: React.FC = () => {
  return (
    <section
      style={{
        width: "100%",
        padding: "100px 24px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
        zIndex: 2,
      }}
    >
      {/* header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{ textAlign: "center", marginBottom: "64px" }}
      >
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            padding: "6px 14px",
            borderRadius: "9999px",
            background: "rgba(168,85,247,0.08)",
            border: "1px solid rgba(168,85,247,0.22)",
            marginBottom: "20px",
            fontSize: "12px",
            fontWeight: 500,
            color: "#c084fc",
          }}
        >
          <span
            style={{
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              background: "#a855f7",
              boxShadow: "0 0 8px #a855f7",
            }}
          />
          Simple pricing
        </div>

        <h2
          style={{
            fontSize: "clamp(2rem, 3.5vw, 3rem)",
            fontWeight: 800,
            color: "#fff",
            margin: "0 0 16px",
            fontFamily: "'Unbounded', sans-serif",
            letterSpacing: "-0.03em",
            lineHeight: 1.15,
          }}
        >
          Start free.{" "}
          <span className="hero-heading-purple">Ship faster.</span>
        </h2>

        <p
          style={{
            fontSize: "1.05rem",
            color: "rgba(255,255,255,0.4)",
            margin: 0,
            lineHeight: "1.7",
            maxWidth: "480px",
          }}
        >
          Bring your own API key and pay only for what you use. No hidden fees,
          no seat licenses.
        </p>
      </motion.div>

      {/* cards row */}
      <div
        style={{
          display: "flex",
          gap: "24px",
          width: "100%",
          maxWidth: "780px",
          alignItems: "stretch",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0 }}
          style={{ flex: "1 1 320px", maxWidth: "360px" }}
        >
          <PricingCard
            plan="free"
            price="$0"
            period="/month"
            cta="Get started free →"
            features={[
              "3 repositories",
              "50 reviews / month",
              "Basic AI review",
              "Your own API key",
            ]}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{ flex: "1 1 320px", maxWidth: "360px" }}
        >
          <PricingCard
            plan="pro"
            price="$9"
            period="/month"
            cta="Upgrade to Pro →"
            badge="Most popular"
            features={[
              "Unlimited repositories",
              "Unlimited reviews",
              "One-click fixes",
              "PR auto-creation",
              "Priority support",
            ]}
          />
        </motion.div>
      </div>

      {/* footnote */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        style={{
          marginTop: "40px",
          fontSize: "13px",
          color: "rgba(255,255,255,0.22)",
          textAlign: "center",
        }}
      >
        All plans require your own API key. You control your AI spend.
      </motion.p>
    </section>
  );
};

export default PricingSection;