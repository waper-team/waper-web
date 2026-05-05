import { useState } from "react";

// Los íconos reciben `active` para no depender del padre en estilos.
// Así cada uno decide cómo mostrarse según estado (más reutilizable y limpio).

// Ícono de casa para la tab "Home"
const HomeIcon = ({ active }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M9 21V13.5C9 13.1022 9.15804 12.7206 9.43934 12.4393C9.72064 12.158 10.1022 12 10.5 12H13.5C13.8978 12 14.2794 12.158 14.5607 12.4393C14.842 12.7206 15 13.1022 15 13.5V21"
      stroke={active ? "#111" : "#9CA3AF"}
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M3 9.5L12 3L21 9.5V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9.5Z"
      stroke={active ? "#111" : "#9CA3AF"}
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill={active ? "#111" : "none"}         // leve relleno para marcar activo sin romper estilo outline
      fillOpacity={active ? "0.08" : "0"}     
    />
  </svg>
);

// Ícono de lupa para la tab "Search"
const SearchIcon = ({ active }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Separo círculo y mango para control fino del estilo */}
    <circle
      cx="11"
      cy="11"
      r="7"
      stroke={active ? "#111" : "#9CA3AF"}
      strokeWidth="1.8"
    />
    <path
      d="M16.5 16.5L21 21"
      stroke={active ? "#111" : "#9CA3AF"}
      strokeWidth="1.8"
      strokeLinecap="round"
    />
  </svg>
);

// Ícono de globo de chat para la tab "Inbox"
const InboxIcon = ({ active }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Una sola path para la burbuja → menos ruido en el DOM */}
    <path
      d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z"
      stroke={active ? "#111" : "#9CA3AF"}
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill={active ? "#111" : "none"}         // mismo patrón de feedback que Home
      fillOpacity={active ? "0.08" : "0"}     
    />
    {/* Detalle visual para indicar "mensaje" */}
    <path
      d="M8 10H8.01M12 10H12.01M16 10H16.01"
      stroke={active ? "#111" : "#9CA3AF"}
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

// Ícono de persona para la tab "Profile"
const ProfileIcon = ({ active }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Separo cabeza y cuerpo para mantener proporciones claras */}
    <circle
      cx="12"
      cy="8"
      r="4"
      stroke={active ? "#111" : "#9CA3AF"}
      strokeWidth="1.8"
    />
    <path
      d="M4 20C4 17.8783 4.84285 15.8434 6.34315 14.3431C7.84344 12.8429 9.87827 12 12 12C14.1217 12 16.1566 12.8429 17.6569 14.3431C19.1571 15.8434 20 17.8783 20 20"
      stroke={active ? "#111" : "#9CA3AF"}
      strokeWidth="1.8"
      strokeLinecap="round"
    />
    {/* Fill solo en activo para dar un poco más de peso visual */}
    {active && (
      <circle cx="12" cy="8" r="4" fill="#111" fillOpacity="0.08" stroke="none" />
    )}
  </svg>
);

//CONFIGURACIÓN DE TABS
// Centralizar esto evita hardcodear botones y hace fácil escalar después.
const NAV_ITEMS = [
  { id: "home",    label: "Home",    icon: HomeIcon    },
  { id: "search",  label: "Search",  icon: SearchIcon  },
  { id: "inbox",   label: "Inbox",   icon: InboxIcon   },
  { id: "profile", label: "Profile", icon: ProfileIcon },
];


//COMPONENTE PRINCIPAL 
// Se deja controlado desde afuera (activeTab) para poder integrarlo con navegación real.
export default function Navbar({ activeTab = "profile", onTabChange, onAdd }) {
  // Estado solo para feedback visual del botón "+"
  const [pressed, setPressed] = useState(null);

  // optional chaining → evita romper si no pasan handlers
  const handleTab = (id) => {
    onTabChange?.(id);
  };

  const handleAddPress = () => {
    onAdd?.();
  };

  // Parto el array para poder meter el botón en el medio sin hacks raros
  const leftItems  = NAV_ITEMS.slice(0, 2);
  const rightItems = NAV_ITEMS.slice(2);

  return (
    // fixed + z alto → comportamiento tipo app mobile
    <nav
      className="fixed bottom-0 left-0 right-0 z-50"
      style={{
        background: "rgba(255, 255, 255, 0.92)",   // transparencia leve para look moderno
        backdropFilter: "blur(20px)",               // glass effect
        WebkitBackdropFilter: "blur(20px)",         
        borderTop: "1px solid rgba(0,0,0,0.06)",   // separación sutil
      }}
    >
      <div className="flex items-end justify-between px-2 pt-2 pb-safe">

        <div className="flex flex-1 justify-around">
          {leftItems.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => handleTab(id)}
              className="flex flex-col items-center gap-1 py-1 px-3 rounded-xl transition-all duration-150 active:scale-90 select-none"
              style={{
                WebkitTapHighlightColor: "transparent", // mejora UX mobile
                minWidth: 56,                           // área cómoda para tocar
              }}
            >
              <Icon active={activeTab === id} />

              <span
                className="text-xs transition-all duration-150"
                style={{
                  color:      activeTab === id ? "#111111" : "#9CA3AF",
                  fontWeight: activeTab === id ? "600"     : "400",
                  fontFamily: "'SF Pro Text', -apple-system, BlinkMacSystemFont, sans-serif",
                  fontSize:   "10px",
                  letterSpacing: "0.01em",
                }}
              >
                {label}
              </span>
            </button>
          ))}
        </div>

        {/* lo levanto un poco para que destaque como acción principal */}
        <div className="flex flex-col items-center" style={{ marginBottom: 8 }}>
          <button
            onClick={handleAddPress}
            onMouseDown={() => setPressed("add")}
            onMouseUp={()   => setPressed(null)}
            onTouchStart={() => setPressed("add")}
            onTouchEnd={()   => setPressed(null)}
            className="flex items-center justify-center transition-all duration-150 select-none"
            style={{
              width:        56,
              height:       44,
              borderRadius: 22,
              background:   "#0E2D5E",             // color primario → CTA
              boxShadow: pressed === "add"
                ? "0 2px 8px rgba(0,0,0,0.18)"
                : "0 4px 16px rgba(0,0,0,0.22), 0 1px 4px rgba(0,0,0,0.12)",
              transform: pressed === "add" ? "scale(0.93)" : "scale(1)", // feedback táctil
              WebkitTapHighlightColor: "transparent",
            }}
            aria-label="Crear nuevo"  // accesibilidad básica
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M10 4V16M4 10H16" stroke="white" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        <div className="flex flex-1 justify-around">
          {rightItems.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => handleTab(id)}
              className="flex flex-col items-center gap-1 py-1 px-3 rounded-xl transition-all duration-150 active:scale-90 select-none"
              style={{
                WebkitTapHighlightColor: "transparent",
                minWidth: 56,
              }}
            >
              <Icon active={activeTab === id} />
              <span
                className="text-xs transition-all duration-150"
                style={{
                  color:      activeTab === id ? "#111111" : "#9CA3AF",
                  fontWeight: activeTab === id ? "600"     : "400",
                  fontFamily: "'SF Pro Text', -apple-system, BlinkMacSystemFont, sans-serif",
                  fontSize:   "10px",
                  letterSpacing: "0.01em",
                }}
              >
                {label}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* evita que el notch/gesture bar tape la navbar */}
      <div style={{ height: "env(safe-area-inset-bottom, 0px)" }} />
    </nav>
  );
}
