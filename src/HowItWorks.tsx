import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";

const steps = [
  { emoji: "🛒", title: "Achète ta carte", desc: "Sur clariocard.com — livraison rapide" },
  { emoji: "📧", title: "Reçois ton code", desc: "Par email dès ta commande confirmée" },
  { emoji: "⚙️", title: "Configure", desc: "Entre ton code et tes infos en 30 secondes" },
  { emoji: "📲", title: "Partage", desc: "Scanne et tout se passe automatiquement" },
];

export const HowItWorks: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill style={{ background: "#0a0a0a", fontFamily: "sans-serif", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>

      <h1 style={{
        color: "white", fontSize: 72, fontWeight: 700, marginBottom: 80,
        opacity: interpolate(frame, [0, 20], [0, 1], { extrapolateRight: "clamp" }),
        transform: `translateY(${interpolate(frame, [0, 20], [30, 0], { extrapolateRight: "clamp" })}px)`
      }}>
        Comment ça marche ?
      </h1>

      <div style={{ display: "flex", gap: 60 }}>
        {steps.map((step, i) => {
          const delay = 20 + i * 20;
          const opacity = interpolate(frame, [delay, delay + 20], [0, 1], { extrapolateRight: "clamp" });
          const translateY = interpolate(frame, [delay, delay + 20], [40, 0], { extrapolateRight: "clamp" });

          return (
            <div key={i} style={{
              opacity,
              transform: `translateY(${translateY}px)`,
              background: "#111",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: 24,
              padding: "48px 40px",
              textAlign: "center",
              width: 280,
            }}>
              <div style={{ fontSize: 64, marginBottom: 24 }}>{step.emoji}</div>
              <div style={{ color: "rgba(255,255,255,0.3)", fontSize: 18, marginBottom: 12, fontWeight: 600 }}>0{i + 1}</div>
              <h2 style={{ color: "white", fontSize: 28, fontWeight: 700, margin: "0 0 12px" }}>{step.title}</h2>
              <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 18, margin: 0, lineHeight: 1.5 }}>{step.desc}</p>
            </div>
          );
        })}
      </div>

      <div style={{ marginTop: 80, opacity: interpolate(frame, [100, 120], [0, 1], { extrapolateRight: "clamp" }) }}>
        <span style={{ fontSize: 48, color: "white", fontWeight: 700 }}>◈ ClarioCard</span>
      </div>

    </AbsoluteFill>
  );
};