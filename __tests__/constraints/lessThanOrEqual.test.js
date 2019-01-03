import lessThanOrEqual from '../../src/constraints/lessThanOrEqual';

describe('lessThanOrEqual with dataset', () => {
    test.each([
        [1, { value: 2 }, undefined],
        [1, { value: 1 }, undefined],
        ['a', { value: 'a' }, undefined],
        ['a', { value: 'z' }, undefined],
        [2, { value: 1 }, 'This value should be less than or equal to 1.'],
        ['c', { value: 'b' }, 'This value should be less than or equal to b.'],
    ])(
        'lessThanOrEqual(%s, %o) should return %s',
        (value, options, expected) => {
            expect(lessThanOrEqual(value, options)).toBe(expected);
        }
    );
});