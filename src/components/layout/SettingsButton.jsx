function SettingsButton() {
  return (
    // Se ubica centrado pero con menor separación para mantenerlo cercano a la info del perfil
    // sin competir visualmente con la acción principal
    <div className="mt-2.5 flex justify-center">
      <button
        // Se usa un estilo más neutro para indicar que es una acción secundaria
        // diferenciándola del botón principal (ej: Friends)
        className="cursor-pointer rounded-[10px] border-0 bg-gray-500 px-[25px] py-2 text-[13px] text-white"
      >
        {/* Acción relacionada a configuración del usuario, no prioritaria en la pantalla */}
        Settings
      </button>
    </div>
  )
}

export default SettingsButton