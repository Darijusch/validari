import notBlank from '../../src/constraints/notBlank';

describe('valid notBlank', () => {
    test.each([['foobar'], [0], [0.0], ['0'], [1234], [[1]], [{ foo: 'bar' }]])(
        'notBlank(%s) should return undefined',
        value => {
            expect(notBlank(value)).toBe(undefined);
        },
    );
});

describe('invalid notBlank', () => {
    test.each([
        [null, 'This value should not be blank.'],
        [undefined, 'This value should not be blank.'],
        [false, 'This value should not be blank.'],
        ['', 'This value should not be blank.'],
        [[], 'This value should not be blank.'],
        [{}, 'This value should not be blank.'],
    ])('notBlank(%s) should return %s', (value, expected) => {
        expect(notBlank(value)).toBe(expected);
    });
});
