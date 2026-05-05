import { useState } from "react";

// ─── ÍCONOS ───────────────────────────────────────────────────────────────────
// Cada ícono recibe `active` (boolean) para cambiar su color y relleno
// dependiendo de si la tab está seleccionada o no.
// Color activo: #111 (casi negro). Color inactivo: #9CA3AF (gris claro).

// Ícono de casa para la tab "Home"
const HomeIcon = ({ active }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Puerta de la casa — solo se dibuja con stroke, sin relleno propio */}
    <path
      d="M9 21V13.5C9 13.1022 9.15804 12.7206 9.43934 12.4393C9.72064 12.158 10.1022 12 10.5 12H13.5C13.8978 12 14.2794 12.158 14.5607 12.4393C14.842 12.7206 15 13.1022 15 13.5V21"
      stroke={active ? "#111" : "#9CA3AF"}
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Techo/cuerpo de la casa — cuando está activo, se rellena con negro semi-transparente */}
    <path
      d="M3 9.5L12 3L21 9.5V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9.5Z"
      stroke={active ? "#111" : "#9CA3AF"}
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill={active ? "#111" : "none"}         // relleno solo cuando está activa
      fillOpacity={active ? "0.08" : "0"}     // muy sutil: 8% de opacidad
    />
  </svg>
);

// Ícono de lupa para la tab "Search"
const SearchIcon = ({ active }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Círculo de la lupa */}
    <circle
      cx="11"
      cy="11"
      r="7"
      stroke={active ? "#111" : "#9CA3AF"}
      strokeWidth="1.8"
    />
    {/* Mango de la lupa */}
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
    {/* Burbuja de mensaje completa con cola hacia abajo-izquierda */}
    <path
      d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z"
      stroke={active ? "#111" : "#9CA3AF"}
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill={active ? "#111" : "none"}         // relleno cuando está activa
      fillOpacity={active ? "0.08" : "0"}     // igual que HomeIcon: 8% de opacidad
    />
    {/* Tres puntos dentro del globo, simulando un mensaje */}
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
    {/* Cabeza del usuario */}
    <circle
      cx="12"
      cy="8"
      r="4"
      stroke={active ? "#111" : "#9CA3AF"}
      strokeWidth="1.8"
    />
    {/* Hombros / silueta del cuerpo */}
    <path
      d="M4 20C4 17.8783 4.84285 15.8434 6.34315 14.3431C7.84344 12.8429 9.87827 12 12 12C14.1217 12 16.1566 12.8429 17.6569 14.3431C19.1571 15.8434 20 17.8783 20 20"
      stroke={active ? "#111" : "#9CA3AF"}
      strokeWidth="1.8"
      strokeLinecap="round"
    />
    {/* Relleno semi-transparente en la cabeza, solo cuando está activa */}
    {active && (
      <circle cx="12" cy="8" r="4" fill="#111" fillOpacity="0.08" stroke="none" />
    )}
  </svg>
);

// ─── CONFIGURACIÓN DE TABS ────────────────────────────────────────────────────
// Array con los datos de cada tab: id único, label visible y componente de ícono.
// Se usa para renderizar los botones dinámicamente en lugar de hardcodear cada uno.
const NAV_ITEMS = [
  { id: "home",    label: "Home",    icon: HomeIcon    },
  { id: "search",  label: "Search",  icon: SearchIcon  },
  { id: "inbox",   label: "Inbox",   icon: InboxIcon   },
  { id: "profile", label: "Profile", icon: ProfileIcon },
];


// ─── COMPONENTE PRINCIPAL ─────────────────────────────────────────────────────
// Props:
//   activeTab   → string con el id de la tab actualmente seleccionada (default: "profile")
//   onTabChange → callback que se llama cuando el usuario toca una tab, recibe el id
//   onAdd       → callback que se llama cuando el usuario toca el botón "+"
export default function Navbar({ activeTab = "profile", onTabChange, onAdd }) {
  // Estado para saber qué botón está siendo presionado en este momento.
  // Se usa para aplicar el efecto visual de "press" (escala y sombra reducida) al botón "+".
  const [pressed, setPressed] = useState(null);

  // Maneja el cambio de tab: llama al callback del padre si existe
  const handleTab = (id) => {
    onTabChange?.(id);  // optional chaining: no falla si onTabChange no se pasó
  };

  // Maneja el tap del botón "+" central: llama al callback del padre si existe
  const handleAddPress = () => {
    onAdd?.();  // optional chaining: no falla si onAdd no se pasó
  };

  // Divide NAV_ITEMS en dos mitades para dejar espacio al botón "+" en el centro.
  // leftItems  → ["home", "search"]  (índices 0 y 1)
  // rightItems → ["inbox", "profile"] (índices 2 y 3)
  const leftItems  = NAV_ITEMS.slice(0, 2);
  const rightItems = NAV_ITEMS.slice(2);

  return (
    // Barra de navegación fija en la parte inferior de la pantalla.
    // z-50 → siempre encima del contenido scrolleable.
    <nav
      className="fixed bottom-0 left-0 right-0 z-50"
      style={{
        background: "rgba(255, 255, 255, 0.92)",   // blanco con leve transparencia
        backdropFilter: "blur(20px)",               // efecto glass/frosted sobre el contenido
        WebkitBackdropFilter: "blur(20px)",         // mismo efecto para Safari/iOS
        borderTop: "1px solid rgba(0,0,0,0.06)",   // línea separadora muy sutil en la parte superior
      }}
    >
      {/* Fila principal: izquierda | centro | derecha */}
      <div className="flex items-end justify-between px-2 pt-2 pb-safe">

        {/* ── TABS IZQUIERDAS (Home y Search) ── */}
        <div className="flex flex-1 justify-around">
          {leftItems.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => handleTab(id)}
              className="flex flex-col items-center gap-1 py-1 px-3 rounded-xl transition-all duration-150 active:scale-90 select-none"
              style={{
                WebkitTapHighlightColor: "transparent", // elimina el flash azul al tocar en mobile
                minWidth: 56,                           // ancho mínimo para que el área tocable sea cómoda
              }}
            >
              {/* Renderiza el ícono correspondiente, pasando si está activo o no */}
              <Icon active={activeTab === id} />

              {/* Label de la tab debajo del ícono */}
              <span
                className="text-xs transition-all duration-150"
                style={{
                  color:      activeTab === id ? "#111111" : "#9CA3AF", // negro activo, gris inactivo
                  fontWeight: activeTab === id ? "600"     : "400",      // bold si activa, regular si no
                  fontFamily: "'SF Pro Text', -apple-system, BlinkMacSystemFont, sans-serif", // fuente nativa iOS
                  fontSize:   "10px",
                  letterSpacing: "0.01em",
                }}
              >
                {label}
              </span>
            </button>
          ))}
        </div>

        {/* ── BOTÓN "+" CENTRAL ── */}
        {/* marginBottom: 8 lo eleva un poco por encima del nivel de las tabs */}
        <div className="flex flex-col items-center" style={{ marginBottom: 8 }}>
          <button
            onClick={handleAddPress}
            // Eventos de mouse y touch para detectar el estado "presionado"
            // y aplicar el efecto visual de escala + sombra reducida
            onMouseDown={() => setPressed("add")}
            onMouseUp={()   => setPressed(null)}
            onTouchStart={() => setPressed("add")}
            onTouchEnd={()   => setPressed(null)}
            className="flex items-center justify-center transition-all duration-150 select-none"
            style={{
              width:        56,
              height:       44,
              borderRadius: 22,                    // píldora redondeada
              background:   "#0E2D5E",             // azul marino del sistema (color primario de la app)
              // Sombra más suave cuando está presionado, más pronunciada en reposo
              boxShadow: pressed === "add"
                ? "0 2px 8px rgba(0,0,0,0.18)"
                : "0 4px 16px rgba(0,0,0,0.22), 0 1px 4px rgba(0,0,0,0.12)",
              // Se achica al 93% cuando está presionado (feedback táctil)
              transform: pressed === "add" ? "scale(0.93)" : "scale(1)",
              WebkitTapHighlightColor: "transparent", // sin flash azul en mobile
            }}
            aria-label="Crear nuevo"  // accesibilidad: describe el botón para lectores de pantalla
          >
            {/* Cruz "+" dibujada como dos líneas SVG */}
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M10 4V16M4 10H16" stroke="white" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {/* ── TABS DERECHAS (Inbox y Profile) ── */}
        {/* Estructura idéntica a las tabs izquierdas */}
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

      {/* Espaciado para el "safe area" inferior en iPhones con notch/Dynamic Island.
          env(safe-area-inset-bottom) devuelve 0px en dispositivos sin notch
          y ~34px en iPhones modernos, evitando que la navbar tape el home indicator. */}
      <div style={{ height: "env(safe-area-inset-bottom, 0px)" }} />
    </nav>
  );
}