// Hook de React que permite gestionar estado en componentes funcionales
import { useState } from "react";

// Componente funcional que recibe props desestructuradas
// El parámetro 'username' tiene un valor por defecto (@duki_26) que se usa si no se proporciona
const MeatballMenu = ({ username = "@duki_26" }) => {
  // Estado 'isOpen' controla si el menú está abierto (true) o cerrado (false)
  // 'setIsOpen' es la función para actualizar el estado
  // useState(false) inicializa el estado con valor 'false' (menú cerrado al cargar)
  const [isOpen, setIsOpen] = useState(false);

  return (
    // Contenedor principal con 'relative' para que los elementos positioned dentro se relaciones con él
    <div className="relative">

      {/* Botón hamburguesa - genera el evento onClick cuando se hace click */}
      <button
        // La función flecha cambia el estado: si isOpen es true lo pone false, y viceversa (toggle)
        // Esto permite abrir y cerrar el menú con cada click del botón
        onClick={() => setIsOpen(!isOpen)}
        // flex, flex-col: organiza los spans en columna | gap: espacio entre líneas | border-0: sin borde | bg-transparent: fondo transparente | p-2: padding
        className="flex cursor-pointer flex-col gap-[5px] border-0 bg-transparent p-2"
      >
        {/* Tres líneas que forman el icono de hamburguesa */}
        {/* Cada span es una línea horizontal del menú */}
        <span className="block w-[22px] h-[2px] bg-black" />
        <span className="block w-[22px] h-[2px] bg-black" />
        <span className="block w-[22px] h-[2px] bg-black" />
      </button>

      {/* Renderizado condicional: el menú solo aparece en el DOM si 'isOpen' es true */}
      {/* Esto es una forma de mostrar/ocultar elementos en React sin usar display: none */}
      {isOpen && (
        // Posicionamiento absoluto relativo al padre 'relative' | z-50: capa superior | shadow-lg: sombra
        <div className="absolute top-10 left-0 bg-white rounded-xl shadow-lg min-w-[180px] z-50 overflow-hidden">

          {/* Sección del nombre de usuario - visual separator entre header y opciones del menú */}
          <div className="px-4 py-3 font-semibold text-sm text-gray-800 border-b border-gray-100">
            {/* Interpolación: muestra el valor de la variable 'username' con {} */}
            {username}
          </div>

          {/* Botón de Settings - opción del menú */}
          <button
            // Al hacer click, cierra el menú (setIsOpen(false)) para mejorar UX
            onClick={() => setIsOpen(false)}
            // w-full: ancho 100% del contenedor | text-left: alinea el texto a la izquierda | hover:bg-gray-50: cambia fondo al pasar mouse
            className="w-full cursor-pointer border-0 border-b border-gray-100 bg-transparent px-4 py-3 text-left text-sm text-gray-700 hover:bg-gray-50"
          >
            ⚙️ Settings
          </button>

          {/* Botón de Notifications - otra opción del menú */}
          <button
            // Mismo patrón: cierra el menú después de hacer click en una opción
            onClick={() => setIsOpen(false)}
            // Sin border-b en este último botón porque no hay elemento debajo (se evita borde innecesario)
            className="w-full cursor-pointer border-0 bg-transparent px-4 py-3 text-left text-sm text-gray-700 hover:bg-gray-50"
          >
            🔔 Notifications
          </button>

        </div>
      )}

      {/* Overlay (capa invisible) que cubre toda la pantalla cuando el menú está abierto */}
      {/* Sirve para cerrar el menú al hacer click fuera de él (mejorar UX) */}
      {isOpen && (
        <div
          // Al hacer click en cualquier parte del overlay, cierra el menú
          onClick={() => setIsOpen(false)}
          // fixed: posición relativa a la ventana | inset-0: cubre toda la pantalla | z-40: debajo del menú (z-50) pero encima del contenido
          className="fixed inset-0 z-40"
        />
      )}

    </div>
  );
};

// Exporta el componente por defecto para que pueda ser importado en otros archivos
// named export sería: export const MeatballMenu = (...) 
export default MeatballMenu;