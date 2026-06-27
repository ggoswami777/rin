"use client";

import React from "react";
import LogoLoop from "./LogoLoop";
import type { LogoLoopProps } from "./LogoLoop";

const logos: LogoLoopProps["logos"] = [
  {
    node: (
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <svg width="34" height="34" viewBox="0 0 24 24" fill="white">
          <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
        </svg>
        <span style={{ color: "white", fontSize: "22px", fontWeight: 600, fontFamily: "sans-serif", whiteSpace: "nowrap" }}>Claude</span>
      </div>
    ),
  },
  {
    node: (
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <svg width="34" height="34" viewBox="0 0 24 24" fill="white">
          <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.032.067L9.552 20.57a4.5 4.5 0 0 1-5.952-2.266zm-1.198-9.324a4.47 4.47 0 0 1 2.343-1.965V12.5a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0L4.05 15.053a4.504 4.504 0 0 1-1.649-6.073zm16.59 3.868l-5.843-3.399 2.02-1.164a.076.076 0 0 1 .071 0l4.804 2.772a4.5 4.5 0 0 1-.676 8.115V12.5a.79.79 0 0 0-.376-.652zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.46 10.327V7.995a.071.071 0 0 1 .028-.067l4.804-2.767a4.5 4.5 0 0 1 6.675 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V7.994a4.5 4.5 0 0 1 7.375-3.453l-.142.08-4.778 2.758a.795.795 0 0 0-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z"/>
        </svg>
        <span style={{ color: "white", fontSize: "22px", fontWeight: 600, fontFamily: "sans-serif", whiteSpace: "nowrap" }}>OpenAI</span>
      </div>
    ),
  },
  {
    node: (
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <svg width="34" height="34" viewBox="0 0 24 24" fill="white">
          <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm6.885 8.529l-1.442.54c-.386-.9-.9-1.757-1.542-2.528l1.2-.857a10.07 10.07 0 0 1 1.784 2.845zM12 3.429c.857 0 1.671.129 2.443.343l-.6 1.371a8.55 8.55 0 0 0-1.843-.214c-.643 0-1.286.086-1.886.214l-.6-1.371c.772-.214 1.586-.343 2.486-.343zM5.1 8.529a10.007 10.007 0 0 1 1.8-2.845l1.2.857a10.095 10.095 0 0 0-1.543 2.528zm-1.585 5.4a8.684 8.684 0 0 1 0-3.857l1.457.385a7.18 7.18 0 0 0 0 3.087zm1.585 3.514a10.07 10.07 0 0 1-1.8-2.828l1.457-.543c.386.9.9 1.757 1.543 2.528zm7.9 3.128c-.772.214-1.586.343-2.4.343-.857 0-1.671-.13-2.443-.343l.6-1.371c.6.128 1.2.214 1.843.214.643 0 1.286-.086 1.886-.214zm.985-.3l-.6-1.37a8.55 8.55 0 0 0 1.843-.215c.643 0 1.286-.085 1.886-.214l.6 1.371a10.44 10.44 0 0 1-3.729.428zm4.915-2.828a10.007 10.007 0 0 1-1.8 2.828l-1.2-.857a10.095 10.095 0 0 0 1.543-2.528zm1.585-3.514a8.55 8.55 0 0 1-.214 1.928 8.684 8.684 0 0 1-.214-1.928c0-.686.086-1.371.214-1.929l1.457-.385a8.684 8.684 0 0 1 0 3.857z"/>
        </svg>
        <span style={{ color: "white", fontSize: "22px", fontWeight: 600, fontFamily: "sans-serif", whiteSpace: "nowrap" }}>Gemini</span>
      </div>
    ),
  },
  {
    node: (
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <svg width="34" height="34" viewBox="0 0 24 24" fill="white">
          <path d="M6.188 8.719c.439-.439.926-.801 1.444-1.087 2.887-1.591 6.589-.745 8.445 2.069l-2.246 2.245c-.644-1.469-2.243-2.305-3.834-1.949-.599.134-1.168.433-1.633.898l-4.304 4.306c-1.307 1.307-1.307 3.433 0 4.74 1.307 1.307 3.433 1.307 4.74 0l1.327-1.327c1.207.479 2.501.67 3.779.575l-2.929 2.929c-2.511 2.511-6.582 2.511-9.093 0s-2.511-6.582 0-9.093l4.304-4.306zm6.836-6.836l-2.929 2.929c1.277-.096 2.572.096 3.779.574l1.326-1.326c1.307-1.307 3.433-1.307 4.74 0 1.307 1.307 1.307 3.433 0 4.74l-4.305 4.305c-1.311 1.311-3.44 1.3-4.74 0-.303-.303-.564-.68-.727-1.051l-2.246 2.245c.236.358.481.667.796.982.812.812 1.846 1.417 3.036 1.704 1.542.371 3.194.166 4.613-.617.518-.286 1.005-.648 1.444-1.087l4.304-4.305c2.512-2.511 2.512-6.582.001-9.093-2.511-2.51-6.581-2.51-9.092 0z"/>
        </svg>
        <span style={{ color: "white", fontSize: "22px", fontWeight: 600, fontFamily: "sans-serif", whiteSpace: "nowrap" }}>DeepSeek</span>
      </div>
    ),
  },
  {
    node: (
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <svg width="34" height="34" viewBox="0 0 24 24" fill="white">
          <path d="M21.928 13.193l-2.536-7.31A1.988 1.988 0 0 0 17.5 4.5h-11a1.988 1.988 0 0 0-1.892 1.383l-2.536 7.31A1.996 1.996 0 0 0 2 14v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a1.996 1.996 0 0 0-.072-.807zM6.5 6.5h11l2 5.5H4.5zM18 16h-2v-2H8v2H6v-4h12z"/>
        </svg>
        <span style={{ color: "white", fontSize: "22px", fontWeight: 600, fontFamily: "sans-serif", whiteSpace: "nowrap" }}>Grok</span>
      </div>
    ),
  },
  {
    node: (
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <svg width="34" height="34" viewBox="0 0 24 24" fill="white">
          <path d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8.009 8.009 0 0 1-8 8zm3.536-11.536a5 5 0 1 0 0 7.072 5.006 5.006 0 0 0 0-7.072zm-1.414 5.658a3 3 0 1 1 0-4.244 3.003 3.003 0 0 1 0 4.244z"/>
        </svg>
        <span style={{ color: "white", fontSize: "22px", fontWeight: 600, fontFamily: "sans-serif", whiteSpace: "nowrap" }}>Mistral</span>
      </div>
    ),
  },
  {
    node: (
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <svg width="34" height="34" viewBox="0 0 24 24" fill="white">
          <path d="M8.5 2.5A1.5 1.5 0 0 1 10 1h4a1.5 1.5 0 0 1 1.5 1.5V4H18a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2.5V2.5zm1.5 0V4h4V2.5H10zM6 6v13h12V6H6zm2 3h8v2H8V9zm0 4h5v2H8v-2z"/>
        </svg>
        <span style={{ color: "white", fontSize: "22px", fontWeight: 600, fontFamily: "sans-serif", whiteSpace: "nowrap" }}>Llama</span>
      </div>
    ),
  },
  {
    node: (
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <svg width="34" height="34" viewBox="0 0 24 24" fill="white">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
        </svg>
        <span style={{ color: "white", fontSize: "22px", fontWeight: 600, fontFamily: "sans-serif", whiteSpace: "nowrap" }}>Cohere</span>
      </div>
    ),
  },
  {
    node: (
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <svg width="34" height="34" viewBox="0 0 24 24" fill="white">
          <path d="M9.604 1.12c.051.028.068.031.068.072 0 .014-.002.025-.006.037L7.01 8.954a.056.056 0 0 0 .052.076h3.737c.032 0 .055.031.047.062L5.92 23.856c-.014.052-.084.059-.108.01L.016 11.73a.058.058 0 0 1 .052-.082h3.71c.028 0 .051-.019.057-.046L7.124 1.09c.02-.08.112-.107.163-.05L9.604 1.12zm5.196.88c-.006.024-.017.046-.034.063L7.79 10.4a.057.057 0 0 0 .042.096h3.497c.032 0 .054.032.046.062l-3.834 13.38c-.015.054-.087.059-.11.008L.018 11.697a.058.058 0 0 1 .053-.081h3.71a.058.058 0 0 0 .056-.046L7.124 1.057c.019-.079.111-.107.162-.05l7.48 9.036c.027.033.023.082-.009.11z"/>
        </svg>
        <span style={{ color: "white", fontSize: "22px", fontWeight: 600, fontFamily: "sans-serif", whiteSpace: "nowrap" }}>Qwen</span>
      </div>
    ),
  },
  {
    node: (
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <svg width="34" height="34" viewBox="0 0 24 24" fill="white">
          <path d="M12 1.5C6.2 1.5 1.5 6.2 1.5 12S6.2 22.5 12 22.5 22.5 17.8 22.5 12 17.8 1.5 12 1.5zm5.3 7.2l-1.4 1.4c-.8-.9-2-1.5-3.3-1.5-2.5 0-4.5 2-4.5 4.5s2 4.5 4.5 4.5c1.8 0 3.4-1.1 4.1-2.7H12v-2h7.5v.5c0 3.9-3.1 7-7 7s-7-3.1-7-7 3.1-7 7-7c1.9 0 3.6.8 4.8 2z"/>
        </svg>
        <span style={{ color: "white", fontSize: "22px", fontWeight: 600, fontFamily: "sans-serif", whiteSpace: "nowrap" }}>Gemma</span>
      </div>
    ),
  },
];

export const AILogoStrip = () => {
  return (
    <section
      style={{
        width: "100%",
        padding: "60px 0",
        background: "transparent",
        position: "relative",
        zIndex: 2,
        overflow: "hidden",
      }}
    >
      <p
        style={{
          textAlign: "center",
          fontSize: "12px",
          fontWeight: 500,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          color: "rgba(255,255,255,0.35)",
          marginBottom: "32px",
          userSelect: "none",
        }}
      >
        Leading AI Models &amp; Seamless Integrations
      </p>

      <div style={{ position: "relative" }}>
        <LogoLoop
          logos={logos}
          speed={180}
          direction="left"
          logoHeight={48} 
          gap={72} 
          pauseOnHover={true}
          fadeOut={true} 
          ariaLabel="Supported AI models"
        />
      </div>
    </section>
  );
};

export default AILogoStrip;