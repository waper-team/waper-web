function BioField({
                      value,
                      onChange,
                      bioLength,
                  }) {
    return (
        <>
            <label className="block">
        <span
            className="
            mb-2
            block
            text-[13px]
            font-semibold
            text-[#627099]
          "
        >
          Biografia
        </span>

                <textarea
                    value={value}
                    onChange={onChange}
                    maxLength={160}
                    rows={5}
                    className="
            w-full
            resize-none
            rounded-[8px]
            border
            border-[#e2e7f2]
            bg-white
            px-4
            py-3
            text-[15px]
            font-semibold
            leading-relaxed
            text-[#00135c]
            outline-none
            transition
            focus:border-[#0037ff]
            focus:ring-4
            focus:ring-[#0037ff]/10
          "
                />
            </label>

            <p
                className="
          mt-2
          text-right
          text-[13px]
          font-semibold
          text-[#627099]
        "
            >
                {bioLength}/160
            </p>
        </>
    );
}

export default BioField;