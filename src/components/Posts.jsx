import post1 from "../assets/post1.jpg"
import post2 from "../assets/post2.jpg"

function Posts() {
  return (
    <div className="mt-[30px] px-5">
      <div className="flex gap-2.5 overflow-x-auto">
        <div className="min-w-[120px]">
          <img src={post1} alt="Post de futbol por la tarde" className="w-full rounded-[10px]" />
          <p>Fútbol de tarde...</p>
        </div>

        <div className="min-w-[120px]">
          <img src={post2} alt="Post de partidito de futbol" className="w-full rounded-[10px]" />
          <p>Partidito hoy ⚽🔥</p>
        </div>

        <div className="min-w-[120px]">
          <div className="flex h-[120px] w-[120px] items-center justify-center rounded-[10px] bg-gray-300">Explore</div>
        </div>
      </div>
    </div>
  )
}

export default Posts