import React, { useState } from "react";
import poster from "../assets/poster.jpg";

export default function Thanks() {
  const [hover, setHover] = useState(false);

  // Fungsi untuk restart aplikasi (refresh halaman)
  const handleRestart = () => {
    window.location.reload();
  };

  return (
    <div
      className="fullscreen"
      style={{
        height: "100vh",
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.9)), url(${poster})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        color: "#fff",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        fontFamily: "'Courier New', Courier, monospace",
        padding: "20px"
      }}
    >
      {/* Efek Glitch pada Judul (Opsional) */}
      <h1 style={{
        fontSize: "2.5rem",
        letterSpacing: "5px",
        marginBottom: "10px",
        color: "#0096FF",
        textTransform: "uppercase"
      }}>
        Selesai
      </h1>

      <p style={{ fontSize: "1.2rem", opacity: 0.8, marginBottom: "40px" }}>
        Terima kasih telah menentukan pilihan Raka.
      </p>

      {/* Credit Section */}
      <div style={{
        borderTop: "1px solid rgba(255,255,255,0.2)",
        paddingTop: "20px",
        marginBottom: "50px",
        fontSize: "0.9rem",
        lineHeight: "2",
        color: "#aaa"
      }}>
        <p style={{ fontWeight: "bold", color: "#fff", marginBottom: "10px" }}>CAST & CREW</p>
        <p>Rido Gusti Ilahi | Fikriansyah | Rifki Ardiansyah</p>
        <p>Reza Putra Pratama | Muhammad Prabu</p>
      </div>

      {/* Button Main Lagi */}
      <button
        onClick={handleRestart}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{
          padding: "12px 30px",
          backgroundColor: hover ? "#fff" : "transparent",
          color: hover ? "#000" : "#fff",
          border: "2px solid #fff",
          cursor: "pointer",
          fontSize: "1rem",
          fontWeight: "bold",
          transition: "all 0.3s ease",
          textTransform: "uppercase",
          letterSpacing: "2px"
        }}
      >
        Coba Pilihan Lain
      </button>

      {/* Footer / Copyright */}
      <div style={{
        position: "absolute",
        bottom: "30px",
        left: "30px",
        fontSize: "0.7rem",
        opacity: 0.4
      }}>
        © 2026 Pilihan Dibalik Layar - Interactive Film Project
      </div>
    </div>
  );
}