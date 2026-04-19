function Header() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "20px"
      }}
    >
      <span style={{ fontSize: "20px", cursor: "pointer" }}>☰</span>

      <h2 style={{ margin: 0 }}>Profile</h2>

      <span style={{ fontSize: "18px" }}>⚙️</span>
    </div>
  )
}

export default Header