import profilePic from "../assets/profile.jpg"

function ProfileImage() {
  return (
    // Se posiciona la imagen centrada y separada del header para darle protagonismo
    // como elemento principal de identidad del usuario dentro del perfil
    <div className="mt-[50px] flex justify-center">
      <img
        src={profilePic}
        alt="profile"
        // Se fija un tamaño uniforme para mantener consistencia entre usuarios
        // y se usa rounded-full para reforzar el patrón visual típico de perfiles
        // object-cover asegura que la imagen se adapte sin deformarse
        className="h-[150px] w-[150px] rounded-full object-cover"
      />
    </div>
  )
}

export default ProfileImage