import InterestCategoryCard from "./InterestCategoryCard";

const InterestCategoryGrid = ({
                                  categories = [],
                                  selected = [],
                                  onSelect = () => {},
                              }) => {
    return (
        <div className="grid grid-cols-4 gap-3">
            {categories.map((category) => (
                <InterestCategoryCard
                    key={category.id}
                    title={category.name}
                    icon={category.icon}
                    selected={selected.includes(category.id)}
                    onClick={() => onSelect(category.id)}
                />
            ))}
        </div>
    );
};

export default InterestCategoryGrid;