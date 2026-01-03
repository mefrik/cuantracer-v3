export default function LoginPage() {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#0e1117",
        color: "#fff",
      }}
    >
      <div
        style={{
          width: 360,
          padding: 32,
          borderRadius: 12,
          background: "#161b22",
          boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
        }}
      >
        <h2 style={{ marginBottom: 8 }}>CUANTRACER</h2>
        <p style={{ opacity: 0.6, marginBottom: 24 }}>Trading Journal Login</p>

        <button
          style={{
            width: "100%",
            padding: "12px 16px",
            borderRadius: 8,
            border: "none",
            background: "#1f6feb",
            color: "#fff",
            fontWeight: 600,
            cursor: "pointer",
          }}
        >
          Login
        </button>
      </div>
    </div>
  );
}
