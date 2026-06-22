import assert from "node:assert/strict";
import test from "node:test";
import {
    normalizeInterests,
    serializeInterests,
} from "../src/features/services/interestMapper.js";

test("normalizes stored strings for the UI", () => {
    assert.deepEqual(normalizeInterests(["Programación"]), [
        {
            id: "Programación",
            name: "Programación",
            label: "Programación",
        },
    ]);
});

test("serializes UI objects for Spring and Mongo", () => {
    assert.deepEqual(
        serializeInterests([
            { id: 701, name: "Programación" },
            { id: 401, label: "Running" },
        ]),
        ["Programación", "Running"],
    );
});
