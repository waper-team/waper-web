import { useState } from "react";

const MeatballMenu = ({ username = "@duki_26" }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">

      {/* Botón hamburguesa */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex cursor-pointer flex-col gap-[5px] border-0 bg-transparent p-2"
      >
        <span className="block w-[22px] h-[2px] bg-black" />
        <span className="block w-[22px] h-[2px] bg-black" />
        <span className="block w-[22px] h-[2px] bg-black" />
      </button>

      {/* Menú desplegable */}
      {isOpen && (
        <div className="absolute top-10 left-0 bg-white rounded-xl shadow-lg min-w-[180px] z-50 overflow-hidden">

          {/* Username */}
          <div className="px-4 py-3 font-semibold text-sm text-gray-800 border-b border-gray-100">
            {username}
          </div>

          {/* Settings */}
          <button
            onClick={() => setIsOpen(false)}
            className="w-full cursor-pointer border-0 border-b border-gray-100 bg-transparent px-4 py-3 text-left text-sm text-gray-700 hover:bg-gray-50"
          >
            ⚙️ Settings
          </button>

          {/* Notifications */}
          <button
            onClick={() => setIsOpen(false)}
            className="w-full cursor-pointer border-0 bg-transparent px-4 py-3 text-left text-sm text-gray-700 hover:bg-gray-50"
          >
            🔔 Notifications
          </button>

        </div>
      )}

      {/* Overlay para cerrar al clickear afuera */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-40"
        />
      )}

    </div>
  );
};

export default MeatballMenu;