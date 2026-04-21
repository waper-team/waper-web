import post1 from "../assets/post1.jpg"
import post2 from "../assets/post2.jpg"

function Posts() {
  return (
    <div className="mt-[30px] px-5 flex flex-col items-center w-full">
      
      {/* 1. justify-center: centra los items cuando caben en pantalla.
        2. w-full y max-w: evita que el carrusel se estire infinito en PC.
      */}
      <div className="flex w-full max-w-4xl gap-4 overflow-x-auto pb-4 justify-center">
        
        {/* imagen 1 */}
        <div className="flex-shrink-0 w-[140px] sm:w-[160px]">
          <div className="aspect-square w-full overflow-hidden rounded-[15px]">
            <img 
              src={post1} 
              alt="Post de futbol" 
              className="h-full w-full object-cover" 
            />
          </div>
          <p className="mt-2 text-center text-xs font-medium text-gray-600">Fútbol de tarde...</p>
        </div>

        {/* imagen 2 */}
        <div className="flex-shrink-0 w-[140px] sm:w-[160px]">
          <div className="aspect-square w-full overflow-hidden rounded-[15px]">
            <img 
              src={post2} 
              alt="Post de partidito" 
              className="h-full w-full object-cover" 
            />
          </div>
          <p className="mt-2 text-center text-xs font-medium text-gray-600">Partidito hoy ⚽🔥</p>
        </div>

        {/* Item Explore */}
        <div className="flex-shrink-0 w-[140px] sm:w-[160px]">
          <button className="flex aspect-square w-full items-center justify-center rounded-[15px] bg-[#E2E8F0] text-sm font-semibold text-gray-500 transition-colors hover:bg-gray-300">
            Explore
          </button>
          {/* Espaciador para mantener la simetría con los textos de los otros posts */}
          <div className="mt-2 h-4"></div> 
        </div>
        
      </div>
    </div>
  )
}

export default Posts