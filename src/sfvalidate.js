import * as constraints from './constraints';
import getValidationPaths from './utils/getValidationPaths';
import { GROUP_DEFAULT } from './utils/constants';
import { isFunction, isObject, hasIntersection, get } from './utils';
import { UnexpectedTypeException } from './constraints/exceptions';

const sfvalidate = {
    constraints,
    iterator: '$',
    validate: null,
};

const validate = (data, schema, options = {}, errors = {}) => {
    if (!isObject(data)) {
        throw new UnexpectedTypeException(data, 'object');
    }
    if (!isObject(schema)) {
        throw new UnexpectedTypeException(schema, 'object');
    }
    const groups = options.groups || [GROUP_DEFAULT];
    Object.keys(schema).forEach(validatePath => {
        let validators = schema[validatePath];
        const validationPaths = getValidationPaths(data, validatePath, sfvalidate.iterator);
        validationPaths.forEach(path => {
            const value = get(data, path);
            if (isFunction(validators)) {
                const returnedValidators = validators(value, path, data, schema, errors);
                if (isObject(returnedValidators)) {
                    validators = returnedValidators;
                }
            }
            Object.keys(validators).forEach(validatorName => {
                const validatorOptions = validators[validatorName];
                const validatorGroups = Array.isArray(validatorOptions.groups)
                    ? validatorOptions.groups
                    : [GROUP_DEFAULT];
                if (!hasIntersection(groups, validatorGroups)) {
                    return;
                }
                const validator = sfvalidate.constraints[validatorName];
                if (validator) {
                    const error = validator(value, validatorOptions, {
                        validate,
                        errors,
                        path,
                        data,
                        schema,
                        options,
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

sfvalidate.validate = validate;

export default sfvalidate;
