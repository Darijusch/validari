import isObject from 'lodash/isObject';
import forEach from 'lodash/forEach';

const eachScalar = (value, constraints = {}, { validate, path, errors }) => {
    if (isObject(value)) {
        const arrayConstraints = {};
        forEach(value, (entry, i) => {
            arrayConstraints[i] = constraints;
        });
        validate(value, arrayConstraints, errors, path);
    }
};

export default eachScalar;