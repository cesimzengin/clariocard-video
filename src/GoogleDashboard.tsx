import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";

const reviews = [
  { name: "Marie L.", text: "Super service, je recommande !", stars: 5, delay: 80 },
  { name: "Thomas B.", text: "Rapide et efficace, merci !", stars: 5, delay: 120 },
  { name: "Sophie M.", text: "Très bonne expérience !", stars: 5, delay: 160 },
];

export const GoogleDashboard: React.FC = () => {
  const frame = useCurrentFrame();

  const totalReviews = Math.floor(interpolate(frame, [20, 100], [47, 73], { extrapolateRight: "clamp" }));
  const rating = interpolate(frame, [20, 100], [4.2, 4.8], { extrapolateRight: "clamp" }).toFixed(1);

  return (
    <AbsoluteFill style={{ background: "#0a0a0a", fontFamily: "sans-serif", alignItems: "center", justifyContent: "center", flexDirection: "column", padding: 80 }}>

      {/* Header */}
      <div style={{
        opacity: interpolate(frame, [0, 20], [0, 1], { extrapolateRight: "clamp" }),
        marginBottom: 60, textAlign: "center"
      }}>
        <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 24, margin: "0 0 12px", letterSpacing: 4, textTransform: "uppercase" }}>Dashboard Google Avis</p>
        <h1 style={{ color: "white", fontSize: 56, fontWeight: 700, margin: 0 }}>🍕 Pizzeria Bella Roma</h1>
      </div>

      {/* Stats */}
      <div style={{ display: "flex", gap: 40, marginBottom: 60 }}>

        {/* Note */}
        <div style={{
          background: "#111", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 24, padding: "40px 60px", textAlign: "center",
          opacity: interpolate(frame, [20, 40], [0, 1], { extrapolateRight: "clamp" }),
          transform: `translateY(${interpolate(frame, [20, 40], [30, 0], { extrapolateRight: "clamp" })}px)`
        }}>
          <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 16, margin: "0 0 8px", textTransform: "uppercase", letterSpacing: 2 }}>Note moyenne</p>
          <p style={{ color: "#FBBC04", fontSize: 80, fontWeight: 800, margin: "0 0 8px" }}>{rating}</p>
          <p style={{ color: "#FBBC04", fontSize: 32, margin: 0 }}>★★★★★</p>
        </div>

        {/* Nombre d'avis */}
        <div style={{
          background: "#111", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 24, padding: "40px 60px", textAlign: "center",
          opacity: interpolate(frame, [30, 50], [0, 1], { extrapolateRight: "clamp" }),
          transform: `translateY(${interpolate(frame, [30, 50], [30, 0], { extrapolateRight: "clamp" })}px)`
        }}>
          <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 16, margin: "0 0 8px", textTransform: "uppercase", letterSpacing: 2 }}>Avis Google</p>
          <p style={{ color: "white", fontSize: 80, fontWeight: 800, margin: "0 0 8px" }}>{totalReviews}</p>
          <p style={{ color: "#4ade80", fontSize: 20, margin: 0 }}>↑ +26 depuis ClarioCard</p>
        </div>

        {/* Scans */}
        <div style={{
          background: "#111", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 24, padding: "40px 60px", textAlign: "center",
          opacity: interpolate(frame, [40, 60], [0, 1], { extrapolateRight: "clamp" }),
          transform: `translateY(${interpolate(frame, [40, 60], [30, 0], { extrapolateRight: "clamp" })}px)`
        }}>
          <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 16, margin: "0 0 8px", textTransform: "uppercase", letterSpacing: 2 }}>Scans NFC</p>
          <p style={{ color: "white", fontSize: 80, fontWeight: 800, margin: "0 0 8px" }}>143</p>
          <p style={{ color: "#4ade80", fontSize: 20, margin: 0 }}>↑ Ce mois-ci</p>
        </div>

      </div>

      {/* Avis récents */}
      <div style={{ display: "flex", gap: 24 }}>
        {reviews.map((review, i) => (
          <div key={i} style={{
            background: "#111", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 16, padding: "28px 32px", width: 340,
            opacity: interpolate(frame, [review.delay, review.delay + 25], [0, 1], { extrapolateRight: "clamp" }),
            transform: `translateY(${interpolate(frame, [review.delay, review.delay + 25], [20, 0], { extrapolateRight: "clamp" })}px)`
          }}>
            <p style={{ color: "#FBBC04", fontSize: 20, margin: "0 0 8px" }}>★★★★★</p>
            <p style={{ color: "white", fontSize: 18, margin: "0 0 12px", lineHeight: 1.5 }}>"{review.text}"</p>
            <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 14, margin: 0 }}>— {review.name}</p>
          </div>
        ))}
      </div>

      {/* Logo */}
      <div style={{ marginTop: 50, opacity: interpolate(frame, [200, 220], [0, 1], { extrapolateRight: "clamp" }) }}>
        <span style={{ fontSize: 32, color: "rgba(255,255,255,0.3)", fontWeight: 700 }}>◈ ClarioCard — Boostez vos avis Google</span>
      </div>

    </AbsoluteFill>
  );
};