"use client";
import React, { useRef, useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";

// ─── Types ────────────────────────────────────────────────────────────────────

interface FeatureCard {
  label: string;
  title: string;
  description: string;
  accent: string; // rgb string e.g. "124, 58, 237"
  gridClass: string; // targets custom structural spans
}

// ─── Refactored Bento Feature Data ──────────────────────────────────────────

const rinFeatures: FeatureCard[] = [
  {
    label: "Sovereignty",
    title: "BYOK Core",
    description: "Plug in your own AI keys to skip SaaS middleman markups and review code at absolute raw token cost.",
    accent: "124, 58, 237",
    gridClass: "card-insights",
  },
  {
    label: "Compliance",
    title: "Zero Retention",
    description: "Your data stays yours. Code diffs stream directly to your LLM provider without hitting our servers.",
    accent: "124, 58, 237",
    gridClass: "card-overview",
  },
  {
    label: "Team Scaling",
    title: "Contextual Collaboration",
    description: "Empower your entire engineering unit with unified review feeds. Rin aggregates historical PR insights, tracks team-specific structural patterns, and surfaces cross-repo dependencies directly inside your pull request workspace—eliminating communication bottlenecks before the final squash-and-merge.",
    accent: "124, 58, 237",
    gridClass: "card-teamwork", 
  },
  {
    label: "Deep Analysis",
    title: "AST-Driven Automation",
    description: "Move past superficial linter checks. Rin maps complete Abstract Syntax Trees (AST) across your changes to execute rigorous code reviews. It systematically uncovers edge cases, complex memory leaks, multi-threaded race conditions, and unhandled logic exceptions completely autonomously—intercepting bugs before they hit staging.",
    accent: "168, 85, 247", 
    gridClass: "card-efficiency", 
  },
  {
    label: "Workflow",
    title: "Native Integrations",
    description: "Hooks cleanly into GitHub Actions, GitLab CI, and terminal hooks to safeguard your main branches.",
    accent: "124, 58, 237",
    gridClass: "card-connectivity",
  },
  {
    label: "Guardrails",
    title: "Custom Rules",
    description: "Inject your team's specific architectural style guidelines and unique internal rules into the AI pipeline.",
    accent: "124, 58, 237",
    gridClass: "card-protection",
  },
];

// ─── Particle Card Setup ──────────────────────────────────────────────────────

const DEFAULT_GLOW = "124, 58, 237";
const MOBILE_BP = 768;

const createParticle = (x: number, y: number, color: string): HTMLDivElement => {
  const el = document.createElement("div");
  el.style.cssText = `
    position:absolute;width:3px;height:3px;border-radius:50%;
    background:rgba(${color},1);box-shadow:0 0 5px rgba(${color},0.6);
    pointer-events:none;z-index:100;left:${x}px;top:${y}px;
  `;
  return el;
};

const ParticleCard: React.FC<{
  children: React.ReactNode;
  glowColor?: string;
  style?: React.CSSProperties;
  className?: string;
}> = ({ children, glowColor = DEFAULT_GLOW, style, className = "" }) => {
  const ref = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement[]>([]);
  const timeoutsRef = useRef<ReturnType<typeof setTimeout>[]>([]);
  const hoveredRef = useRef(false);
  const magnetRef = useRef<gsap.core.Tween | null>(null);

  const clearParticles = useCallback(() => {
    timeoutsRef.current.forEach(clearTimeout);
    timeoutsRef.current = [];
    magnetRef.current?.kill();
    particlesRef.current.forEach((p) => {
      gsap.to(p, {
        scale: 0, opacity: 0, duration: 0.3, ease: "back.in(1.7)",
        onComplete: () => p.parentNode?.removeChild(p),
      });
    });
    particlesRef.current = [];
  }, []);

  const spawnParticles = useCallback(() => {
    if (!ref.current || !hoveredRef.current) return;
    const { width, height } = ref.current.getBoundingClientRect();
    Array.from({ length: 10 }).forEach((_, i) => {
      const id = setTimeout(() => {
        if (!hoveredRef.current || !ref.current) return;
        const p = createParticle(Math.random() * width, Math.random() * height, glowColor);
        ref.current.appendChild(p);
        particlesRef.current.push(p);
        gsap.fromTo(p, { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.3, ease: "back.out(1.7)" });
        gsap.to(p, { x: (Math.random() - 0.5) * 80, y: (Math.random() - 0.5) * 80, rotation: Math.random() * 360, duration: 2 + Math.random() * 2, ease: "none", repeat: -1, yoyo: true });
        gsap.to(p, { opacity: 0.3, duration: 1.5, ease: "power2.inOut", repeat: -1, yoyo: true });
      }, i * 100);
      timeoutsRef.current.push(id);
    });
  }, [glowColor]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onEnter = () => { hoveredRef.current = true; spawnParticles(); };
    const onLeave = () => {
      hoveredRef.current = false;
      clearParticles();
      gsap.to(el, { x: 0, y: 0, duration: 0.3, ease: "power2.out" });
    };
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const cx = r.width / 2, cy = r.height / 2;
      const mx = (e.clientX - r.left - cx) * 0.05;
      const my = (e.clientY - r.top - cy) * 0.05;
      magnetRef.current = gsap.to(el, { x: mx, y: my, duration: 0.3, ease: "power2.out" });
    };
    const onClick = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const x = e.clientX - r.left, y = e.clientY - r.top;
      const d = Math.max(Math.hypot(x, y), Math.hypot(x - r.width, y), Math.hypot(x, y - r.height), Math.hypot(x - r.width, y - r.height));
      const ripple = document.createElement("div");
      ripple.style.cssText = `position:absolute;width:${d*2}px;height:${d*2}px;border-radius:50%;background:radial-gradient(circle,rgba(${glowColor},0.35) 0%,transparent 70%);left:${x-d}px;top:${y-d}px;pointer-events:none;z-index:999;`;
      el.appendChild(ripple);
      gsap.fromTo(ripple, { scale: 0, opacity: 1 }, { scale: 1, opacity: 0, duration: 0.7, ease: "power2.out", onComplete: () => ripple.remove() });
    };

    el.addEventListener("mouseenter", onEnter);
    el.addEventListener("mouseleave", onLeave);
    el.addEventListener("mousemove", onMove);
    el.addEventListener("click", onClick);
    return () => {
      el.removeEventListener("mouseenter", onEnter);
      el.removeEventListener("mouseleave", onLeave);
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("click", onClick);
      clearParticles();
    };
  }, [spawnParticles, clearParticles, glowColor]);

  return (
    <div ref={ref} className={className} style={{ ...style, position: "relative", overflow: "hidden" }}>
      {children}
    </div>
  );
};

// ─── Spotlight ────────────────────────────────────────────────────────────────

const Spotlight: React.FC<{ gridRef: React.RefObject<HTMLDivElement | null> }> = ({ gridRef }) => {
  const spotRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const spot = document.createElement("div");
    spot.style.cssText = `position:fixed;width:700px;height:700px;border-radius:50%;pointer-events:none;background:radial-gradient(circle,rgba(124,58,237,0.13) 0%,rgba(124,58,237,0.07) 20%,rgba(219,39,119,0.04) 40%,transparent 65%);z-index:200;opacity:0;transform:translate(-50%,-50%);mix-blend-mode:screen;`;
    document.body.appendChild(spot);
    spotRef.current = spot;

    const onMove = (e: MouseEvent) => {
      if (!spotRef.current || !gridRef.current) return;
      const section = gridRef.current.closest(".rin-features-section");
      const r = section?.getBoundingClientRect();
      const inside = r && e.clientX >= r.left && e.clientX <= r.right && e.clientY >= r.top && e.clientY <= r.bottom;

      const cards = gridRef.current.querySelectorAll<HTMLElement>(".rin-feature-card");
      cards.forEach((card) => {
        const cr = card.getBoundingClientRect();
        const cx = cr.left + cr.width / 2, cy = cr.top + cr.height / 2;
        const dist = Math.max(0, Math.hypot(e.clientX - cx, e.clientY - cy) - Math.max(cr.width, cr.height) / 2);
        const intensity = dist <= 150 ? 1 : dist <= 280 ? (280 - dist) / 130 : 0;
        const rx = ((e.clientX - cr.left) / cr.width) * 100;
        const ry = ((e.clientY - cr.top) / cr.height) * 100;
        card.style.setProperty("--glow-x", `${rx}%`);
        card.style.setProperty("--glow-y", `${ry}%`);
        card.style.setProperty("--glow-intensity", intensity.toString());
      });

      if (!inside) {
        gsap.to(spotRef.current, { opacity: 0, duration: 0.3 });
        return;
      }
      gsap.to(spotRef.current, { left: e.clientX, top: e.clientY, duration: 0.1, ease: "power2.out" });
      gsap.to(spotRef.current, { opacity: 0.8, duration: 0.2 });
    };

    const onLeave = () => gsap.to(spotRef.current, { opacity: 0, duration: 0.3 });

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);
    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      spotRef.current?.parentNode?.removeChild(spotRef.current);
    };
  }, [gridRef]);

  return null;
};

// ─── Main Section Component ───────────────────────────────────────────────────

export const RinFeaturesSection: React.FC = () => {
  const gridRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= MOBILE_BP);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <section
      className="rin-features-section"
      style={{
        width: "100%",
        padding: "100px 24px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
        backgroundColor: "transparent",
        zIndex: 2,
      }}
    >
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: "64px", maxWidth: "640px" }}>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            padding: "6px 14px",
            borderRadius: "9999px",
            background: "rgba(168, 85, 247, 0.08)",
            border: "1px solid rgba(168, 85, 247, 0.22)",
            marginBottom: "20px",
            fontSize: "12px",
            fontWeight: 500,
            color: "#c084fc",
          }}
        >
          <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#a855f7", boxShadow: "0 0 8px #a855f7" }} />
          Everything included
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.05 }}
          style={{
            fontSize: "clamp(2rem, 3.5vw, 3rem)",
            fontWeight: 800,
            color: "#FFF",
            marginBottom: "16px",
            fontFamily: "'Unbounded', sans-serif",
            letterSpacing: "-0.03em",
            lineHeight: 1.15,
          }}
        >
          Built for shipping, not bikeshedding
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{
            fontSize: "1.05rem",
            color: "rgba(255,255,255,0.4)",
            lineHeight: "1.7",
            margin: 0,
          }}
        >
          Every feature is designed to remove friction from your review loop.
        </motion.p>
      </div>

      {/* Spotlight effect */}
      {!isMobile && <Spotlight gridRef={gridRef} />}

      {/* Bento Grid layout */}
      <div
        ref={gridRef}
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gridAutoRows: "65px",
          gap: "16px",
          width: "100%",
          maxWidth: "1100px",
        }}
        className="rin-features-grid"
      >
        {rinFeatures.map((feature, i) => {
          // Identify if this card matches the active highlighted layout block in the image
          const isEfficiency = feature.gridClass === "card-efficiency";

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className={`grid-cell ${feature.gridClass}`}
            >
              <ParticleCard
                glowColor={feature.accent}
                className="rin-feature-card"
                style={{
                  backgroundColor: "#0d0b12",
                  border: isEfficiency 
                    ? "1px solid rgba(168, 85, 247, 0.4)" 
                    : "1px solid rgba(255,255,255,0.04)",
                  boxShadow: isEfficiency 
                    ? "0 0 25px rgba(168, 85, 247, 0.15)" 
                    : "none",
                  borderRadius: "18px",
                  padding: "32px 28px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  height: "100%",
                  cursor: "default",
                  transition: "border-color 0.3s ease, box-shadow 0.3s ease",
                  ["--glow-x" as string]: "50%",
                  ["--glow-y" as string]: "50%",
                  ["--glow-intensity" as string]: "0",
                }}
              >
                {/* Internal dynamic border overlay */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    padding: "1px",
                    borderRadius: "18px",
                    background: `radial-gradient(280px circle at var(--glow-x) var(--glow-y), rgba(${feature.accent}, calc(var(--glow-intensity) * 0.75)) 0%, rgba(${feature.accent}, calc(var(--glow-intensity) * 0.3)) 40%, transparent 65%)`,
                    WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    WebkitMaskComposite: "xor",
                    mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    maskComposite: "exclude",
                    pointerEvents: "none",
                    zIndex: 1,
                  }}
                />

                {/* Top Section Layout: Label */}
                <div
                  style={{
                    fontSize: "15px",
                    fontWeight: 500,
                    color: "rgba(255, 255, 255, 0.9)",
                    fontFamily: "sans-serif",
                  }}
                >
                  {feature.label}
                </div>

                {/* Bottom Section Layout: Header & Description */}
                <div>
                  <h3
                    style={{
                      fontSize: "20px",
                      fontWeight: 600,
                      color: "#fff",
                      margin: "0 0 4px 0",
                      lineHeight: 1.2,
                    }}
                  >
                    {feature.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "13px",
                      color: "rgba(255,255,255,0.4)",
                      margin: 0,
                      lineHeight: 1.4,
                    }}
                  >
                    {feature.description}
                  </p>
                </div>
              </ParticleCard>
            </motion.div>
          );
        })}
      </div>

      {/* Global Style overrides to orchestrate the Bento structure */}
      <style>{`
        /* Desktop Bento Layout configurations matching the visual file precisely */
        .card-insights { grid-column: span 1; grid-row: span 3; }
        .card-overview { grid-column: span 1; grid-row: span 3; }
        .card-teamwork { grid-column: span 2; grid-row: span 4; }
        .card-efficiency { grid-column: span 2; grid-row: span 5; }
        .card-connectivity { grid-column: span 1; grid-row: span 4; }
        .card-protection { grid-column: span 1; grid-row: span 4; }

        /* Responsive Breakpoint Tablet adjustments */
        @media (max-width: 1023px) {
          .rin-features-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            grid-auto-rows: auto !important;
          }
          .grid-cell { grid-column: span 1 !important; grid-row: span 1 !important; }
          .card-efficiency, .card-teamwork { grid-column: span 2 !important; }
        }

        /* Mobile Adjustments */
        @media (max-width: 650px) {
          .rin-features-grid {
            grid-template-columns: 1fr !important;
          }
          .grid-cell, .card-efficiency, .card-teamwork { grid-column: span 1 !important; }
        }
      `}</style>
    </section>
  );
};

export default RinFeaturesSection;