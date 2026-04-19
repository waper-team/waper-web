function Interests() {
  return (
    <div style={{ marginTop: "30px", textAlign: "center" }}>
      <h3>Interests & Hobbies</h3>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "10px",
          marginTop: "10px",
          flexWrap: "wrap"
        }}
      >
        <span style={chipStyle}>Nadar</span>
        <span style={chipStyle}>Básket</span>
        <span style={chipStyle}>Fútbol</span>
      </div>
    </div>
  )
}

const chipStyle = {
  backgroundColor: "#e5e7eb",
  padding: "8px 15px",
  borderRadius: "20px",
  fontSize: "12px"
}

export default Interests
