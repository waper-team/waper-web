function Interests() {
  return (
    <div className="mt-[30px] text-center">
      <h3>Interests & Hobbies</h3>

      <div className="mt-2.5 flex flex-wrap justify-center gap-2.5">
        <span className={chipClassName}>Nadar</span>
        <span className={chipClassName}>Básket</span>
        <span className={chipClassName}>Fútbol</span>
      </div>
    </div>
  )
}

const chipClassName = "rounded-[20px] bg-gray-200 px-[15px] py-2 text-xs"

export default Interests
