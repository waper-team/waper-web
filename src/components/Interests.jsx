function Interests() {
// Componente para mostrar los intereses y hobbies del usuario en su perfil.
  return (
    // Sección de intereses personales visibles en el perfil
    <div className="mt-[30px] text-center">
      {/* Título de la categoría */}
      <h3>Interests & Hobbies</h3>

      {/* Listado de etiquetas: organiza hobbies en chips reutilizando con un estilo común */}
      <div className="mt-2.5 flex flex-wrap justify-center gap-2.5">
        <span className={chipClassName}>Nadar</span>
        <span className={chipClassName}>Básket</span>
        <span className={chipClassName}>Fútbol</span>
      </div>
    </div>
  )
}

// Estilo compartido para representar cada interés como una etiqueta visual
const chipClassName = "rounded-[20px] bg-gray-200 px-[15px] py-2 text-xs"

export default Interests
