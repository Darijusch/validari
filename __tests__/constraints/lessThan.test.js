import lessThan from '../../src/constraints/lessThan';

describe('lessThan with dataset', () => {
    test.each([
        [1, { value: 2 }, undefined],
        ['22', { value: '333' }, undefined],
        [3, { value: 2 }, 'This value should be less than 2.'],
        [2, { value: 2 }, 'This value should be less than 2.'],
        ['333', { value: '22' }, 'This value should be less than 22.'],
        ['333', { value: '22', message: 'Test value {{ value }}' }, 'Test value 333'],
        ['333', undefined, undefined],
    ])(
        'lessThan(%s, %o) should return %s',
        (value, options, expected) => {
            expect(lessThan(value, options)).toBe(expected);
        }
    );
});