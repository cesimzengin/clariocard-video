import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";

export const LinkedIn: React.FC = () => {
  const frame = useCurrentFrame();

  const connections = Math.floor(interpolate(frame, [30, 120], [312, 847], { extrapolateRight: "clamp" }));
  const profileViews = Math.floor(interpolate(frame, [30, 120], [124, 589], { extrapolateRight: "clamp" }));
  const appearances = Math.floor(interpolate(frame, [30, 120], [45, 234], { extrapolateRight: "clamp" }));

  return (
    <AbsoluteFill style={{ background: "#0a0a0a", fontFamily: "sans-serif", alignItems: "center", justifyContent: "center", flexDirection: "column", padding: 80 }}>

      {/* Header */}
      <div style={{
        opacity: interpolate(frame, [0, 20], [0, 1], { extrapolateRight: "clamp" }),
        transform: `translateY(${interpolate(frame, [0, 20], [30, 0], { extrapolateRight: "clamp" })}px)`,
        marginBottom: 50, textAlign: "center"
      }}>
        <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 22, margin: "0 0 12px", letterSpacing: 4, textTransform: "uppercase" }}>Dashboard LinkedIn</p>
        <h1 style={{ color: "white", fontSize: 52, fontWeight: 700, margin: 0 }}>💼 Jean Dupont — Directeur Commercial</h1>
      </div>

      {/* Profil card */}
      <div style={{
        display: "flex", gap: 40, marginBottom: 50, width: "100%", justifyContent: "center",
        opacity: interpolate(frame, [20, 40], [0, 1], { extrapolateRight: "clamp" }),
        transform: `translateY(${interpolate(frame, [20, 40], [30, 0], { extrapolateRight: "clamp" })}px)`
      }}>
        <div style={{ background: "#0077B5", borderRadius: 24, padding: "40px 50px", display: "flex", alignItems: "center", gap: 30 }}>
          <div style={{ width: 100, height: 100, borderRadius: "50%", background: "rgba(255,255,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 48 }}>👤</div>
          <div>
            <h2 style={{ color: "white", fontSize: 32, fontWeight: 700, margin: "0 0 8px" }}>Jean Dupont</h2>
            <p style={{ color: "rgba(255,255,255,0.8)", fontSize: 20, margin: "0 0 4px" }}>Directeur Commercial</p>
            <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 18, margin: 0 }}>🏢 TechCorp France · Paris</p>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div style={{ display: "flex", gap: 40, marginBottom: 50 }}>
        {[
          { label: "Connexions", value: connections, color: "#0077B5", icon: "🤝", suffix: "" },
          { label: "Vues du profil", value: profileViews, color: "#4ade80", icon: "👁️", suffix: "" },
          { label: "Apparitions", value: appearances, color: "#FBBC04", icon: "🔍", suffix: "" },
        ].map((stat, i) => {
          const delay = 40 + i * 20;
          return (
            <div key={i} style={{
              background: "#111", border: `1px solid ${stat.color}33`, borderRadius: 24, padding: "36px 50px", textAlign: "center",
              opacity: interpolate(frame, [delay, delay + 20], [0, 1], { extrapolateRight: "clamp" }),
              transform: `translateY(${interpolate(frame, [delay, delay + 20], [30, 0], { extrapolateRight: "clamp" })}px)`
            }}>
              <p style={{ fontSize: 40, margin: "0 0 12px" }}>{stat.icon}</p>
              <p style={{ color: stat.color, fontSize: 70, fontWeight: 800, margin: "0 0 8px" }}>{stat.value}{stat.suffix}</p>
              <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 16, margin: "0 0 8px", textTransform: "uppercase", letterSpacing: 2 }}>{stat.label}</p>
              <p style={{ color: "#4ade80", fontSize: 18, margin: 0 }}>↑ Depuis ClarioCard</p>
            </div>
          );
        })}
      </div>

      {/* Nouvelles connexions */}
      <div style={{ display: "flex", gap: 20 }}>
        {[
          { name: "Marie L.", role: "CEO · StartupX", delay: 100 },
          { name: "Thomas B.", role: "CTO · InnoTech", delay: 130 },
          { name: "Sophie M.", role: "DRH · CorpGroup", delay: 160 },
        ].map((person, i) => (
          <div key={i} style={{
            background: "#111", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 16, padding: "20px 30px", display: "flex", alignItems: "center", gap: 16,
            opacity: interpolate(frame, [person.delay, person.delay + 25], [0, 1], { extrapolateRight: "clamp" }),
            transform: `translateY(${interpolate(frame, [person.delay, person.delay + 25], [20, 0], { extrapolateRight: "clamp" })}px)`
          }}>
            <div style={{ width: 50, height: 50, borderRadius: "50%", background: "#0077B5", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24 }}>👤</div>
            <div>
              <p style={{ color: "white", fontSize: 18, fontWeight: 600, margin: "0 0 4px" }}>{person.name}</p>
              <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 14, margin: 0 }}>{person.role}</p>
            </div>
            <div style={{ background: "#0077B5", borderRadius: 8, padding: "6px 14px", fontSize: 14, color: "white", fontWeight: 600 }}>+ Connecté</div>
          </div>
        ))}
      </div>

      {/* Logo */}
      <div style={{ marginTop: 40, opacity: interpolate(frame, [200, 220], [0, 1], { extrapolateRight: "clamp" }) }}>
        <span style={{ fontSize: 28, color: "rgba(255,255,255,0.3)", fontWeight: 700 }}>◈ ClarioCard — Boostez votre réseau LinkedIn</span>
      </div>

    </AbsoluteFill>
  );
};