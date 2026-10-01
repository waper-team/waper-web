function UserInfo({ profile } = {}) {
  const displayName = profile?.name ?? profile?.fullName ?? "El Duko";
  const username = profile?.username ?? "duki_26";
  const bio =
    profile?.bio ??
    "Conectando personas a traves de intereses reales, musica y momentos compartidos.";

  return (
    <div
      className="
        mt-5
        flex
        flex-col
        items-center
        text-center
      "
    >
      <p
        className="
          text-[14px]
          font-medium
          tracking-wide
          text-[#5c6a9a]
        "
      >
        Ingenieria en sistemas
      </p>

      <h2
        className="
          mt-1
          text-[34px]
          font-black
          leading-none
          text-[#00135c]
        "
      >
        {displayName}
      </h2>

      <p
        className="
          mt-2
          text-[15px]
          font-medium
          text-gray-400
        "
      >
        @{username}
      </p>

      <p
        className="
          mt-4
          max-w-[280px]
          text-[14px]
          leading-relaxed
          text-[#6b7280]
        "
      >
        {bio}
      </p>
    </div>
  );
}

export default UserInfo;
