function Button() {
  return (
    // Se ubica el botón centrado para darle protagonismo dentro de la pantalla
    // y mantener consistencia con el flujo vertical del perfil
    <div className="mt-5 flex justify-center">
      <button
        // Se aplica un estilo llamativo (color y tamaño) para reforzar su rol como acción principal
        // y facilitar su identificación inmediata por el usuario
        className="cursor-pointer rounded-[10px] border-0 bg-blue-900 px-[30px] py-2.5 text-sm text-white"
      >
        {/* Representa la acción principal relacionada a conexiones (amigos) */}
        Friends
      </button>
    </div>
  )
}

export default Button