import post1 from "../assets/post1.jpg"
import post2 from "../assets/post2.jpg"

function Posts() {
  return (
    <div style={{ marginTop: "30px", padding: "0 20px" }}>
      <div
        style={{
          display: "flex",
          gap: "10px",
          overflowX: "auto"
        }}
      >
        <div style={cardStyle}>
          <img src={post1} style={imgStyle} />
          <p>Fútbol de tarde...</p>
        </div>

        <div style={cardStyle}>
          <img src={post2} style={imgStyle} />
          <p>Partidito hoy ⚽🔥</p>
        </div>

        <div style={cardStyle}>
          <div style={exploreStyle}>Explore</div>
        </div>
      </div>
    </div>
  )
}

const cardStyle = {
  minWidth: "120px"
}

const imgStyle = {
  width: "100%",
  borderRadius: "10px"
}

const exploreStyle = {
  width: "120px",
  height: "120px",
  backgroundColor: "#d1d5db",
  borderRadius: "10px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
}

export default Posts