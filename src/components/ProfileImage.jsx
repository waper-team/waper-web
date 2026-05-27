import profilePic from "../assets/profile.jpg"

function ProfileImage() {
  return (

    // Contenedor principal de la imagen de perfil
    <div
      className="
        relative
        mt-[40px]
        flex
        justify-center
      "
    >

      {/* Imagen principal */}
      <div
        className="
          relative
          rounded-full
          border-[8px]
          border-white
          shadow-xl
        "
      >

        <img
          src={profilePic}
          alt="profile"

          // Imagen principal del usuario
          className="
            h-[170px]
            w-[170px]
            rounded-full
            object-cover
          "
        />

        {/* Indicador online */}
        <div
          className="
            absolute
            bottom-2
            right-2
            flex
            h-[28px]
            w-[28px]
            items-center
            justify-center
            rounded-full
            bg-white
            shadow-md
          "
        >

          <div
            className="
              h-[16px]
              w-[16px]
              rounded-full
              bg-green-500
            "
          />

        </div>

      </div>

    </div>
  )
}

export default ProfileImage