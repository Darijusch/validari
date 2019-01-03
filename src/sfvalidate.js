import isObject from 'lodash/isObject';
import forEach from 'lodash/forEach';
import * as constraints from './constraints';
import set from 'lodash/set';
import get from 'lodash/get';

const validate = (data, schema, errors = {}, path = null) => {
    if (!isObject(data)) {
        throw 'can only validate objects';
    }
    forEach(schema, ( validators, fieldName) => {
        const value = data[fieldName];
        if (isObject(validators)) {
            const currentPath = path ? `${path}.${fieldName}` : fieldName;
            forEach(validators, (options, validatorName) => {
                const validator = sfvalidate.constraints[validatorName];
                if (validator) {
                    const error = validator(value, options, {
                        validate,
                        errors,
                        path: currentPath,
                    });
                    if (error) {
                        const pathValue = get(errors, currentPath, []);
                        pathValue.push(error);
                        set(errors, currentPath, pathValue);
                    }
                }
            });
        }
    });
    return errors;
};

const sfvalidate = {
    validate,
    constraints: {
        ...constraints,
    },
};

export default sfvalidate;