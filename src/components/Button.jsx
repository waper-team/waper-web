function Button() {
  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
      <button
        style={{
          backgroundColor: "#1e3a8a",
          color: "white",
          border: "none",
          padding: "10px 30px",
          borderRadius: "10px",
          fontSize: "14px",
          cursor: "pointer"
        }}
      >
        Friends
      </button>
    </div>
  )
}

export default Button