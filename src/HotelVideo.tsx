import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";

const fadeIn = (frame: number, start: number, duration = 20) =>
  interpolate(frame, [start, start + duration], [0, 1], { extrapolateRight: "clamp" });

const slideUp = (frame: number, start: number, duration = 20) =>
  interpolate(frame, [start, start + duration], [30, 0], { extrapolateRight: "clamp" });

const PLATFORMS = [
  { label: "Booking.com", color: "#003580" },
  { label: "Google", color: "#4285f4" },
  { label: "TripAdvisor", color: "#00aa6c" },
  { label: "Airbnb", color: "#ff5a5f" },
  { label: "Expedia", color: "#fbcc33" },
  { label: "Agoda", color: "#e2243b" },
  { label: "VRBO", color: "#1c6ea4" },
  { label: "Trip.com", color: "#1890ff" },
  { label: "MakeMyTrip", color: "#e45116" },
];

export const HotelVideo: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill style={{ background: "#0a0a0a", fontFamily: "sans-serif", color: "white" }}>

      {/* PARTIE 1 — INTRO */}
      {frame < 75 && (
        <AbsoluteFill style={{ alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
          <div style={{ opacity: fadeIn(frame, 0), transform: `translateY(${slideUp(frame, 0)}px)`, textAlign: "center" }}>
            <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 22, letterSpacing: 6, textTransform: "uppercase", margin: "0 0 16px" }}>ClarioCard</p>
            <h1 style={{ fontSize: 72, fontWeight: 700, margin: "0 0 16px", letterSpacing: "-2px" }}>Module Hôtel</h1>
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 28, margin: "0 0 24px" }}>Collectez des avis sur toutes les plateformes</p>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap", maxWidth: 700 }}>
              {PLATFORMS.map((p) => (
                <div key={p.label} style={{ background: p.color, borderRadius: 8, padding: "6px 14px", fontSize: 14, fontWeight: 600, color: "#fff", opacity: fadeIn(frame, 20) }}>
                  {p.label}
                </div>
              ))}
            </div>
          </div>
        </AbsoluteFill>
      )}

      {/* PARTIE 2 — PAGE CLIENT AU SCAN */}
      {frame >= 75 && frame < 150 && (
        <AbsoluteFill style={{ alignItems: "center", justifyContent: "center", flexDirection: "column", padding: 80 }}>
          <div style={{ opacity: fadeIn(frame, 75), transform: `translateY(${slideUp(frame, 75)}px)`, marginBottom: 40, textAlign: "center" }}>
            <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 18, letterSpacing: 4, textTransform: "uppercase", margin: "0 0 12px" }}>Le client scanne le NFC ou QR code</p>
            <h2 style={{ fontSize: 48, fontWeight: 700, margin: 0 }}>Il choisit sa plateforme en 1 tap</h2>
          </div>

          <div style={{ opacity: fadeIn(frame, 85), transform: `translateY(${slideUp(frame, 85)}px)`, background: "#fff", borderRadius: 24, padding: 40, width: 420, color: "#111" }}>
            <div style={{ textAlign: "center", marginBottom: 24 }}>
              <div style={{ width: 56, height: 56, background: "#1a3a5c", borderRadius: 14, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 12px", fontSize: 24, color: "#fff" }}>H</div>
              <div style={{ fontSize: 20, fontWeight: 700 }}>Hôtel Le Beaumont</div>
              <div style={{ fontSize: 14, color: "#888", marginTop: 4 }}>Merci pour votre séjour 🙏</div>
            </div>

            <div style={{ display: "flex", justifyContent: "center", gap: 6, marginBottom: 24 }}>
              {[1,2,3,4,5].map(s => (
                <span key={s} style={{ fontSize: 28, color: "#f59e0b" }}>★</span>
              ))}
            </div>

            <div style={{ fontSize: 11, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em", color: "#888", marginBottom: 10 }}>Où avez-vous réservé ?</div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 8, marginBottom: 20 }}>
              {PLATFORMS.map((p, i) => (
                <div key={p.label} style={{
                  border: i === 0 ? `2px solid ${p.color}` : "1.5px solid #e5e5e5",
                  borderRadius: 10, padding: "8px 4px 6px",
                  background: i === 0 ? `${p.color}15` : "#fff",
                  display: "flex", flexDirection: "column", alignItems: "center", gap: 4
                }}>
                  <div style={{ width: 28, height: 28, borderRadius: 7, background: p.color, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: 11, fontWeight: 700 }}>{p.label.charAt(0)}</div>
                  <span style={{ fontSize: 9, color: i === 0 ? p.color : "#666", fontWeight: i === 0 ? 600 : 400, textAlign: "center", lineHeight: 1.2 }}>{p.label}</span>
                </div>
              ))}
            </div>

            <div style={{ background: "#1a3a5c", borderRadius: 12, padding: 14, textAlign: "center", color: "#fff", fontSize: 16, fontWeight: 600 }}>
              Laisser mon avis →
            </div>
          </div>
        </AbsoluteFill>
      )}

      {/* PARTIE 3 — DASHBOARD STARTER */}
      {frame >= 150 && frame < 225 && (
        <AbsoluteFill style={{ alignItems: "center", justifyContent: "center", flexDirection: "column", padding: 60 }}>
          <div style={{ opacity: fadeIn(frame, 150), transform: `translateY(${slideUp(frame, 150)}px)`, marginBottom: 32, textAlign: "center" }}>
            <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 18, letterSpacing: 4, textTransform: "uppercase", margin: "0 0 8px" }}>Plan Starter — 49,99€/mois</p>
            <h2 style={{ fontSize: 48, fontWeight: 700, margin: 0 }}>1 établissement · 50 points de collecte</h2>
          </div>

          <div style={{ opacity: fadeIn(frame, 160), width: "100%", background: "#111", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 24, padding: 32 }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16, marginBottom: 24 }}>
              {[
                { label: "Scans totaux", value: "247" },
                { label: "Avis collectés", value: "183" },
                { label: "Taux conversion", value: "74%" },
                { label: "Produits actifs", value: "12" },
              ].map((m, i) => (
                <div key={m.label} style={{ background: "rgba(255,255,255,0.06)", borderRadius: 12, padding: "16px 20px", opacity: fadeIn(frame, 165 + i * 8) }}>
                  <div style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", marginBottom: 8, textTransform: "uppercase", letterSpacing: 1 }}>{m.label}</div>
                  <div style={{ fontSize: 32, fontWeight: 700 }}>{m.value}</div>
                </div>
              ))}
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              <div style={{ background: "rgba(255,255,255,0.04)", borderRadius: 14, padding: "20px 24px", opacity: fadeIn(frame, 195) }}>
                <div style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", marginBottom: 14, fontWeight: 600 }}>Avis par plateforme</div>
                {[
                  { name: "Booking.com", color: "#003580", pct: 88 },
                  { name: "Google", color: "#4285f4", pct: 72 },
                  { name: "TripAdvisor", color: "#00aa6c", pct: 50 },
                  { name: "Airbnb", color: "#ff5a5f", pct: 28 },
                ].map(p => (
                  <div key={p.name} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                    <span style={{ fontSize: 11, color: "rgba(255,255,255,0.5)", width: 90 }}>{p.name}</span>
                    <div style={{ flex: 1, height: 6, background: "rgba(255,255,255,0.08)", borderRadius: 3 }}>
                      <div style={{ height: "100%", width: `${p.pct}%`, background: p.color, borderRadius: 3 }} />
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ background: "rgba(255,255,255,0.04)", borderRadius: 14, padding: "20px 24px", opacity: fadeIn(frame, 205) }}>
                <div style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", marginBottom: 14, fontWeight: 600 }}>Produits NFC actifs</div>
                {["Réception", "Chambre 101", "Chambre 102", "Restaurant"].map((p, i) => (
                  <div key={p} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "8px 0", borderBottom: "0.5px solid rgba(255,255,255,0.06)" }}>
                    <span style={{ fontSize: 13, color: "rgba(255,255,255,0.7)" }}>{p}</span>
                    <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                      <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#1D9E75" }} />
                      <span style={{ fontSize: 11, color: "#1D9E75" }}>Actif</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AbsoluteFill>
      )}

      {/* PARTIE 4 — DASHBOARD BUSINESS */}
      {frame >= 225 && frame < 375 && (
        <AbsoluteFill style={{ alignItems: "center", justifyContent: "center", flexDirection: "column", padding: 60 }}>
          <div style={{ opacity: fadeIn(frame, 225), transform: `translateY(${slideUp(frame, 225)}px)`, marginBottom: 32, textAlign: "center" }}>
            <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 18, letterSpacing: 4, textTransform: "uppercase", margin: "0 0 8px" }}>Plan Business — 499,99€/mois</p>
            <h2 style={{ fontSize: 48, fontWeight: 700, margin: 0 }}>20 établissements · 500 points de collecte</h2>
          </div>

          <div style={{ opacity: fadeIn(frame, 235), width: "100%", background: "#111", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 24, padding: 32 }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16, marginBottom: 24 }}>
              {[
                { label: "Scans totaux", value: "4 812" },
                { label: "Avis collectés", value: "3 247" },
                { label: "Taux conversion", value: "67%" },
                { label: "Établissements", value: "12 / 20" },
              ].map((m, i) => (
                <div key={m.label} style={{ background: "rgba(255,255,255,0.06)", borderRadius: 12, padding: "16px 20px", opacity: fadeIn(frame, 240 + i * 8) }}>
                  <div style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", marginBottom: 8, textTransform: "uppercase", letterSpacing: 1 }}>{m.label}</div>
                  <div style={{ fontSize: 32, fontWeight: 700 }}>{m.value}</div>
                </div>
              ))}
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              <div style={{ background: "rgba(255,255,255,0.04)", borderRadius: 14, padding: "20px 24px", opacity: fadeIn(frame, 265) }}>
                <div style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", marginBottom: 14, fontWeight: 600 }}>Avis par plateforme — tous établissements</div>
                {PLATFORMS.slice(0, 5).map((p, i) => (
                  <div key={p.label} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                    <span style={{ fontSize: 11, color: "rgba(255,255,255,0.5)", width: 90 }}>{p.label}</span>
                    <div style={{ flex: 1, height: 6, background: "rgba(255,255,255,0.08)", borderRadius: 3 }}>
                      <div style={{ height: "100%", width: `${[88, 72, 50, 28, 14][i]}%`, background: p.color, borderRadius: 3 }} />
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ background: "rgba(255,255,255,0.04)", borderRadius: 14, padding: "20px 24px", opacity: fadeIn(frame, 275) }}>
                <div style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", marginBottom: 14, fontWeight: 600 }}>Multi-établissements</div>
                {["Hôtel Paris 8ème", "Hôtel Lyon Centre", "Resort Côte d'Azur", "Boutique Marseille"].map((e, i) => (
                  <div key={e} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "8px 0", borderBottom: "0.5px solid rgba(255,255,255,0.06)" }}>
                    <span style={{ fontSize: 13, color: "rgba(255,255,255,0.7)" }}>{e}</span>
                    <span style={{ fontSize: 12, color: "rgba(255,255,255,0.4)" }}>{[247, 198, 312, 156][i]} avis</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AbsoluteFill>
      )}

      {/* PARTIE 5 — COMPARAISON */}
      {frame >= 375 && frame < 450 && (
        <AbsoluteFill style={{ alignItems: "center", justifyContent: "center", flexDirection: "column", padding: 80 }}>
          <div style={{ opacity: fadeIn(frame, 375), transform: `translateY(${slideUp(frame, 375)}px)`, marginBottom: 40, textAlign: "center" }}>
            <h2 style={{ fontSize: 52, fontWeight: 700, margin: 0 }}>Choisissez votre formule</h2>
          </div>

          <div style={{ display: "flex", gap: 24, width: "100%", opacity: fadeIn(frame, 385) }}>
            {[
              { label: "Starter", price: "49,99€", etab: "1 établissement", points: "50 points / étab.", highlight: false },
              { label: "Pro", price: "199,99€", etab: "5 établissements", points: "100 points / étab.", highlight: true },
              { label: "Business", price: "499,99€", etab: "20 établissements", points: "500 points / étab.", highlight: false },
            ].map((plan, i) => (
              <div key={plan.label} style={{
                flex: 1, background: plan.highlight ? "white" : "#111",
                border: plan.highlight ? "none" : "1px solid rgba(255,255,255,0.1)",
                borderRadius: 24, padding: 32, color: plan.highlight ? "#111" : "white",
                opacity: fadeIn(frame, 385 + i * 10)
              }}>
                <div style={{ fontSize: 24, fontWeight: 700, marginBottom: 8 }}>{plan.label}</div>
                <div style={{ fontSize: 40, fontWeight: 700, marginBottom: 20 }}>{plan.price}<span style={{ fontSize: 16, fontWeight: 400, opacity: 0.5 }}>/mois</span></div>
                {[plan.etab, plan.points, "Produits NFC illimités", "QR codes inclus", "9 plateformes"].map(f => (
                  <div key={f} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10, fontSize: 14, opacity: 0.8 }}>
                    <span style={{ color: "#1D9E75" }}>✓</span>{f}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </AbsoluteFill>
      )}

      {/* PARTIE 6 — CTA */}
      {frame >= 450 && (
        <AbsoluteFill style={{ alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
          <div style={{ opacity: fadeIn(frame, 450), transform: `translateY(${slideUp(frame, 450)}px)`, textAlign: "center" }}>
            <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 22, letterSpacing: 6, textTransform: "uppercase", margin: "0 0 16px" }}>ClarioCard</p>
            <h1 style={{ fontSize: 64, fontWeight: 700, margin: "0 0 16px", letterSpacing: "-2px" }}>Commencez dès aujourd'hui</h1>
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 24, margin: "0 0 40px" }}>app.clariocard.com/subscribe/hotel</p>
            <div style={{ background: "white", color: "#000", padding: "18px 48px", borderRadius: 16, fontSize: 22, fontWeight: 700, display: "inline-block" }}>
              Choisir mon plan →
            </div>
          </div>
        </AbsoluteFill>
      )}

    </AbsoluteFill>
  )
}