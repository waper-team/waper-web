// Subimos un nivel (../) para salir de components y entrar a assets
import exploreImg from '../assets/Cover2.png'

export default function InterestsGallery({ items }) {
  return (
    <div className="mt-4">
      {/* Contenedor con scroll horizontal */}
      <div className="flex gap-4 overflow-x-auto pb-4">
        
        {/* Renderizamos las fotos que recibimos de App.jsx */}
        {items.map((item) => (
          <div key={item.id} className="shrink-0 w-32">
            <img 
              src={item.img} 
              alt={item.title} 
              className="w-32 h-48 object-cover rounded-xl mb-2"
            />
            <p className="text-sm font-medium text-gray-700 truncate">
              {item.title}
            </p>
          </div>
        ))}

        {/* Tarjeta estática "Explore" usando tu imagen exportada */}
        <div className="shrink-0 w-32">
          <img 
            src={exploreImg} 
            alt="Explore" 
            className="w-32 h-48 object-cover rounded-xl mb-2"
          />
          <p className="text-sm font-medium text-gray-700">Explore</p>
        </div>

      </div>
    </div>
  )
}