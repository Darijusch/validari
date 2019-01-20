import forEach from 'lodash/forEach';
import * as constraints from './constraints';
import get from 'lodash/get';
import getValidationPaths from './utils/getValidationPaths';
import {isFunction, isObject} from "./utils";

const validate = (data, schema, errors = {}) => {
    if (!isObject(data)) {
        throw 'can only validate objects';
    }
    if (!isObject(schema)) {
        throw 'validator schema can only be an object';
    }
    forEach(schema, ( validators, validatePath) => {
        const validationPaths = getValidationPaths(data, validatePath, sfvalidate.iterator);
        validationPaths.forEach((path) => {
            const value = get(data, path);
            if (isFunction(validators)) {
                const returnedValidators = validators(value, path, data, schema, errors);
                if (isObject(returnedValidators)) {
                    validators = returnedValidators;
                }
            }
            forEach(validators, (options, validatorName) => {
                const validator = sfvalidate.constraints[validatorName];
                if (validator) {
                    const error = validator(value, options, {
                        validate,
                        errors,
                        path,
                        data,
                        schema,
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