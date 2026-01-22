import React, { useState } from "react";
import background from "../assets/background.jpg";

export default function Choice({ text, onA, onB }) {
  // Memisahkan teks narasi dan pilihan (opsional, agar lebih rapi)
  const lines = text.split('\n');

  return (
    <div
      className="fullscreen"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex", 
        color: "#fff",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
        textAlign: "center",
        height: "100vh",
        fontFamily: "'Courier New', Courier, monospace", // Memberikan kesan teknis/CCTV
      }}
    >
      {/* Container Teks Sinopsis */}
      <div style={{
        maxWidth: "800px",
        marginBottom: "40px",
        lineHeight: "1.6",
        fontSize: "1.2rem",
        padding: "30px",
        backgroundColor: "rgba(255, 255, 255, 0.05)",
        borderRadius: "8px",
        borderLeft: "4px solid rgba(0, 150, 255, 0.4)", // Aksen merah thriller
        boxShadow: "0 10px 30px rgba(0,0,0,0.5)"
      }}>
        {lines.map((line, index) => (
          <p key={index} style={{ marginBottom: "10px" }}>{line}</p>
        ))}
      </div>

      {/* Container Button */}
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", justifyContent: "center" }}>
        <ChoiceButton onClick={onA} label="A" />
        <ChoiceButton onClick={onB} label="B" />
      </div>

      {/* Overlay Noise/Glitch sederhana */}
      <div style={{
        position: "fixed",
        top: 0, left: 0, width: "100%", height: "100%",
        pointerEvents: "none",
        opacity: 0.03,
        backgroundImage: `url('https://www.transparenttextures.com/patterns/stardust.png')`
      }} />
    </div>
  );
}

// Sub-komponen untuk tombol agar kode lebih bersih
function ChoiceButton({ onClick, label }) {
  const [hover, setHover] = React.useState(false);

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        padding: "15px 40px",
        fontSize: "1.1rem",
        fontWeight: "bold",
        cursor: "pointer",
        backgroundColor: hover ? "rgba(255, 255, 255, 0.2)" : "transparent",
        color: "#fff",
        border: hover ? "2px solid rgba(0, 150, 255, 0.4)" : "2px solid rgba(255,255,255,0.5)",
        borderRadius: "4px",
        transition: "all 0.3s ease",
        textTransform: "uppercase",
        letterSpacing: "2px",
        boxShadow: hover ? "0 0 20px rgba(0, 150, 255, 0.4)" : "none",
        transform: hover ? "translateY(-3px)" : "translateY(0)",
      }}
    >
      PILIHAN {label}
    </button>
  );
}