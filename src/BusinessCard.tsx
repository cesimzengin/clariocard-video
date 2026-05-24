import React from "react";
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";

const fadeIn = (frame: number, start: number, duration = 20) =>
  interpolate(frame, [start, start + duration], [0, 1], { extrapolateRight: "clamp" });

const slideUp = (frame: number, start: number, duration = 20) =>
  interpolate(frame, [start, start + duration], [30, 0], { extrapolateRight: "clamp" });

export const BusinessCard: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill style={{ background: "#0a0a0a", fontFamily: "sans-serif", color: "white" }}>

      {/* PARTIE 1 - TITRE */}
      {frame < 60 && (
        <AbsoluteFill style={{ alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
          <div style={{ opacity: fadeIn(frame, 0), transform: `translateY(${slideUp(frame, 0)}px)`, textAlign: "center" }}>
            <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 22, letterSpacing: 6, textTransform: "uppercase", margin: "0 0 16px" }}>ClarioCard</p>
            <div style={{ background: "linear-gradient(135deg, #667eea, #764ba2)", borderRadius: 20, padding: "16px 40px", marginBottom: 24, display: "inline-block" }}>
              <h1 style={{ fontSize: 72, fontWeight: 700, margin: 0, color: "white" }}>🪪 Carte de visite</h1>
            </div>
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 28, margin: 0 }}>Partagez tous vos contacts en 1 tap NFC</p>
          </div>
        </AbsoluteFill>
      )}

      {/* PARTIE 2 - PAGE NFC + VCARD + LANDING */}
      {frame >= 60 && frame < 200 && (
        <AbsoluteFill style={{ alignItems: "center", justifyContent: "center", flexDirection: "row", gap: 40, padding: 80 }}>

          <div style={{ opacity: fadeIn(frame, 60), flex: 1 }}>
            <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 18, letterSpacing: 4, textTransform: "uppercase", margin: "0 0 16px" }}>Fonctionnalités 1 & 2</p>
            <h2 style={{ fontSize: 48, fontWeight: 700, margin: "0 0 20px" }}>Landing page premium + bouton vCard</h2>
            {[
              "Photo de profil & bio personnalisée",
              "Nom, prénom, entreprise, fonction",
              "Site internet, email, téléphone",
              "Lien prise de RDV intégré",
              "Bouton vCard — enregistrement 1 clic",
              "Compatible iPhone & Android",
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12, opacity: fadeIn(frame, 75 + i * 12) }}>
                <div style={{ width: 24, height: 24, borderRadius: "50%", background: "linear-gradient(135deg, #667eea, #764ba2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 700 }}>✓</div>
                <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 17, margin: 0 }}>{item}</p>
              </div>
            ))}
          </div>

          {/* Mockup téléphone */}
          <div style={{ opacity: fadeIn(frame, 80), width: 280 }}>
            <div style={{ background: "#111", border: "3px solid rgba(255,255,255,0.15)", borderRadius: 40, padding: "20px" }}>
              <div style={{ background: "#1a1a2e", borderRadius: 28, padding: "24px 20px", textAlign: "center" }}>
                <div style={{ width: 80, height: 80, borderRadius: "50%", background: "linear-gradient(135deg, #667eea, #764ba2)", margin: "0 auto 12px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 36 }}>👤</div>
                <p style={{ color: "white", fontSize: 20, fontWeight: 700, margin: "0 0 4px" }}>Jean Dupont</p>
                <p style={{ color: "#667eea", fontSize: 14, margin: "0 0 2px", fontWeight: 600 }}>Directeur Commercial</p>
                <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 13, margin: "0 0 20px" }}>TechCorp France</p>
                {[
                  { icon: "🌐", text: "www.techcorp.fr" },
                  { icon: "✉️", text: "jean@techcorp.fr" },
                  { icon: "📞", text: "+33 6 12 34 56 78" },
                  { icon: "📅", text: "Prendre rendez-vous" },
                ].map((item, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10, opacity: fadeIn(frame, 100 + i * 12) }}>
                    <span style={{ fontSize: 16 }}>{item.icon}</span>
                    <span style={{ color: "rgba(255,255,255,0.6)", fontSize: 13 }}>{item.text}</span>
                  </div>
                ))}
                <div style={{ background: "linear-gradient(135deg, #667eea, #764ba2)", borderRadius: 12, padding: "12px", marginTop: 16, opacity: fadeIn(frame, 150) }}>
                  <p style={{ color: "white", fontSize: 14, fontWeight: 700, margin: 0 }}>📱 Enregistrer le contact</p>
                </div>
              </div>
            </div>
          </div>

        </AbsoluteFill>
      )}

      {/* PARTIE 3 - ANALYTICS + LEADS + DOCS */}
      {frame >= 200 && frame < 360 && (
        <AbsoluteFill style={{ alignItems: "center", justifyContent: "center", flexDirection: "column", padding: 80 }}>
          <div style={{ opacity: fadeIn(frame, 200), marginBottom: 40, textAlign: "center" }}>
            <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 18, letterSpacing: 4, textTransform: "uppercase", margin: "0 0 12px" }}>Fonctionnalités 3 & 4</p>
            <h2 style={{ fontSize: 52, fontWeight: 700, margin: 0 }}>Analytics + Leads + Documents</h2>
          </div>

          <div style={{ display: "flex", gap: 30, width: "100%", marginBottom: 24 }}>
            {[
              { label: "Scans NFC", value: Math.floor(interpolate(frame, [210, 270], [0, 523])), color: "white", icon: "📱" },
              { label: "Contacts enregistrés", value: Math.floor(interpolate(frame, [220, 270], [0, 312])), color: "#667eea", icon: "👤" },
              { label: "Leads capturés", value: Math.floor(interpolate(frame, [230, 270], [0, 89])), color: "#4ade80", icon: "📧" },
            ].map((stat, i) => (
              <div key={i} style={{
                flex: 1, background: "#111", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 20, padding: "24px", textAlign: "center",
                opacity: fadeIn(frame, 210 + i * 15)
              }}>
                <p style={{ fontSize: 32, margin: "0 0 8px" }}>{stat.icon}</p>
                <p style={{ color: stat.color, fontSize: 48, fontWeight: 800, margin: "0 0 4px" }}>{stat.value}</p>
                <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 13, margin: 0, textTransform: "uppercase", letterSpacing: 1 }}>{stat.label}</p>
              </div>
            ))}
          </div>

          <div style={{ display: "flex", gap: 24, width: "100%" }}>

            {/* Export CSV leads */}
            <div style={{ flex: 1, background: "#111", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 20, padding: "24px", opacity: fadeIn(frame, 260) }}>
              <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 13, margin: "0 0 16px", textTransform: "uppercase", letterSpacing: 2 }}>Export CSV leads</p>
              {[
                { name: "Sophie M.", email: "s.martin@startup.fr", date: "Aujourd'hui" },
                { name: "Thomas B.", email: "t.bernard@tech.fr", date: "Hier" },
                { name: "Marie L.", email: "m.leroy@corp.fr", date: "Il y a 2j" },
              ].map((lead, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12, opacity: fadeIn(frame, 270 + i * 12) }}>
                  <div style={{ width: 36, height: 36, borderRadius: "50%", background: "linear-gradient(135deg, #667eea, #764ba2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16 }}>👤</div>
                  <div style={{ flex: 1 }}>
                    <p style={{ color: "white", fontSize: 14, fontWeight: 600, margin: "0 0 2px" }}>{lead.name}</p>
                    <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 12, margin: 0 }}>{lead.email}</p>
                  </div>
                  <p style={{ color: "rgba(255,255,255,0.3)", fontSize: 12, margin: 0 }}>{lead.date}</p>
                </div>
              ))}
              <div style={{ background: "rgba(102,126,234,0.1)", border: "1px solid rgba(102,126,234,0.3)", borderRadius: 10, padding: "10px", textAlign: "center", marginTop: 8, opacity: fadeIn(frame, 310) }}>
                <p style={{ color: "#667eea", fontSize: 14, fontWeight: 600, margin: 0 }}>⬇️ Exporter en CSV</p>
              </div>
            </div>

            {/* Documents + Multi-profils */}
            <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 16 }}>
              <div style={{ background: "#111", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 20, padding: "24px", opacity: fadeIn(frame, 280) }}>
                <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 13, margin: "0 0 16px", textTransform: "uppercase", letterSpacing: 2 }}>Documents intégrés</p>
                {[
                  { icon: "📄", name: "CV_Jean_Dupont.pdf" },
                  { icon: "📊", name: "Présentation_TechCorp.pdf" },
                  { icon: "📋", name: "Brochure_2024.pdf" },
                ].map((doc, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10, opacity: fadeIn(frame, 290 + i * 10) }}>
                    <span style={{ fontSize: 20 }}>{doc.icon}</span>
                    <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 14, margin: 0 }}>{doc.name}</p>
                  </div>
                ))}
              </div>

              <div style={{ background: "#111", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 20, padding: "24px", opacity: fadeIn(frame, 300) }}>
                <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 13, margin: "0 0 16px", textTransform: "uppercase", letterSpacing: 2 }}>Multi-profils</p>
                {[
                  { label: "Profil Pro", active: true },
                  { label: "Profil Freelance", active: false },
                  { label: "Profil Perso", active: false },
                ].map((profil, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10, opacity: fadeIn(frame, 310 + i * 10) }}>
                    <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 14, margin: 0 }}>{profil.label}</p>
                    <div style={{ background: profil.active ? "rgba(74,222,128,0.2)" : "rgba(255,255,255,0.06)", border: `1px solid ${profil.active ? "rgba(74,222,128,0.4)" : "rgba(255,255,255,0.1)"}`, borderRadius: 8, padding: "4px 10px" }}>
                      <p style={{ color: profil.active ? "#4ade80" : "rgba(255,255,255,0.3)", fontSize: 12, fontWeight: 600, margin: 0 }}>{profil.active ? "Actif" : "Inactif"}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AbsoluteFill>
      )}

      {/* PARTIE 4 - FIN */}
      {frame >= 360 && (
        <AbsoluteFill style={{ alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
          <div style={{ opacity: fadeIn(frame, 360), transform: `translateY(${slideUp(frame, 360)}px)`, textAlign: "center" }}>
            <p style={{ fontSize: 72, margin: "0 0 24px" }}>🪪</p>
            <h1 style={{ fontSize: 64, fontWeight: 700, margin: "0 0 16px" }}>◈ ClarioCard</h1>
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 28, margin: "0 0 16px" }}>Carte de visite NFC</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 32 }}>
              {[
                "Page NFC personnalisée + bouton vCard",
                "Landing page premium",
                "Analytics avancées",
                "Capture leads + export CSV",
                "IA messages & follow-up",
                "Multi-profils",
                "Documents intégrés (PDF, CV)",
              ].map((f, i) => (
                <div key={i} style={{ opacity: fadeIn(frame, 370 + i * 10), display: "flex", alignItems: "center", gap: 10, justifyContent: "center" }}>
                  <span style={{ color: "#667eea", fontSize: 18 }}>✓</span>
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