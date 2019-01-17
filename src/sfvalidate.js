import isObject from 'lodash/isObject';
import forEach from 'lodash/forEach';
import * as constraints from './constraints';
import get from 'lodash/get';
import getValidationPaths from './utils/getValidationPaths';

const validate = (data, schema, errors = {}) => {
    if (!isObject(data)) {
        throw 'can only validate objects';
    }
    forEach(schema, ( validators, validatePath) => {
        const validationPaths = getValidationPaths(data, validatePath, sfvalidate.iterator);
        validationPaths.forEach((path) => {
            const value = get(data, path);
            forEach(validators, (options, validatorName) => {
                const validator = sfvalidate.constraints[validatorName];
                if (validator) {
                    const error = validator(value, options, {
                        validate,
                        errors,
                        path,
                    });
                    if (error) {
                        if (!errors[path]) {
                            errors[path] = [];
                        }
                        errors[path].push(error);
                    }
                }
            });
        });
    });
    return errors;
};

const sfvalidate = {
    validate,
    constraints: {
        ...constraints,
    },
    iterator: '$',
};

export default sfvalidate;