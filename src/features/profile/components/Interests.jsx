function Interests({ interests: savedInterests } = {}) {
  const defaultInterests = [
    {
      name: "Nadar",
      icon: "🏊",
    },
    {
      name: "Básket",
      icon: "🏀",
    },
    {
      name: "Fútbol",
      icon: "⚽",
    },
  ];

  const interests = savedInterests?.length
    ? savedInterests.map((interest) => ({
        name: interest.name ?? interest.label ?? interest.title,
        icon: interest.icon ?? "•",
      }))
    : defaultInterests;

  return (
    <div
      className="
        mt-10
        w-full
        px-6
      "
    >
      <div
        className="
          mb-4
          flex
          items-center
          justify-between
        "
      >
        <h3
          className="
            text-[20px]
            font-bold
            text-[#00135c]
          "
        >
          Interests & Hobbies
        </h3>
      </div>

      <div
        className="
          flex
          flex-wrap
          gap-3
        "
      >
        {interests.map((interest, index) => (
          <div
            key={`${interest.name}-${index}`}
            className="
              flex
              items-center
              gap-2
              rounded-full
              bg-white
              px-5
              py-3
              shadow-md
            "
          >
            <span
              className="
                text-[16px]
              "
            >
              {interest.icon}
            </span>

            <span
              className="
                text-[14px]
                font-semibold
                text-[#00135c]
              "
            >
              {interest.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Interests;
