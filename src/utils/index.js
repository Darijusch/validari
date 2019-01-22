export const isFunction = (func) => {
    return typeof func === 'function';
};

export const isObject = (obj) => {
    return obj && typeof obj === 'object';
};

export const intersect = (first, second) => first.filter(value => second.includes(value));
export const hasIntersection = (first, second) => intersect(first, second).length > 0;