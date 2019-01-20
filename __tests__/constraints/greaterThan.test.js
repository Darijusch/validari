import greaterThan from '../../src/constraints/greaterThan';

describe('greaterThan with dataset', () => {
    test.each([
        [2, { value: 1 }, undefined],
        ['333', { value: '22' }, undefined],
        [1, { value: 2 }, 'This value should be greater than 2.'],
        [2, { value: 2 }, 'This value should be greater than 2.'],
        ['22', { value: '333' }, 'This value should be greater than 333.'],
        ['22', { value: '22' }, 'This value should be greater than 22.'],
        ['333', undefined, undefined],
        ['22', { value: '22', message: 'Test value {{ value }}' }, 'Test value 22'],
    ])(
        'greaterThan(%s, %o) should return %s',
        (value, options, expected) => {
            expect(greaterThan(value, options)).toBe(expected);
        }
    );
});