import isObject from 'lodash/isObject';
import forEach from 'lodash/forEach';

const each = (value, constraints = {}, { validate, path, errors }) => {
    if (isObject(value)) {
        forEach(value, (entry, i) => {
            validate(entry, constraints, errors, `${path}.${i}`);
        });
    }
};

export default each;