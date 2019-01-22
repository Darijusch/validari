import {hasIntersection, intersect, isFunction, isObject} from '../../src/utils';

describe('isFunction', () => {
    test('isFunction with undefined', () => {
        expect(isFunction()).toBeFalsy();
    });

    test('isFunction with null', () => {
        expect(isFunction(null)).toBeFalsy();
    });

    test('isFunction with string', () => {
        expect(isFunction(null)).toBeFalsy();
    });

    test('isFunction with object', () => {
        expect(isFunction({})).toBeFalsy();
    });

    test('isFunction with function', () => {
        expect(isFunction(function () {
        })).toBeTruthy();
    });
});

describe('isObject', () => {
    test('isObject with undefined', () => {
        expect(isObject()).toBeFalsy();
    });

    test('isObject with null', () => {
        expect(isObject(null)).toBeFalsy();
    });

    test('isObject with string', () => {
        expect(isObject(null)).toBeFalsy();
    });

    test('isObject with object', () => {
        expect(isObject({})).toBeTruthy();
    });

    test('isObject with function', () => {
        expect(isObject(function () {
        })).toBeFalsy();
    });
});

describe('intersect', () => {
    test('without intersection', () => {
        expect(intersect([1, 5, 7], [2, 6, 8])).toEqual([]);
    });

    test('with intersection', () => {
        expect(intersect([1, 5, 7], [6, 7, 9])).toEqual([7]);
    });

    test('with empty array', () => {
        expect(intersect([], [])).toEqual([]);
    })
});

describe('hasIntersection', () => {
    test('without intersection', () => {
        expect(hasIntersection([1, 5, 7], [2, 6, 8])).toBeFalsy();
    });

    test('with intersection', () => {
        expect(hasIntersection([1, 5, 7], [6, 7, 9])).toBeTruthy();
    });

    test('with empty array', () => {
        expect(hasIntersection([], [])).toBeFalsy();
    })
});