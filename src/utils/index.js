export const isFunction = (func) => {
    return typeof func === 'function';
};

export const isObject = (obj) => {
    return obj && typeof obj === 'object';
};

export const isString = (str) => {
    return typeof str === 'string';
};

export const intersect = (first, second) => first.filter(value => second.includes(value));
export const hasIntersection = (first, second) => intersect(first, second).length > 0;

export const get = (obj, path, defaultValue = undefined) => {
    if (!isObject(obj) || !isString(path) || path.length === 0) {
        return defaultValue;
    }
    const splittedPath = path.split('.');
    const pathLength = splittedPath.length;
    let value = defaultValue;
    splittedPath.some((splittedPart, i) => {
        value = obj[splittedPart];
        if (isObject(value) && i +1 < pathLength) {
            obj = obj[splittedPart];
            return false;
        } else if (i +1 < pathLength || value === undefined) {
            value = defaultValue;
        }
        return true;
    });
    return value;
};