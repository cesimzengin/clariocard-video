import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";

const fadeIn = (frame: number, start: number, duration = 20) =>
  interpolate(frame, [start, start + duration], [0, 1], { extrapolateRight: "clamp" });

const slideUp = (frame: number, start: number, duration = 20) =>
  interpolate(frame, [start, start + duration], [30, 0], { extrapolateRight: "clamp" });

export const LinkedIn: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill style={{ background: "#0a0a0a", fontFamily: "sans-serif", color: "white" }}>

      {/* PARTIE 1 - TITRE */}
      {frame < 60 && (
        <AbsoluteFill style={{ alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
          <div style={{ opacity: fadeIn(frame, 0), transform: `translateY(${slideUp(frame, 0)}px)`, textAlign: "center" }}>
            <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 22, letterSpacing: 6, textTransform: "uppercase", margin: "0 0 16px" }}>ClarioCard</p>
            <div style={{ background: "#0077B5", borderRadius: 20, padding: "16px 40px", marginBottom: 24, display: "inline-block" }}>
              <h1 style={{ fontSize: 72, fontWeight: 700, margin: 0, color: "white" }}>💼 LinkedIn</h1>
            </div>
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 28, margin: 0 }}>Développez votre réseau en 1 tap NFC</p>
          </div>
        </AbsoluteFill>
      )}

      {/* PARTIE 2 - PAGE NFC + ANALYTICS + RDV */}
      {frame >= 60 && frame < 200 && (
        <AbsoluteFill style={{ alignItems: "center", justifyContent: "center", flexDirection: "column", padding: 80 }}>
          <div style={{ opacity: fadeIn(frame, 60), marginBottom: 40, textAlign: "center" }}>
            <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 18, letterSpacing: 4, textTransform: "uppercase", margin: "0 0 12px" }}>Fonctionnalités 1 & 2</p>
            <h2 style={{ fontSize: 52, fontWeight: 700, margin: 0 }}>Page NFC + Analytics + Prise de RDV</h2>
          </div>

          <div style={{ display: "flex", gap: 30, width: "100%" }}>

            {/* Mockup téléphone */}
            <div style={{ opacity: fadeIn(frame, 70), width: 260 }}>
              <div style={{ background: "#111", border: "3px solid rgba(255,255,255,0.15)", borderRadius: 40, padding: "20px" }}>
                <div style={{ background: "#1a1a1a", borderRadius: 28, padding: "20px", textAlign: "center" }}>
                  <div style={{ width: 70, height: 70, borderRadius: "50%", background: "#0077B5", margin: "0 auto 10px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 32 }}>👤</div>
                  <p style={{ color: "white", fontSize: 18, fontWeight: 700, margin: "0 0 4px" }}>Jean Dupont</p>
                  <p style={{ color: "#0077B5", fontSize: 14, margin: "0 0 4px" }}>Directeur Commercial</p>
                  <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 12, margin: "0 0 16px" }}>TechCorp France</p>
                  <div style={{ background: "#0077B5", borderRadius: 10, padding: "10px", marginBottom: 10 }}>
                    <p style={{ color: "white", fontSize: 14, fontWeight: 700, margin: 0 }}>💼 Voir mon LinkedIn</p>
                  </div>
                  <div style={{ background: "rgba(255,255,255,0.08)", borderRadius: 10, padding: "10px", marginBottom: 10, opacity: fadeIn(frame, 100) }}>
                    <p style={{ color: "white", fontSize: 14, fontWeight: 700, margin: 0 }}>📅 Prendre RDV</p>
                  </div>
                  <p style={{ color: "rgba(255,255,255,0.3)", fontSize: 11, margin: 0 }}>◈ ClarioCard</p>
                </div>
              </div>
            </div>

            {/* Stats + RDV */}
            <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 20 }}>
              <div style={{ display: "flex", gap: 20 }}>
                {[
                  { label: "Scans", value: Math.floor(interpolate(frame, [80, 150], [0, 312])), color: "white", icon: "📱" },
                  { label: "Connexions", value: Math.floor(interpolate(frame, [90, 150], [0, 847])), color: "#0077B5", icon: "🤝" },
                  { label: "Vues profil", value: Math.floor(interpolate(frame, [100, 150], [0, 589])), color: "#4ade80", icon: "👁️" },
                ].map((stat, i) => (
                  <div key={i} style={{
                    flex: 1, background: "#111", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 16, padding: "20px", textAlign: "center",
                    opacity: fadeIn(frame, 80 + i * 15)
                  }}>
                    <p style={{ fontSize: 28, margin: "0 0 6px" }}>{stat.icon}</p>
                    <p style={{ color: stat.color, fontSize: 40, fontWeight: 800, margin: "0 0 4px" }}>{stat.value}</p>
                    <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 12, margin: 0, textTransform: "uppercase", letterSpacing: 1 }}>{stat.label}</p>
                  </div>
                ))}
              </div>

              {/* Prise de RDV */}
              <div style={{ background: "#111", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 16, padding: "24px", opacity: fadeIn(frame, 130) }}>
                <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 13, margin: "0 0 16px", textTransform: "uppercase", letterSpacing: 2 }}>Prise de RDV intégrée</p>
                <div style={{ display: "flex", gap: 12 }}>
                  {["Calendly", "Google Calendar", "Outlook"].map((tool, i) => (
                    <div key={i} style={{ flex: 1, background: "rgba(0,119,181,0.1)", border: "1px solid rgba(0,119,181,0.3)", borderRadius: 10, padding: "12px", textAlign: "center", opacity: fadeIn(frame, 140 + i * 15) }}>
                      <p style={{ color: "#0077B5", fontSize: 14, fontWeight: 600, margin: 0 }}>📅 {tool}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Capture leads */}
              <div style={{ background: "#111", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 16, padding: "24px", opacity: fadeIn(frame, 160) }}>
                <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 13, margin: "0 0 12px", textTransform: "uppercase", letterSpacing: 2 }}>Capture leads après scan</p>
                <div style={{ background: "rgba(74,222,128,0.1)", border: "1px solid rgba(74,222,128,0.2)", borderRadius: 10, padding: "12px", display: "flex", alignItems: "center", gap: 12 }}>
                  <span style={{ fontSize: 24 }}>📧</span>
                  <div>
                    <p style={{ color: "white", fontSize: 14, fontWeight: 600, margin: "0 0 2px" }}>Sophie Martin — s.martin@startup.fr</p>
                    <p style={{ color: "#4ade80", fontSize: 12, margin: 0 }}>Lead capturé après scan — il y a 2 min</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AbsoluteFill>
      )}

      {/* PARTIE 3 - IA + MINI CRM */}
      {frame >= 200 && frame < 360 && (
        <AbsoluteFill style={{ alignItems: "center", justifyContent: "center", flexDirection: "column", padding: 80 }}>
          <div style={{ opacity: fadeIn(frame, 200), marginBottom: 40, textAlign: "center" }}>
            <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 18, letterSpacing: 4, textTransform: "uppercase", margin: "0 0 12px" }}>Fonctionnalités 3 & 4</p>
            <h2 style={{ fontSize: 52, fontWeight: 700, margin: 0 }}>IA messages & Mini CRM prospects</h2>
          </div>

          <div style={{ display: "flex", gap: 30, width: "100%" }}>

            {/* IA messages */}
            <div style={{ flex: 1, background: "#111", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 20, padding: "28px", opacity: fadeIn(frame, 210) }}>
              <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 13, margin: "0 0 20px", textTransform: "uppercase", letterSpacing: 2 }}>IA — Message de connexion</p>
              <div style={{ background: "rgba(0,119,181,0.1)", border: "1px solid rgba(0,119,181,0.2)", borderRadius: 12, padding: "16px", marginBottom: 16 }}>
                <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 12, margin: "0 0 8px" }}>Message généré automatiquement :</p>
                <p style={{ color: "white", fontSize: 14, lineHeight: 1.6, margin: 0 }}>
                  "Bonjour Sophie, j'ai eu le plaisir de vous rencontrer lors de l'événement Tech Paris. En tant que Directeur Commercial chez TechCorp, je pense que nous pourrions..."
                </p>
              </div>
              <div style={{ background: "rgba(0,119,181,0.1)", border: "1px solid rgba(0,119,181,0.2)", borderRadius: 12, padding: "16px", opacity: fadeIn(frame, 240) }}>
                <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 12, margin: "0 0 8px" }}>Message de follow-up (J+3) :</p>
                <p style={{ color: "white", fontSize: 14, lineHeight: 1.6, margin: 0 }}>
                  "Bonjour Sophie, je me permets de revenir vers vous concernant notre échange..."
                </p>
              </div>
            </div>

            {/* Mini CRM */}
            <div style={{ flex: 1, background: "#111", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 20, padding: "28px", opacity: fadeIn(frame, 220) }}>
              <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 13, margin: "0 0 20px", textTransform: "uppercase", letterSpacing: 2 }}>Mini CRM prospects</p>
              {[
                { name: "Sophie M.", role: "CEO · StartupX", status: "RDV planifié", color: "#4ade80" },
                { name: "Thomas B.", role: "CTO · InnoTech", status: "Message envoyé", color: "#FBBC04" },
                { name: "Marie L.", role: "DRH · CorpGroup", status: "À contacter", color: "#0077B5" },
                { name: "Pierre D.", role: "CFO · FinGroup", status: "Converti", color: "#4ade80" },
              ].map((prospect, i) => (
                <div key={i} style={{
                  display: "flex", alignItems: "center", gap: 12, marginBottom: 14,
                  opacity: fadeIn(frame, 230 + i * 15)
                }}>
                  <div style={{ width: 40, height: 40, borderRadius: "50%", background: "#0077B5", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18 }}>👤</div>
                  <div style={{ flex: 1 }}>
                    <p style={{ color: "white", fontSize: 15, fontWeight: 600, margin: "0 0 2px" }}>{prospect.name}</p>
                    <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 12, margin: 0 }}>{prospect.role}</p>
                  </div>
                  <div style={{ background: `${prospect.color}20`, border: `1px solid ${prospect.color}40`, borderRadius: 8, padding: "4px 10px" }}>
                    <p style={{ color: prospect.color, fontSize: 12, fontWeight: 600, margin: 0 }}>{prospect.status}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AbsoluteFill>
      )}

      {/* PARTIE 4 - FIN */}
      {frame >= 360 && (
        <AbsoluteFill style={{ alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
          <div style={{ opacity: fadeIn(frame, 360), transform: `translateY(${slideUp(frame, 360)}px)`, textAlign: "center" }}>
            <p style={{ fontSize: 72, margin: "0 0 24px" }}>💼</p>
            <h1 style={{ fontSize: 64, fontWeight: 700, margin: "0 0 16px" }}>◈ ClarioCard</h1>
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 28, margin: "0 0 16px" }}>LinkedIn NFC</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 32 }}>
              {[
                "Page NFC personnalisée",
                "Analytics networking",
                "Prise de RDV (Calendly, G-Cal)",
                "Capture leads après scan",
                "IA messages connexion & follow-up",
                "Mini CRM prospects",
              ].map((f, i) => (
                <div key={i} style={{ opacity: fadeIn(frame, 370 + i * 10), display: "flex", alignItems: "center", gap: 10, justifyContent: "center" }}>
                  <span style={{ color: "#0077B5", fontSize: 18 }}>✓</span>
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