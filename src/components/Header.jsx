function Header({ onEditProfile }) {
  return (
    <div className="mb-5 flex items-center justify-between px-5 pt-5">
      <button
        type="button"
        className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#00135c] shadow-sm"
        aria-label="Abrir menu"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <path
            d="M4 7H20M4 12H20M4 17H20"
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="2"
          />
        </svg>
      </button>

      <h2 className="m-0 text-[20px] font-bold text-[#00135c]">Perfil</h2>

      <button
        type="button"
        onClick={onEditProfile}
        className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#0037ff] shadow-sm"
        aria-label="Editar perfil"
      >
        <svg width="21" height="21" viewBox="0 0 24 24" fill="none">
          <path
            d="M16.5 3.5L20.5 7.5M4 20H8L19 9L15 5L4 16V20Z"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.9"
          />
        </svg>
      </button>
    </div>
  )
}

export default Header
