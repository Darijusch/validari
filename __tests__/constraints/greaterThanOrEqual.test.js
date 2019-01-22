import greaterThanOrEqual from "../../src/constraints/greaterThanOrEqual";

describe("greaterThanOrEqual with dataset", () => {
    test.each([
        [3, { value: 2 }, undefined],
        [1, { value: 1 }, undefined],
        ["a", { value: "a" }, undefined],
        ["z", { value: "a" }, undefined],
        [1, { value: 2 }, "This value should be greater than or equal to 2."],
        [
            "b",
            { value: "c" },
            "This value should be greater than or equal to c."
        ],
        ["z", undefined, undefined],
        ["b", { value: "c", message: "Test value {{ value }}" }, "Test value b"]
    ])(
        "greaterThanOrEqual(%s, %o) should return %s",
        (value, options, expected) => {
            expect(greaterThanOrEqual(value, options)).toBe(expected);
        }
    );
});
