import count from '../../src/constraints/count';

describe('missing required values', () => {
    test('value is number', () => {
        expect(() => count(4343)).toThrow('Either option "min" or "max" must be given for constraint length');
    });
});

describe('testValid', () => {
    test.each([
        [undefined, { max: 6 }],
        [null, { max: 6 }],
        [[], { max: 6 }],
        [{}, { max: 6 }],
    ])(
        'count(%s,%o) should return undefined',
        (value, options) => {
            expect(count(value, options)).toBe(undefined);
        }
    );
});

describe('testValidValuesMax', () => {
    test.each([
        [[1], { max: 3 }],
        [[1, 2], { max: 3 }],
        [[1, 2, 3], { max: 3 }],
        [{a: 1, b: 2, c: 3}, { max: 3 }],
    ])(
        'count(%s,%o) should return undefined',
        (value, options) => {
            expect(count(value, options)).toBe(undefined);
        }
    );
});

describe('testValidValuesMin', () => {
    test.each([
        [[1, 2, 3, 4, 5], { min: 5 }],
        [[1, 2, 3, 4, 5, 6], { min: 5 }],
        [{a: 1, b: 2, c: 3, d: 4, e: 5}, { min: 5 }],
    ])(
        'count(%s,%o) should return undefined',
        (value, options) => {
            expect(count(value, options)).toBe(undefined);
        }
    );
});

describe('testValidValuesExact', () => {
    test.each([
        [[1, 2, 3, 4], { max: 4 }],
        [{a: 1, b: 2, c: 3, d: 4}, { max: 4 }],
    ])(
        'count(%s,%o) should return undefined',
        (value, options) => {
            expect(count(value, options)).toBe(undefined);
        }
    );
});

describe('testTooManyValues', () => {
    test.each([
        [[1, 2, 3, 4, 5], { max: 4 }],
        [[1, 2, 3, 4, 5, 6], { max: 4 }],
        [{a: 1, b: 2, c: 3, d: 4, e: 5}, { max: 4 }],
    ])(
        'count(%s,%o) should return error',
        (value, options) => {
            expect(count(value, options)).toBe('This collection should contain 4 elements or less.');
        }
    );
});

describe('testTooFewValues', () => {
    test.each([
        [[1], { min: 4 }],
        [[1, 2], { min: 4 }],
        [[1, 2, 3], { min: 4 }],
        [{a: 1, b: 2, c: 3}, { min: 4 }],
    ])(
        'count(%s,%o) should return error',
        (value, options) => {
            expect(count(value, options)).toBe('This collection should contain 4 elements or more.');
        }
    );
});

describe('testTooManyValuesExact', () => {
    test.each([
        [[1, 2, 3, 4, 5], { max: 4, min: 4, exactMessage: 'myMessage' }],
        [[1, 2, 3, 4, 5, 6], { max: 4, min: 4, exactMessage: 'myMessage' }],
        [{a: 1, b: 2, c: 3, d: 4, e: 5}, { max: 4, min: 4, exactMessage: 'myMessage' }],
    ])(
        'count(%s,%o) should return error',
        (value, options) => {
            expect(count(value, options)).toBe('myMessage');
        }
    );
});

describe('testTooFewValuesExact', () => {
    test.each([
        [[1], { min: 4, max: 4, exactMessage: 'myMessage' }],
        [[1, 2], { min: 4, max: 4, exactMessage: 'myMessage' }],
        [[1, 2, 3], { min: 4, max: 4, exactMessage: 'myMessage' }],
        [{a: 1, b: 2, c: 3}, { min: 4, max: 4, exactMessage: 'myMessage' }],
    ])(
        'count(%s,%o) should return error',
        (value, options) => {
            expect(count(value, options)).toBe('myMessage');
        }
    );
});
