import profilePic from "../assets/profile.jpg"

function ProfileImage() {
  return (
    <div className="mt-[50px] flex justify-center">
      <img
        src={profilePic}
        alt="profile"
        className="h-[150px] w-[150px] rounded-full object-cover"
      />
    </div>
  )
}

export default ProfileImage