"use client";

import React from "react";
import LogoLoop from "./LogoLoop";
import type { LogoLoopProps } from "./LogoLoop";

const logos: LogoLoopProps["logos"] = [
  {
    node: (
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        {/* Anthropic/Claude — official stylized A mark from Bootstrap Icons bi-anthropic */}
        <svg width="34" height="34" viewBox="0 0 16 16" fill="white" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M9.218 2h2.402L16 12.987h-2.402zM4.379 2h2.512l4.38 10.987H8.82l-.895-2.308h-4.58l-.896 2.307H0L4.38 2.001zm2.755 6.64L5.635 4.777 4.137 8.64z"/>
        </svg>
        <span style={{ color: "white", fontSize: "22px", fontWeight: 600, fontFamily: "sans-serif", whiteSpace: "nowrap" }}>Claude</span>
      </div>
    ),
  },
  {
    node: (
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        {/* OpenAI — official gear/flower mark from SimpleIcons */}
        <svg width="34" height="34" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
          <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.032.067L9.552 20.57a4.5 4.5 0 0 1-5.952-2.266zm-1.198-9.324a4.47 4.47 0 0 1 2.343-1.965V12.5a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0L4.05 15.053a4.504 4.504 0 0 1-1.649-6.073zm16.59 3.868l-5.843-3.399 2.02-1.164a.076.076 0 0 1 .071 0l4.804 2.772a4.5 4.5 0 0 1-.676 8.115V12.5a.79.79 0 0 0-.376-.652zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.46 10.327V7.995a.071.071 0 0 1 .028-.067l4.804-2.767a4.5 4.5 0 0 1 6.675 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V7.994a4.5 4.5 0 0 1 7.375-3.453l-.142.08-4.778 2.758a.795.795 0 0 0-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z"/>
        </svg>
        <span style={{ color: "white", fontSize: "22px", fontWeight: 600, fontFamily: "sans-serif", whiteSpace: "nowrap" }}>OpenAI</span>
      </div>
    ),
  },
  {
    node: (
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        {/* Google Gemini — official 4-pointed star/sparkle mark from SimpleIcons */}
        <svg width="34" height="34" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.04 19.32Q12 21.51 12 24q0-2.49.93-4.68.96-2.19 2.58-3.81t3.81-2.55Q21.51 12 24 12q-2.49 0-4.68-.93a12.3 12.3 0 0 1-3.81-2.58 12.3 12.3 0 0 1-2.58-3.81Q12 2.49 12 0q0 2.49-.96 4.68-.93 2.19-2.55 3.81a12.3 12.3 0 0 1-3.81 2.58Q2.49 12 0 12q2.49 0 4.68.96 2.19.93 3.81 2.55t2.55 3.81"/>
        </svg>
        <span style={{ color: "white", fontSize: "22px", fontWeight: 600, fontFamily: "sans-serif", whiteSpace: "nowrap" }}>Gemini</span>
      </div>
    ),
  },
  {
    node: (
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        {/* DeepSeek — official mark from SimpleIcons */}
        <svg width="34" height="34" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
          <path d="M23.748 9.208c-.542-.5-1.493-.43-2.133-.308-.863.16-1.805.616-2.548 1.27-.056.048-.096.06-.132.008-.08-.12-.164-.238-.256-.352a8.57 8.57 0 0 0-1.088-1.08c-.504-.408-1.072-.676-1.68-.68-1.048-.004-1.864.584-2.56 1.276-.272.272-.528.56-.784.84-.068.076-.12.084-.2.012a7.45 7.45 0 0 0-.648-.524c-1.244-.888-2.612-1.136-4.06-.72-1.34.384-2.38 1.232-3.204 2.316-.784 1.032-1.3 2.196-1.596 3.456-.368 1.556-.384 3.12-.02 4.676.352 1.484 1.024 2.804 2.096 3.876.98.98 2.144 1.564 3.54 1.624 1.08.044 2.068-.228 2.964-.812.512-.332.952-.752 1.38-1.184.18-.184.356-.368.528-.556.076-.084.132-.088.22-.012.412.36.856.676 1.364.896.632.272 1.284.308 1.944.14 1.024-.264 1.82-.896 2.464-1.736.56-.74.936-1.58 1.192-2.476.028-.1.056-.2.088-.3.02-.06.048-.08.116-.056a5.1 5.1 0 0 0 1.204.208c.936.044 1.728-.3 2.308-1.04.472-.604.68-1.316.68-2.076.004-.96-.38-1.768-.94-2.464zm-9.76 7.736c-.34.704-.816 1.288-1.484 1.672-.592.34-1.228.44-1.888.244-.628-.188-1.076-.632-1.408-1.18a4.9 4.9 0 0 1-.648-2.128 5.6 5.6 0 0 1 .144-1.88c.228-.876.644-1.632 1.284-2.248.524-.504 1.124-.78 1.852-.736.532.032.98.26 1.36.62.6.564.896 1.28 1.04 2.064.168.9.1 1.784-.252 2.572zm8.12-2.832c-.176.588-.516 1.024-1.14 1.18-.3.08-.604.056-.896-.044-.048-.016-.08-.048-.064-.108.028-.124.056-.252.072-.376.112-.892-.012-1.748-.38-2.572a5.2 5.2 0 0 0-.756-1.172c-.044-.056-.044-.092.008-.14.336-.3.716-.472 1.164-.468.46.004.832.224 1.108.576.468.596.796 1.26.888 2.016.056.38.048.732 0 1.108z"/>
        </svg>
        <span style={{ color: "white", fontSize: "22px", fontWeight: 600, fontFamily: "sans-serif", whiteSpace: "nowrap" }}>DeepSeek</span>
      </div>
    ),
  },
  {
    node: (
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        {/* Grok / xAI — X mark */}
        <svg width="34" height="34" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
        <span style={{ color: "white", fontSize: "22px", fontWeight: 600, fontFamily: "sans-serif", whiteSpace: "nowrap" }}>Grok</span>
      </div>
    ),
  },
  {
    node: (
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        {/* Mistral — official mark from SimpleIcons */}
        <svg width="34" height="34" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
          <path d="M1.886 2.545h3.771v3.771H1.886zm16.457 0H22.114v3.771h-3.771zM5.657 2.545h3.771v3.771H5.657zm7.543 3.771h3.772v3.772h-3.772zm-3.772 0h3.772v3.772H9.428zm-3.771 0h3.771v3.772H5.657zm11.315 0h3.771v3.772h-3.771zm-3.772 3.772h3.772v3.771h-3.772zm-7.543 0h3.771v3.771H5.657zm11.315 0h3.771v3.771h-3.771zM1.886 10.088h3.771v3.771H1.886zm16.457 0H22.114v3.771h-3.771zM9.428 10.088h3.772v3.771H9.428zm-3.771 3.771h3.771v3.772H5.657zm7.543 0h3.772v3.772h-3.772zm-7.543 3.772h3.771v3.771H5.657zm7.543 0h3.772v3.771h-3.772zm-3.772 3.771h3.772v3.772H9.428z"/>
        </svg>
        <span style={{ color: "white", fontSize: "22px", fontWeight: 600, fontFamily: "sans-serif", whiteSpace: "nowrap" }}>Mistral</span>
      </div>
    ),
  },
  {
    node: (
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        {/* Meta Llama — Meta icon from SimpleIcons */}
        <svg width="34" height="34" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
          <path d="M6.135 9.752c.89 1.394 1.402 3.053 1.402 4.248 0 .742-.156 1.24-.404 1.543a.792.792 0 0 1-.633.298c-.566 0-1.138-.318-1.59-.876-.456-.563-.756-1.363-.756-2.415 0-1.73.732-3.038 1.981-2.798zm11.73 0c1.249-.24 1.981 1.068 1.981 2.798 0 1.052-.3 1.852-.756 2.415-.452.558-1.024.876-1.59.876a.792.792 0 0 1-.633-.298c-.248-.303-.404-.801-.404-1.543 0-1.195.512-2.854 1.402-4.248zM12 5.25c1.79 0 3.388.744 4.579 2.09l.073.086-.062.095c-.41.625-.772 1.311-1.08 2.05-.43 1.032-.704 2.11-.704 3.143 0 .63.098 1.235.271 1.796l.051.159-2.128-.65-.066.021-2.128.629.051-.159c.173-.561.271-1.166.271-1.796 0-1.033-.274-2.111-.704-3.144a14.13 14.13 0 0 0-1.08-2.05l-.062-.094.073-.086C10.612 5.994 12.21 5.25 14 5.25zm0 0"/>
        </svg>
        <span style={{ color: "white", fontSize: "22px", fontWeight: 600, fontFamily: "sans-serif", whiteSpace: "nowrap" }}>Llama</span>
      </div>
    ),
  },
  {
    node: (
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        {/* Cohere — simple C mark */}
        <svg width="34" height="34" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm3.5 14.5A6.47 6.47 0 0 1 12 18c-3.314 0-6-2.686-6-6s2.686-6 6-6a6.47 6.47 0 0 1 3.5 1.025l-1.5 2.598A3.48 3.48 0 0 0 12 9a3 3 0 1 0 0 6 3.48 3.48 0 0 0 2-0.623z"/>
        </svg>
        <span style={{ color: "white", fontSize: "22px", fontWeight: 600, fontFamily: "sans-serif", whiteSpace: "nowrap" }}>Cohere</span>
      </div>
    ),
  },
  {
    node: (
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        {/* Qwen — Alibaba cloud mark */}
        <svg width="34" height="34" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2zm4.5 14H14v-3h-4v3H7.5V8H10v3h4V8H16.5z"/>
        </svg>
        <span style={{ color: "white", fontSize: "22px", fontWeight: 600, fontFamily: "sans-serif", whiteSpace: "nowrap" }}>Qwen</span>
      </div>
    ),
  },
  {
    node: (
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        {/* Gemma — Google G mark */}
        <svg width="34" height="34" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"/>
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
          direction={"left" as const}
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