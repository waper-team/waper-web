export default function InterestsTags({ activeInterest, setActiveInterest }) {
  // Hardcodeamos los intereses en un array para poder renderizarlos fácil
  const interests = ['Nadar', 'Básket', 'Fútbol'];

  return (
    <div className="mt-6">
      <h3 className="text-lg font-semibold mb-4 text-center">
        Interests && Hobbies
      </h3>

      {/* Agregamos overflow-x-auto para que se pueda scrollear */}
      <div className="flex gap-2 overflow-x-auto pb-2">
        {interests.map((interest) => (
          <button
            key={interest}
            onClick={() => setActiveInterest(interest)}
            className={`shrink-0 px-4 py-1.5 rounded-full text-sm transition-colors
              ${activeInterest === interest 
                ? 'bg-white text-black border border-gray-300 shadow-sm' // Estilo activo
                : 'bg-gray-100 text-gray-500 border border-transparent'  // Estilo inactivo
              }`}
          >
            {/* Opcional: Puedes agregar emojis dinámicos aquí si quieres */}
            {interest}
          </button>
        ))}

        {/* El botón de "+" sí lleva el dashed */}
        <button className="shrink-0 w-8 h-8 flex items-center justify-center border border-dashed border-gray-400 rounded-full text-gray-500">
          +
        </button>
      </div>
    </div>
  );
}