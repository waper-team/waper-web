function ProfileField({
                          label,
                          type = "text",
                          value,
                          onChange,
                      }) {
    return (
        <label className="mb-5 block">
      <span
          className="
          mb-2
          block
          text-[13px]
          font-semibold
          text-[#627099]
        "
      >
        {label}
      </span>

            <input
                type={type}
                value={value}
                onChange={onChange}
                className="
          h-14
          w-full
          rounded-[8px]
          border
          border-[#e2e7f2]
          bg-white
          px-4
          text-[15px]
          font-semibold
          text-[#00135c]
          outline-none
          transition
          focus:border-[#0037ff]
          focus:ring-4
          focus:ring-[#0037ff]/10
        "
            />
        </label>
    );
}

export default ProfileField;