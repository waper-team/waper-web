import { expect, test } from "vitest";
import {
    normalizeInterests,
    serializeInterests,
} from "../src/features/services/interestMapper.js";

test("normalizes stored strings for the UI", () => {
    expect(normalizeInterests(["Programaci\u00f3n"])).toEqual([
        {
            id: "Programaci\u00f3n",
            name: "Programaci\u00f3n",
            label: "Programaci\u00f3n",
        },
    ]);
});

test("serializes UI objects for Spring and Mongo", () => {
    expect(
        serializeInterests([
            { id: 701, name: "Programaci\u00f3n" },
            { id: 401, label: "Running" },
        ])
    ).toEqual(["Programaci\u00f3n", "Running"]);
});
