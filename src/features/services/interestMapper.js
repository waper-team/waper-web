export function normalizeInterests(interests = []) {
    return interests.map((interest, index) => {
        if (typeof interest === "string") {
            return {
                id: interest,
                name: interest,
                label: interest,
            };
        }

        const name = interest.name ?? interest.label ?? interest.title ?? "";
        return {
            ...interest,
            id: interest.id ?? `${name}-${index}`,
            name,
            label: interest.label ?? name,
        };
    });
}

export function serializeInterests(interests = []) {
    return interests
        .map((interest) =>
            typeof interest === "string"
                ? interest
                : interest.name ?? interest.label ?? interest.title
        )
        .filter(Boolean);
}
