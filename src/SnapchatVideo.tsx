import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";

const fadeIn = (frame: number, start: number, duration = 20) =>
  interpolate(frame, [start, start + duration], [0, 1], { extrapolateRight: "clamp" });

const slideUp = (frame: number, start: number, duration = 20) =>
  interpolate(frame, [start, start + duration], [30, 0], { extrapolateRight: "clamp" });

export const SnapchatVideo: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill style={{ background: "#0a0a0a", fontFamily: "sans-serif", color: "white" }}>

      {/* PARTIE 1 - TITRE */}
      {frame < 60 && (
        <AbsoluteFill style={{ alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
          <div style={{ opacity: fadeIn(frame, 0), transform: `translateY(${slideUp(frame, 0)}px)`, textAlign: "center" }}>
            <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 22, letterSpacing: 6, textTransform: "uppercase", margin: "0 0 16px" }}>ClarioCard</p>
            <div style={{ background: "#FFFC00", borderRadius: 20, padding: "16px 40px", marginBottom: 24, display: "inline-block" }}>
              <h1 style={{ fontSize: 72, fontWeight: 700, margin: 0, color: "#000" }}>👻 Snapchat</h1>
            </div>
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 28, margin: 0 }}>Ajoutez des amis en 1 tap NFC</p>
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
              Quand quelqu'un scanne votre carte, il arrive sur une page avec votre snapcode et peut vous ajouter instantanément.
            </p>
            {[
              "Snapcode affiché instantanément",
              "Bouton Ajouter en 1 clic",
              "Lien direct vers votre profil Snap",
              "Design personnalisé à votre image",
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12, opacity: fadeIn(frame, 80 + i * 15) }}>
                <div style={{ width: 24, height: 24, borderRadius: "50%", background: "#FFFC00", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 700, color: "#000" }}>✓</div>
                <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 18, margin: 0 }}>{item}</p>
              </div>
            ))}
          </div>

          {/* Mockup téléphone */}
          <div style={{ opacity: fadeIn(frame, 80), width: 300 }}>
            <div style={{ background: "#111", border: "3px solid rgba(255,255,255,0.15)", borderRadius: 40, padding: "20px" }}>
              <div style={{ background: "#1a1a1a", borderRadius: 28, padding: "24px 20px", textAlign: "center" }}>
                <div style={{ width: 80, height: 80, borderRadius: "50%", background: "#FFFC00", margin: "0 auto 12px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 36 }}>👻</div>
                <p style={{ color: "white", fontSize: 20, fontWeight: 700, margin: "0 0 4px" }}>@votre_snap</p>
                <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 14, margin: "0 0 16px" }}>Votre snapcode</p>
                <div style={{ background: "#FFFC00", borderRadius: 12, width: 100, height: 100, margin: "0 auto 16px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <p style={{ color: "#000", fontSize: 12, fontWeight: 700, margin: 0 }}>SNAPCODE</p>
                </div>
                <div style={{ background: "#FFFC00", borderRadius: 12, padding: "14px", marginBottom: 12 }}>
                  <p style={{ color: "#000", fontSize: 16, fontWeight: 700, margin: 0 }}>👻 M'ajouter sur Snap</p>
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
              { label: "Scans NFC", value: Math.floor(interpolate(frame, [200, 270], [0, 623], { extrapolateRight: "clamp" })), color: "white", icon: "📱", sub: "Ce mois-ci" },
              { label: "Clics profil", value: Math.floor(interpolate(frame, [210, 270], [0, 489], { extrapolateRight: "clamp" })), color: "#FFFC00", icon: "👆", sub: "Ce mois-ci" },
              { label: "Taux conversion", value: Math.floor(interpolate(frame, [220, 270], [0, 78], { extrapolateRight: "clamp" })), color: "#4ade80", icon: "📈", sub: "scan → ajout" },
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

          {/* Graphique ajouts par mois */}
          <div style={{ background: "#111", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 20, padding: "30px", width: "100%", opacity: fadeIn(frame, 250) }}>
            <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 14, margin: "0 0 20px", textTransform: "uppercase", letterSpacing: 2 }}>Amis ajoutés par mois</p>
            <div style={{ display: "flex", gap: 16, alignItems: "flex-end", height: 120 }}>
              {[
                { month: "Jan", value: 45 },
                { month: "Fév", value: 72 },
                { month: "Mar", value: 58 },
                { month: "Avr", value: 124 },
                { month: "Mai", value: 98 },
                { month: "Juin", value: 167 },
              ].map((bar, i) => (
                <div key={i} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 8, opacity: fadeIn(frame, 260 + i * 10) }}>
                  <p style={{ color: "#FFFC00", fontSize: 14, fontWeight: 700, margin: 0 }}>{bar.value}</p>
                  <div style={{
                    width: "100%", borderRadius: 8,
                    height: interpolate(frame, [260 + i * 10, 290 + i * 10], [0, (bar.value / 167) * 80], { extrapolateRight: "clamp" }),
                    background: "#FFFC00"
                  }} />
                  <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 12, margin: 0 }}>{bar.month}</p>
                </div>
              ))}
            </div>
          </div>

        </AbsoluteFill>
      )}

      {/* PARTIE 4 - FIN */}
      {frame >= 330 && (
        <AbsoluteFill style={{ alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
          <div style={{ opacity: fadeIn(frame, 330), transform: `translateY(${slideUp(frame, 330)}px)`, textAlign: "center" }}>
            <p style={{ fontSize: 72, margin: "0 0 24px" }}>👻</p>
            <h1 style={{ fontSize: 64, fontWeight: 700, margin: "0 0 16px" }}>◈ ClarioCard</h1>
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 28, margin: "0 0 16px" }}>Snapchat NFC</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 32 }}>
              {["Page NFC personnalisée", "Analytics scans & clics", "Taux conversion scan → ajout"].map((f, i) => (
                <div key={i} style={{ opacity: fadeIn(frame, 340 + i * 10), display: "flex", alignItems: "center", gap: 10, justifyContent: "center" }}>
                  <span style={{ color: "#FFFC00", fontSize: 18 }}>✓</span>
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