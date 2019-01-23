import length from '../../src/constraints/length';

describe('length with dataset', () => {
    test.each([
        ['', {}, undefined],
        ['test', { max: 1 }, 'This value is too long. It should have 1 character or less.'],
        ['test', { max: 2 }, 'This value is too long. It should have 2 characters or less.'],
        ['test', { max: 4 }, undefined],
        ['test', { max: 5 }, undefined],
        ['test', { min: 5 }, 'This value is too short. It should have 5 characters or more.'],
        ['test', { min: 5, max: 5 }, 'This value should have exactly 5 characters.'],
        ['test', { min: 4, max: 4 }, undefined],
        ['test', undefined, undefined],
        ['testwithlong', { min: 5, max: 5, exactMessage: 'value is 5' }, 'value is 5'],
    ])('length(%s,%o) should return %s', (value, options, expected) => {
        expect(length(value, options)).toBe(expected);
    });
});
