function SettingsButton() {
  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}>
      <button
        style={{
          backgroundColor: "#6b7280",
          color: "white",
          border: "none",
          padding: "8px 25px",
          borderRadius: "10px",
          fontSize: "13px",
          cursor: "pointer"
        }}
      >
        Settings
      </button>
    </div>
  )
}

export default SettingsButton
