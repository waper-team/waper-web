const interestIcons = {
  basket: "B",
  football: "F",
  futbol: "F",
  nadar: "N",
  swim: "N",
}

function Interests({ interests = [] }) {
  const visibleInterests = interests.map((interest) => ({
    name: interest,
    icon: interestIcons[interest.toLowerCase()] || "+",
  }))

  return (
    <div className="mt-10 w-full px-6">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-[20px] font-bold text-[#00135c]">
          Interests & Hobbies
        </h3>
      </div>

      <div className="flex flex-wrap gap-3">
        {visibleInterests.map((interest, index) => (
          <div
            key={`${interest.name}-${index}`}
            className="flex items-center gap-2 rounded-full bg-white px-5 py-3 shadow-md"
          >
            <span className="text-[16px]">{interest.icon}</span>
            <span className="text-[14px] font-semibold text-[#00135c]">
              {interest.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Interests
