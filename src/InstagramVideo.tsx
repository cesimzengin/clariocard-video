import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";

const fadeIn = (frame: number, start: number, duration = 20) =>
  interpolate(frame, [start, start + duration], [0, 1], { extrapolateRight: "clamp" });

const slideUp = (frame: number, start: number, duration = 20) =>
  interpolate(frame, [start, start + duration], [30, 0], { extrapolateRight: "clamp" });

export const InstagramVideo: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill style={{ background: "#0a0a0a", fontFamily: "sans-serif", color: "white" }}>

      {/* PARTIE 1 - TITRE */}
      {frame < 60 && (
        <AbsoluteFill style={{ alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
          <div style={{ opacity: fadeIn(frame, 0), transform: `translateY(${slideUp(frame, 0)}px)`, textAlign: "center" }}>
            <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 22, letterSpacing: 6, textTransform: "uppercase", margin: "0 0 16px" }}>ClarioCard</p>
            <div style={{ background: "linear-gradient(135deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)", borderRadius: 20, padding: "16px 40px", marginBottom: 24, display: "inline-block" }}>
              <h1 style={{ fontSize: 72, fontWeight: 700, margin: 0 }}>📸 Instagram</h1>
            </div>
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 28, margin: 0 }}>Gagnez des followers en 1 tap NFC</p>
          </div>
        </AbsoluteFill>
      )}

      {/* PARTIE 2 - PAGE NFC PERSONNALISÉE */}
      {frame >= 60 && frame < 180 && (
        <AbsoluteFill style={{ alignItems: "center", justifyContent: "center", flexDirection: "row", gap: 60, padding: 80 }}>

          <div style={{ opacity: fadeIn(frame, 60), transform: `translateY(${slideUp(frame, 60)}px)`, flex: 1 }}>
            <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 18, letterSpacing: 4, textTransform: "uppercase", margin: "0 0 16px" }}>Fonctionnalité 1</p>
            <h2 style={{ fontSize: 52, fontWeight: 700, margin: "0 0 20px" }}>Page NFC personnalisée</h2>
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 22, lineHeight: 1.6, margin: "0 0 30px" }}>
              Quand un client scanne votre carte, il arrive sur une page à votre image avec votre photo, bio et bouton "Suivre".
            </p>
            {[
              "Photo de profil & bio personnalisée",
              "Bouton Suivre en 1 clic",
              "Lien direct vers votre Instagram",
              "Design aux couleurs de votre marque",
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12, opacity: fadeIn(frame, 80 + i * 15) }}>
                <div style={{ width: 24, height: 24, borderRadius: "50%", background: "linear-gradient(135deg, #f09433, #bc1888)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 700 }}>✓</div>
                <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 18, margin: 0 }}>{item}</p>
              </div>
            ))}
          </div>

          {/* Mockup téléphone */}
          <div style={{ opacity: fadeIn(frame, 80), width: 300 }}>
            <div style={{ background: "#111", border: "3px solid rgba(255,255,255,0.15)", borderRadius: 40, padding: "20px" }}>
              <div style={{ background: "#1a1a1a", borderRadius: 28, padding: "24px 20px", textAlign: "center" }}>
                <div style={{ width: 80, height: 80, borderRadius: "50%", background: "linear-gradient(135deg, #f09433, #bc1888)", margin: "0 auto 12px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 36 }}>👤</div>
                <p style={{ color: "white", fontSize: 20, fontWeight: 700, margin: "0 0 4px" }}>@votre_compte</p>
                <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 14, margin: "0 0 20px" }}>Votre bio ici</p>
                <div style={{ background: "linear-gradient(135deg, #f09433, #bc1888)", borderRadius: 12, padding: "14px", marginBottom: 12 }}>
                  <p style={{ color: "white", fontSize: 16, fontWeight: 700, margin: 0 }}>📸 Suivre sur Instagram</p>
                </div>
                <p style={{ color: "rgba(255,255,255,0.3)", fontSize: 12, margin: 0 }}>◈ ClarioCard</p>
              </div>
            </div>
          </div>

        </AbsoluteFill>
      )}

      {/* PARTIE 3 - ANALYTICS */}
      {frame >= 180 && frame < 330 && (
        <AbsoluteFill style={{ alignItems: "center", justifyContent: "center", flexDirection: "column", padding: 80 }}>

          <div style={{ opacity: fadeIn(frame, 180), marginBottom: 40, textAlign: "center" }}>
            <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 18, letterSpacing: 4, textTransform: "uppercase", margin: "0 0 12px" }}>Fonctionnalité 2</p>
            <h2 style={{ fontSize: 52, fontWeight: 700, margin: 0 }}>Analytics & Taux de conversion</h2>
          </div>

          <div style={{ display: "flex", gap: 30, marginBottom: 40, width: "100%" }}>
            {[
              { label: "Scans NFC", value: Math.floor(interpolate(frame, [200, 270], [0, 847], { extrapolateRight: "clamp" })), color: "white", icon: "📱", sub: "Ce mois-ci" },
              { label: "Clics profil", value: Math.floor(interpolate(frame, [210, 270], [0, 612], { extrapolateRight: "clamp" })), color: "#f09433", icon: "👆", sub: "Ce mois-ci" },
              { label: "Taux conversion", value: Math.floor(interpolate(frame, [220, 270], [0, 72], { extrapolateRight: "clamp" })), color: "#4ade80", icon: "📈", sub: "scan → follow" },
            ].map((stat, i) => (
              <div key={i} style={{
                flex: 1, background: "#111", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 20, padding: "32px", textAlign: "center",
                opacity: fadeIn(frame, 190 + i * 15)
              }}>
                <p style={{ fontSize: 36, margin: "0 0 8px" }}>{stat.icon}</p>
                <p style={{ color: stat.color, fontSize: 56, fontWeight: 800, margin: "0 0 4px" }}>{stat.value}{stat.label === "Taux conversion" ? "%" : ""}</p>
                <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 14, margin: "0 0 4px", textTransform: "uppercase", letterSpacing: 1 }}>{stat.label}</p>
                <p style={{ color: "#4ade80", fontSize: 14, margin: 0 }}>{stat.sub}</p>
              </div>
            ))}
          </div>

          {/* Classement followers/mois */}
          <div style={{ background: "#111", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 20, padding: "30px", width: "100%", opacity: fadeIn(frame, 250) }}>
            <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 14, margin: "0 0 20px", textTransform: "uppercase", letterSpacing: 2 }}>Classement followers gagnés ce mois</p>
            {[
              { rank: "🥇", name: "Janvier", followers: 234, bar: 100 },
              { rank: "🥈", name: "Février", followers: 187, bar: 80 },
              { rank: "🥉", name: "Mars", followers: 312, bar: 100 },
            ].map((month, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 16, opacity: fadeIn(frame, 260 + i * 15) }}>
                <span style={{ fontSize: 24, width: 32 }}>{month.rank}</span>
                <span style={{ color: "white", fontSize: 16, width: 80 }}>{month.name}</span>
                <div style={{ flex: 1, background: "rgba(255,255,255,0.06)", borderRadius: 8, height: 24, overflow: "hidden" }}>
                  <div style={{ width: `${interpolate(frame, [270, 300], [0, month.bar], { extrapolateRight: "clamp" })}%`, height: "100%", background: "linear-gradient(135deg, #f09433, #bc1888)", borderRadius: 8 }} />
                </div>
                <span style={{ color: "#f09433", fontSize: 16, fontWeight: 700, width: 60 }}>+{month.followers}</span>
              </div>
            ))}
          </div>

        </AbsoluteFill>
      )}

      {/* PARTIE 4 - FIN */}
      {frame >= 330 && (
        <AbsoluteFill style={{ alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
          <div style={{ opacity: fadeIn(frame, 330), transform: `translateY(${slideUp(frame, 330)}px)`, textAlign: "center" }}>
            <p style={{ fontSize: 72, margin: "0 0 24px" }}>📸</p>
            <h1 style={{ fontSize: 64, fontWeight: 700, margin: "0 0 16px" }}>◈ ClarioCard</h1>
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 28, margin: "0 0 16px" }}>Instagram NFC</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 32 }}>
              {["Page NFC personnalisée", "Analytics scans & clics", "Taux conversion scan → follow", "Classement followers/mois"].map((f, i) => (
                <div key={i} style={{ opacity: fadeIn(frame, 340 + i * 10), display: "flex", alignItems: "center", gap: 10, justifyContent: "center" }}>
                  <span style={{ color: "#4ade80", fontSize: 18 }}>✓</span>
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