import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";

const fadeIn = (frame: number, start: number, duration = 20) =>
  interpolate(frame, [start, start + duration], [0, 1], { extrapolateRight: "clamp" });

const slideUp = (frame: number, start: number, duration = 20) =>
  interpolate(frame, [start, start + duration], [30, 0], { extrapolateRight: "clamp" });

export const GoogleDashboard: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill style={{ background: "#0a0a0a", fontFamily: "sans-serif", color: "white" }}>

      {/* PARTIE 1 - TITRE */}
      {frame < 60 && (
        <AbsoluteFill style={{ alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
          <div style={{ opacity: fadeIn(frame, 0), transform: `translateY(${slideUp(frame, 0)}px)`, textAlign: "center" }}>
            <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 22, letterSpacing: 6, textTransform: "uppercase", margin: "0 0 16px" }}>ClarioCard</p>
            <div style={{ background: "#fff", borderRadius: 20, padding: "16px 40px", marginBottom: 24, display: "inline-block" }}>
              <h1 style={{ fontSize: 72, fontWeight: 700, margin: 0, color: "#000" }}>⭐ Google Avis</h1>
            </div>
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 28, margin: 0 }}>Boostez votre note Google en 1 tap NFC</p>
          </div>
        </AbsoluteFill>
      )}

      {/* PARTIE 2 - PAGE NFC + ANALYTICS */}
      {frame >= 60 && frame < 180 && (
        <AbsoluteFill style={{ alignItems: "center", justifyContent: "center", flexDirection: "column", padding: 80 }}>
          <div style={{ opacity: fadeIn(frame, 60), marginBottom: 40, textAlign: "center" }}>
            <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 18, letterSpacing: 4, textTransform: "uppercase", margin: "0 0 12px" }}>Fonctionnalité 1</p>
            <h2 style={{ fontSize: 52, fontWeight: 700, margin: 0 }}>Analytics & Évolution de votre note</h2>
          </div>

          <div style={{ display: "flex", gap: 30, width: "100%", marginBottom: 30 }}>
            {[
              { label: "Scans NFC", value: Math.floor(interpolate(frame, [80, 150], [0, 847])), color: "white", icon: "📱" },
              { label: "Avis Google", value: Math.floor(interpolate(frame, [90, 150], [47, 73])), color: "#FBBC04", icon: "⭐" },
              { label: "Note moyenne", value: interpolate(frame, [100, 150], [4.2, 4.8]).toFixed(1), color: "#4ade80", icon: "📈" },
            ].map((stat, i) => (
              <div key={i} style={{
                flex: 1, background: "#111", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 20, padding: "28px", textAlign: "center",
                opacity: fadeIn(frame, 70 + i * 15)
              }}>
                <p style={{ fontSize: 32, margin: "0 0 8px" }}>{stat.icon}</p>
                <p style={{ color: stat.color, fontSize: 52, fontWeight: 800, margin: "0 0 4px" }}>{stat.value}</p>
                <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 14, margin: 0, textTransform: "uppercase", letterSpacing: 1 }}>{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Évolution note du mois */}
          <div style={{ background: "#111", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 20, padding: "28px", width: "100%", opacity: fadeIn(frame, 120) }}>
            <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 14, margin: "0 0 20px", textTransform: "uppercase", letterSpacing: 2 }}>Évolution note — 6 derniers mois</p>
            <div style={{ display: "flex", gap: 16, alignItems: "flex-end", height: 100 }}>
              {[
                { month: "Jan", note: 4.1 },
                { month: "Fév", note: 4.2 },
                { month: "Mar", note: 4.4 },
                { month: "Avr", note: 4.5 },
                { month: "Mai", note: 4.7 },
                { month: "Juin", note: 4.8 },
              ].map((bar, i) => (
                <div key={i} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 8, opacity: fadeIn(frame, 130 + i * 8) }}>
                  <p style={{ color: "#FBBC04", fontSize: 13, fontWeight: 700, margin: 0 }}>{bar.note}</p>
                  <div style={{
                    width: "100%", borderRadius: 8,
                    height: interpolate(frame, [130 + i * 8, 160 + i * 8], [0, ((bar.note - 4.0) / 0.8) * 70], { extrapolateRight: "clamp" }),
                    background: "#FBBC04"
                  }} />
                  <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 12, margin: 0 }}>{bar.month}</p>
                </div>
              ))}
            </div>
          </div>
        </AbsoluteFill>
      )}

      {/* PARTIE 3 - CLASSEMENT + ALERTES */}
      {frame >= 180 && frame < 330 && (
        <AbsoluteFill style={{ alignItems: "center", justifyContent: "center", flexDirection: "column", padding: 80 }}>
          <div style={{ opacity: fadeIn(frame, 180), marginBottom: 40, textAlign: "center" }}>
            <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 18, letterSpacing: 4, textTransform: "uppercase", margin: "0 0 12px" }}>Fonctionnalités 2 & 3</p>
            <h2 style={{ fontSize: 52, fontWeight: 700, margin: 0 }}>Classement, Réponse auto & Alertes</h2>
          </div>

          <div style={{ display: "flex", gap: 30, width: "100%" }}>

            {/* Classement clients */}
            <div style={{ flex: 1, background: "#111", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 20, padding: "28px", opacity: fadeIn(frame, 190) }}>
              <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 14, margin: "0 0 20px", textTransform: "uppercase", letterSpacing: 2 }}>Classement avis ce mois</p>
              {[
                { rank: "🥇", name: "Pizzeria Roma", avis: 12, note: 4.9 },
                { rank: "🥈", name: "Café du Coin", avis: 8, note: 4.7 },
                { rank: "🥉", name: "Boulangerie Paul", avis: 6, note: 4.6 },
              ].map((client, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16, opacity: fadeIn(frame, 200 + i * 15) }}>
                  <span style={{ fontSize: 24 }}>{client.rank}</span>
                  <div style={{ flex: 1 }}>
                    <p style={{ color: "white", fontSize: 16, fontWeight: 600, margin: "0 0 2px" }}>{client.name}</p>
                    <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 13, margin: 0 }}>{client.avis} avis ce mois</p>
                  </div>
                  <p style={{ color: "#FBBC04", fontSize: 18, fontWeight: 700, margin: 0 }}>{client.note} ⭐</p>
                </div>
              ))}
            </div>

            <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 20 }}>

              {/* Réponse auto */}
              <div style={{ background: "#111", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 20, padding: "24px", opacity: fadeIn(frame, 220) }}>
                <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 13, margin: "0 0 12px", textTransform: "uppercase", letterSpacing: 2 }}>Réponse automatique aux avis</p>
                <div style={{ background: "rgba(74,222,128,0.1)", border: "1px solid rgba(74,222,128,0.2)", borderRadius: 12, padding: "14px" }}>
                  <p style={{ color: "#4ade80", fontSize: 14, fontWeight: 600, margin: "0 0 6px" }}>⭐⭐⭐⭐⭐ — Marie L.</p>
                  <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 13, margin: "0 0 10px" }}>"Super service, je recommande !"</p>
                  <div style={{ background: "rgba(255,255,255,0.06)", borderRadius: 8, padding: "10px", opacity: fadeIn(frame, 260) }}>
                    <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 11, margin: "0 0 4px" }}>Réponse automatique envoyée :</p>
                    <p style={{ color: "white", fontSize: 13, margin: 0 }}>"Merci Marie ! Votre confiance nous touche beaucoup..."</p>
                  </div>
                </div>
              </div>

              {/* Alerte avis négatif */}
              <div style={{ background: "#111", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 20, padding: "24px", opacity: fadeIn(frame, 250) }}>
                <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 13, margin: "0 0 12px", textTransform: "uppercase", letterSpacing: 2 }}>Alerte avis négatif</p>
                <div style={{ background: "rgba(248,113,113,0.1)", border: "1px solid rgba(248,113,113,0.3)", borderRadius: 12, padding: "14px", opacity: fadeIn(frame, 280) }}>
                  <p style={{ color: "#f87171", fontSize: 14, fontWeight: 600, margin: "0 0 6px" }}>⚠️ Avis 2 étoiles reçu !</p>
                  <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 13, margin: "0 0 8px" }}>"Service décevant..."</p>
                  <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 12, margin: 0 }}>Email d'alerte envoyé immédiatement</p>
                </div>
              </div>

            </div>
          </div>
        </AbsoluteFill>
      )}

      {/* PARTIE 4 - FIN */}
      {frame >= 330 && (
        <AbsoluteFill style={{ alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
          <div style={{ opacity: fadeIn(frame, 330), transform: `translateY(${slideUp(frame, 330)}px)`, textAlign: "center" }}>
            <p style={{ fontSize: 72, margin: "0 0 24px" }}>⭐</p>
            <h1 style={{ fontSize: 64, fontWeight: 700, margin: "0 0 16px" }}>◈ ClarioCard</h1>
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 28, margin: "0 0 16px" }}>Google Avis NFC</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 32 }}>
              {[
                "Page NFC personnalisée",
                "Analytics scans & nombre d'avis",
                "Évolution note du mois",
                "Classement entre clients",
                "Réponse auto aux avis",
                "Alertes avis négatifs",
              ].map((f, i) => (
                <div key={i} style={{ opacity: fadeIn(frame, 340 + i * 10), display: "flex", alignItems: "center", gap: 10, justifyContent: "center" }}>
                  <span style={{ color: "#FBBC04", fontSize: 18 }}>✓</span>
                  <span style={{ color: "rgba(255,255,255,0.7)", fontSize: 18 }}>{f}</span>
                </div>
              ))}
            </div>
            <div style={{ background: "white", borderRadius: 16, padding: "18px 48px", display: "inline-block" }}>
              <p style={{ color: "#000", fontSize: 22, fontWeight: 700, margin: 0 }}>app.clariocard.com</p>
            </div>
          </div>
        </AbsoluteFill>
      )}

    </AbsoluteFill>
  );
};