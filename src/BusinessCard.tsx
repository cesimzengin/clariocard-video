import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";

export const BusinessCard: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill style={{ background: "#0a0a0a", fontFamily: "sans-serif", alignItems: "center", justifyContent: "center", flexDirection: "row", gap: 80, padding: 80 }}>

      {/* Carte de visite */}
      <div style={{
        opacity: interpolate(frame, [0, 30], [0, 1], { extrapolateRight: "clamp" }),
        transform: `translateX(${interpolate(frame, [0, 30], [-60, 0], { extrapolateRight: "clamp" })}px)`,
        background: "linear-gradient(135deg, #1a1a2e, #16213e)",
        border: "1px solid rgba(255,255,255,0.15)",
        borderRadius: 32, padding: "60px 50px", width: 520, textAlign: "center",
        boxShadow: "0 40px 80px rgba(0,0,0,0.5)"
      }}>

        {/* Avatar */}
        <div style={{ width: 120, height: 120, borderRadius: "50%", background: "linear-gradient(135deg, #667eea, #764ba2)", margin: "0 auto 24px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 56 }}>👤</div>

        {/* Infos */}
        <h1 style={{ color: "white", fontSize: 38, fontWeight: 700, margin: "0 0 8px" }}>Jean Dupont</h1>
        <p style={{ color: "#667eea", fontSize: 22, margin: "0 0 6px", fontWeight: 600 }}>Directeur Commercial</p>
        <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 18, margin: "0 0 40px" }}>🏢 TechCorp France</p>

        <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: 32, display: "flex", flexDirection: "column", gap: 16 }}>
          {[
            { icon: "🌐", text: "www.techcorp.fr" },
            { icon: "✉️", text: "jean@techcorp.fr" },
            { icon: "📞", text: "+33 6 12 34 56 78" },
            { icon: "📅", text: "Prendre rendez-vous" },
          ].map((item, i) => {
            const delay = 40 + i * 20;
            return (
              <div key={i} style={{
                display: "flex", alignItems: "center", gap: 16,
                opacity: interpolate(frame, [delay, delay + 20], [0, 1], { extrapolateRight: "clamp" }),
                transform: `translateX(${interpolate(frame, [delay, delay + 20], [20, 0], { extrapolateRight: "clamp" })}px)`
              }}>
                <span style={{ fontSize: 22 }}>{item.icon}</span>
                <span style={{ color: "rgba(255,255,255,0.7)", fontSize: 18 }}>{item.text}</span>
              </div>
            );
          })}
        </div>

        {/* Bouton enregistrer contact */}
        <div style={{
          marginTop: 40,
          opacity: interpolate(frame, [120, 140], [0, 1], { extrapolateRight: "clamp" }),
          transform: `translateY(${interpolate(frame, [120, 140], [20, 0], { extrapolateRight: "clamp" })}px)`
        }}>
          <div style={{ background: "linear-gradient(135deg, #667eea, #764ba2)", borderRadius: 16, padding: "18px 40px", fontSize: 22, fontWeight: 700, color: "white", cursor: "pointer" }}>
            📱 Enregistrer le contact
          </div>
          <p style={{ color: "rgba(255,255,255,0.3)", fontSize: 14, marginTop: 12 }}>Compatible iPhone & Android</p>
        </div>

      </div>

      {/* Droite — Téléphone mockup */}
      <div style={{
        opacity: interpolate(frame, [20, 50], [0, 1], { extrapolateRight: "clamp" }),
        transform: `translateX(${interpolate(frame, [20, 50], [60, 0], { extrapolateRight: "clamp" })}px)`,
        display: "flex", flexDirection: "column", alignItems: "center", gap: 30
      }}>

        {/* Téléphone */}
        <div style={{ background: "#111", border: "3px solid rgba(255,255,255,0.15)", borderRadius: 40, padding: "20px", width: 280, boxShadow: "0 40px 80px rgba(0,0,0,0.5)" }}>
          <div style={{ background: "#1a1a2e", borderRadius: 28, padding: "30px 20px", textAlign: "center" }}>
            <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 14, margin: "0 0 16px", textTransform: "uppercase", letterSpacing: 2 }}>Nouveau contact</p>
            <div style={{ width: 70, height: 70, borderRadius: "50%", background: "linear-gradient(135deg, #667eea, #764ba2)", margin: "0 auto 16px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 32 }}>👤</div>
            <p style={{ color: "white", fontSize: 22, fontWeight: 700, margin: "0 0 4px" }}>Jean Dupont</p>
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 14, margin: "0 0 24px" }}>TechCorp France</p>

            <div style={{
              display: "flex", gap: 12, justifyContent: "center",
              opacity: interpolate(frame, [150, 170], [0, 1], { extrapolateRight: "clamp" }),
            }}>
              <div style={{ background: "#34C759", borderRadius: 12, padding: "12px 20px", color: "white", fontSize: 16, fontWeight: 600 }}>✓ Ajouter</div>
              <div style={{ background: "rgba(255,255,255,0.1)", borderRadius: 12, padding: "12px 20px", color: "white", fontSize: 16 }}>Ignorer</div>
            </div>
          </div>
        </div>

        {/* NFC tap */}
        <div style={{
          opacity: interpolate(frame, [170, 190], [0, 1], { extrapolateRight: "clamp" }),
          textAlign: "center"
        }}>
          <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 18, margin: "0 0 8px" }}>1 tap NFC suffit</p>
          <p style={{ color: "white", fontSize: 28, fontWeight: 700 }}>◈ ClarioCard</p>
        </div>

      </div>

    </AbsoluteFill>
  );
};