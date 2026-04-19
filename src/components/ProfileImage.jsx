import profilePic from "../assets/profile.jpg"

function ProfileImage() {
  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}>
      <img
        src={profilePic}
        alt="profile"
        style={{
          width: "150px",
          height: "150px",
          borderRadius: "50%",
          objectFit: "cover"
        }}
      />
    </div>
  )
}

export default ProfileImage