import { isFunction, isObject } from '../../src/utils';

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
    expect(isFunction(function() {})).toBeTruthy();
});

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
    expect(isObject(function() {})).toBeFalsy();
});
