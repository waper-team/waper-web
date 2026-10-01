import InterestChip from "./InterestChip.jsx";
import AddInterestButton from "./AddInterestButton.jsx";

function InterestsSection({
                              interests = [],
                              removeInterest = () => {},
                              onChooseInterests,
                          }) {
    return (
        <section
            className="
                rounded-[8px]
                border
                border-[#edf1fb]
                bg-white
                p-5
                shadow-[0_12px_30px_rgba(32,52,112,0.05)]
            "
        >
            <h2 className="text-[19px] font-black">
                Intereses y hobbies
            </h2>

            <p
                className="
                    mt-1
                    text-[14px]
                    font-medium
                    text-[#627099]
                "
            >
                Contanos qué te gusta hacer y qué te interesa.
            </p>

            <div className="mt-5">
                {interests.length > 0 && (
                    <div className="mb-4 flex flex-wrap gap-3">
                        {interests.map((interest) => (
                            <InterestChip
                                key={interest.id}
                                interest={interest}
                                removeInterest={removeInterest}
                            />
                        ))}
                    </div>
                )}

                <AddInterestButton onClick={onChooseInterests} />
            </div>
        </section>
    );
}

export default InterestsSection;
