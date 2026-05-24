import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate, Series } from "remotion";

const fadeIn = (frame: number, start: number, duration = 20) =>
  interpolate(frame, [start, start + duration], [0, 1], { extrapolateRight: "clamp" });

const slideUp = (frame: number, start: number, duration = 20) =>
  interpolate(frame, [start, start + duration], [30, 0], { extrapolateRight: "clamp" });

export const FideliteVideo: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill style={{ background: "#0a0a0a", fontFamily: "sans-serif", color: "white" }}>

      {/* PARTIE 1 - TITRE */}
      {frame < 60 && (
        <AbsoluteFill style={{ alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
          <div style={{ opacity: fadeIn(frame, 0), transform: `translateY(${slideUp(frame, 0)}px)`, textAlign: "center" }}>
            <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 22, letterSpacing: 6, textTransform: "uppercase", margin: "0 0 16px" }}>ClarioCard</p>
            <h1 style={{ fontSize: 72, fontWeight: 700, margin: "0 0 16px" }}>Carte de fidélité</h1>
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 28, margin: 0 }}>Créez et gérez votre programme en 2 minutes</p>
          </div>
        </AbsoluteFill>
      )}

      {/* PARTIE 2 - CONFIGURATION COMMERCANT */}
      {frame >= 60 && frame < 180 && (
        <AbsoluteFill style={{ alignItems: "center", justifyContent: "center", flexDirection: "column", padding: 80 }}>

          <div style={{ opacity: fadeIn(frame, 60), transform: `translateY(${slideUp(frame, 60)}px)`, marginBottom: 40, textAlign: "center" }}>
            <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 18, letterSpacing: 4, textTransform: "uppercase", margin: "0 0 12px" }}>Étape 1 — Configuration</p>
            <h2 style={{ fontSize: 48, fontWeight: 700, margin: 0 }}>Le commerçant crée son programme</h2>
          </div>

          <div style={{ display: "flex", gap: 30, width: "100%" }}>
            {/* Formulaire setup */}
            <div style={{
              flex: 1, background: "#111", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 24, padding: "40px",
              opacity: fadeIn(frame, 70), transform: `translateY(${slideUp(frame, 70)}px)`
            }}>
              <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 14, margin: "0 0 24px", textTransform: "uppercase", letterSpacing: 2 }}>Mon programme</p>

              {[
                { label: "Nom du commerce", value: "Pizzeria Bella Roma" },
                { label: "Points par visite", value: "10 points" },
                { label: "Récompense", value: "Pizza offerte à 100 pts" },
                { label: "Couleur", value: "Rouge #E63946" },
              ].map((field, i) => {
                const d = 80 + i * 15;
                return (
                  <div key={i} style={{ marginBottom: 20, opacity: fadeIn(frame, d), transform: `translateY(${slideUp(frame, d)}px)` }}>
                    <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 12, margin: "0 0 6px", textTransform: "uppercase", letterSpacing: 1 }}>{field.label}</p>
                    <div style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: 10, padding: "12px 16px", color: "white", fontSize: 16 }}>
                      {field.value}
                    </div>
                  </div>
                );
              })}

              <div style={{ opacity: fadeIn(frame, 140), background: "white", borderRadius: 12, padding: "14px", textAlign: "center", color: "#000", fontWeight: 700, fontSize: 18, marginTop: 8 }}>
                Créer mon programme
              </div>
            </div>

            {/* Preview 2 types */}
            <div style={{ display: "flex", flexDirection: "column", gap: 20, opacity: fadeIn(frame, 120), transform: `translateY(${slideUp(frame, 120)}px)` }}>

              {/* Carte à points */}
              <div style={{ background: "#111", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 20, padding: "24px 28px" }}>
                <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 12, margin: "0 0 12px", textTransform: "uppercase", letterSpacing: 2 }}>Type 1 — Points</p>
                <div style={{ background: "linear-gradient(135deg, #E63946, #c1121f)", borderRadius: 16, padding: "20px 24px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <div>
                    <p style={{ color: "rgba(255,255,255,0.8)", fontSize: 13, margin: "0 0 4px" }}>Pizzeria Bella Roma</p>
                    <p style={{ color: "white", fontSize: 42, fontWeight: 800, margin: "0 0 2px" }}>40 pts</p>
                    <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 12, margin: 0 }}>Pizza offerte à 100 pts</p>
                  </div>
                  <div style={{ background: "rgba(255,255,255,0.2)", borderRadius: 12, padding: "10px 16px", textAlign: "center" }}>
                    <p style={{ color: "white", fontSize: 22, fontWeight: 800, margin: "0 0 2px" }}>+10</p>
                    <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 11, margin: 0 }}>par visite</p>
                  </div>
                </div>
              </div>

              {/* Carte à tampons */}
              <div style={{ background: "#111", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 20, padding: "24px 28px" }}>
                <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 12, margin: "0 0 12px", textTransform: "uppercase", letterSpacing: 2 }}>Type 2 — Tampons</p>
                <div style={{ background: "linear-gradient(135deg, #4361ee, #3a0ca3)", borderRadius: 16, padding: "20px 24px" }}>
                  <p style={{ color: "rgba(255,255,255,0.8)", fontSize: 13, margin: "0 0 12px" }}>Café du Coin — 9 achetés = 1 offert</p>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 8 }}>
                    {Array.from({ length: 10 }).map((_, i) => (
                      <div key={i} style={{
                        width: 36, height: 36, borderRadius: "50%",
                        background: i < 4 ? "white" : "rgba(255,255,255,0.2)",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        fontSize: 16
                      }}>
                        {i < 4 ? "✓" : ""}
                        {i === 9 ? "🎁" : ""}
                      </div>
                    ))}
                  </div>
                  <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 12, margin: "10px 0 0" }}>4/9 tampons — encore 5 avant le café offert !</p>
                </div>
              </div>

            </div>
          </div>
        </AbsoluteFill>
      )}

      {/* PARTIE 3 - UTILISATION CLIENT */}
      {frame >= 180 && frame < 330 && (
        <AbsoluteFill style={{ alignItems: "center", justifyContent: "center", flexDirection: "column", padding: 80 }}>

          <div style={{ opacity: fadeIn(frame, 180), transform: `translateY(${slideUp(frame, 180)}px)`, marginBottom: 40, textAlign: "center" }}>
            <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 18, letterSpacing: 4, textTransform: "uppercase", margin: "0 0 12px" }}>Étape 2 — Utilisation</p>
            <h2 style={{ fontSize: 48, fontWeight: 700, margin: 0 }}>Le client scanne et cumule des points</h2>
          </div>

          <div style={{ display: "flex", gap: 40, alignItems: "center" }}>

            {/* Téléphone client */}
            <div style={{ opacity: fadeIn(frame, 190), transform: `translateY(${slideUp(frame, 190)}px)`, textAlign: "center" }}>
              <div style={{ background: "#111", border: "3px solid rgba(255,255,255,0.15)", borderRadius: 40, padding: "20px", width: 260, margin: "0 auto 16px" }}>
                <div style={{ background: "#1a1a1a", borderRadius: 28, padding: "24px 20px" }}>
                  <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 12, margin: "0 0 16px", textTransform: "uppercase", letterSpacing: 2 }}>Ma carte fidélité</p>
                  <div style={{ background: "linear-gradient(135deg, #E63946, #c1121f)", borderRadius: 16, padding: "24px 20px", marginBottom: 16 }}>
                    <p style={{ color: "rgba(255,255,255,0.8)", fontSize: 13, margin: "0 0 6px" }}>Pizzeria Bella Roma</p>
                    <p style={{ color: "white", fontSize: 52, fontWeight: 800, margin: "0 0 4px" }}>
                      {Math.floor(interpolate(frame, [220, 280], [30, 40], { extrapolateRight: "clamp" }))}
                    </p>
                    <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 13, margin: 0 }}>points</p>
                  </div>
                  <div style={{ background: "white", borderRadius: 12, padding: "12px", marginBottom: 12 }}>
                    <div style={{ width: 80, height: 80, background: "#000", margin: "0 auto", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, color: "white" }}>QR CODE</div>
                  </div>
                  <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 11, margin: 0 }}>Montrez ce QR au commerçant</p>
                </div>
              </div>
              <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 16 }}>Carte du client</p>
            </div>

            {/* Flèche */}
            <div style={{ opacity: fadeIn(frame, 240), fontSize: 48 }}>→</div>

            {/* Scanner commerçant */}
            <div style={{ opacity: fadeIn(frame, 250), transform: `translateY(${slideUp(frame, 250)}px)`, textAlign: "center" }}>
              <div style={{ background: "#111", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 24, padding: "40px", width: 280 }}>
                <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 14, margin: "0 0 20px", textTransform: "uppercase", letterSpacing: 2 }}>Scanner commerçant</p>
                <div style={{ background: "rgba(255,255,255,0.06)", borderRadius: 16, padding: "20px", marginBottom: 20, textAlign: "center" }}>
                  <p style={{ fontSize: 48, margin: "0 0 8px" }}>📷</p>
                  <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 14, margin: 0 }}>Scanner le QR code</p>
                </div>
                <div style={{
                  opacity: fadeIn(frame, 280),
                  background: "rgba(74,222,128,0.1)", border: "1px solid rgba(74,222,128,0.3)", borderRadius: 12, padding: "16px", textAlign: "center"
                }}>
                  <p style={{ color: "#4ade80", fontSize: 18, fontWeight: 700, margin: "0 0 4px" }}>+10 points</p>
                  <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 13, margin: 0 }}>Visite validée !</p>
                </div>
              </div>
              <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 16, marginTop: 16 }}>Borne du commerçant</p>
            </div>

          </div>
        </AbsoluteFill>
      )}

      {/* PARTIE 4 - DASHBOARD */}
      {frame >= 330 && frame < 450 && (
        <AbsoluteFill style={{ alignItems: "center", justifyContent: "center", flexDirection: "column", padding: 80 }}>

          <div style={{ opacity: fadeIn(frame, 330), marginBottom: 40, textAlign: "center" }}>
            <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 18, letterSpacing: 4, textTransform: "uppercase", margin: "0 0 12px" }}>Étape 3 — Suivi</p>
            <h2 style={{ fontSize: 48, fontWeight: 700, margin: 0 }}>Le commerçant suit ses clients</h2>
          </div>

          <div style={{ display: "flex", gap: 30, marginBottom: 30 }}>
            {[
              { label: "Clients inscrits", value: Math.floor(interpolate(frame, [350, 400], [0, 47], { extrapolateRight: "clamp" })), color: "white", icon: "👥" },
              { label: "Visites ce mois", value: Math.floor(interpolate(frame, [360, 410], [0, 234], { extrapolateRight: "clamp" })), color: "#4ade80", icon: "📊" },
              { label: "Récompenses offertes", value: Math.floor(interpolate(frame, [370, 420], [0, 12], { extrapolateRight: "clamp" })), color: "#FBBC04", icon: "🎁" },
            ].map((stat, i) => (
              <div key={i} style={{
                background: "#111", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 20, padding: "32px 40px", textAlign: "center",
                opacity: fadeIn(frame, 340 + i * 15)
              }}>
                <p style={{ fontSize: 36, margin: "0 0 8px" }}>{stat.icon}</p>
                <p style={{ color: stat.color, fontSize: 56, fontWeight: 800, margin: "0 0 4px" }}>{stat.value}</p>
                <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 14, margin: 0, textTransform: "uppercase", letterSpacing: 1 }}>{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Table clients */}
          <div style={{ background: "#111", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 20, overflow: "hidden", width: "100%", opacity: fadeIn(frame, 390) }}>
            <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", padding: "12px 20px", background: "rgba(255,255,255,0.03)", fontSize: 11, color: "rgba(255,255,255,0.3)", textTransform: "uppercase", letterSpacing: 2 }}>
              <span>Client</span><span>Points</span><span>Visites</span><span>Statut</span>
            </div>
            {[
              { name: "Marie L.", points: 80, visits: 8, status: "Actif" },
              { name: "Thomas B.", points: 110, visits: 11, status: "Récompensé" },
              { name: "Sophie M.", points: 40, visits: 4, status: "Actif" },
            ].map((client, i) => (
              <div key={i} style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", padding: "14px 20px", borderTop: "0.5px solid rgba(255,255,255,0.05)", fontSize: 14, opacity: fadeIn(frame, 400 + i * 15) }}>
                <span style={{ color: "white" }}>{client.name}</span>
                <span style={{ color: "#FBBC04" }}>{client.points} pts</span>
                <span style={{ color: "rgba(255,255,255,0.5)" }}>{client.visits}</span>
                <span style={{ color: client.status === "Récompensé" ? "#4ade80" : "rgba(255,255,255,0.5)", fontSize: 12 }}>{client.status}</span>
              </div>
            ))}
          </div>
        </AbsoluteFill>
      )}

      {/* PARTIE 5 - FIN */}
      {frame >= 450 && (
        <AbsoluteFill style={{ alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
          <div style={{ opacity: fadeIn(frame, 450), transform: `translateY(${slideUp(frame, 450)}px)`, textAlign: "center" }}>
            <p style={{ fontSize: 72, margin: "0 0 24px" }}>🎫</p>
            <h1 style={{ fontSize: 64, fontWeight: 700, margin: "0 0 16px" }}>◈ ClarioCard</h1>
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 28, margin: "0 0 40px" }}>Carte de fidélité NFC intelligente</p>
            <div style={{ background: "white", borderRadius: 16, padding: "18px 48px", display: "inline-block" }}>
              <p style={{ color: "#000", fontSize: 22, fontWeight: 700, margin: 0 }}>app.clariocard.com</p>
            </div>
          </div>
        </AbsoluteFill>
      )}

    </AbsoluteFill>
  );
};