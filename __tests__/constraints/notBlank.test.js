import notBlank from '../../src/constraints/notBlank';

describe('notBlank with dataset', () => {
    test.each([
        [null, "This value should not be blank."],
        [undefined, "This value should not be blank."],
        [false, "This value should not be blank."],
        ['', "This value should not be blank."],
        [0, undefined],
        ["0", undefined],
        [[], undefined],
        [true, undefined]
    ])(
        'notBlank(%s) should return %s',
        (value, expected) => {
            expect(notBlank(value)).toBe(expected);
        }
    );
});