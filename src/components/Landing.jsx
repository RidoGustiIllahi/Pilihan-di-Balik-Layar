import poster from "../assets/poster.jpg";

export default function Landing({ onStart }) {
  const containerStyle = {
    height: "100vh",
    backgroundImage: `url(${poster})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    alignItems: "flex-end", // Memindahkan ke bawah agar tidak menutupi wajah
    justifyContent: "center",
    paddingBottom: "80px", // Memberi ruang di bagian bawah
  };

  const buttonStyle = {
    position: "absolute",
    bottom: "25%",
    padding: "14px 40px",
    fontSize: "18px",
    fontWeight: "600",
    letterSpacing: "2px",
    textTransform: "uppercase",
    color: "#ffffff",
    // Efek Transparan Blur (Glassmorphism)
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    backdropFilter: "blur(8px)",
    border: "1px solid rgba(255, 255, 255, 0.2)",
    borderRadius: "50px", // Bentuk kapsul yang modern
    cursor: "pointer",
    transition: "all 0.3s ease",
    boxShadow: "0 0 15px rgba(0, 0, 0, 0.5)",
  };

  // Efek Hover ditangani melalui inline style sederhana atau bisa ke CSS file
  const handleMouseEnter = (e) => {
    e.target.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
    e.target.style.boxShadow = "0 0 20px rgba(0, 150, 255, 0.4)"; // Sedikit cahaya biru sesuai mood poster
    e.target.style.transform = "scale(1.05)";
  };

  const handleMouseLeave = (e) => {
    e.target.style.backgroundColor = "rgba(0, 0, 0, 0.4)";
    e.target.style.boxShadow = "0 0 15px rgba(0, 0, 0, 0.5)";
    e.target.style.transform = "scale(1)";
  };

  return (
    <div className="landing-container" style={containerStyle}>
      <button
        onClick={onStart}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={buttonStyle}
      >
        Mulai Cerita
      </button>
    </div>
  );
}