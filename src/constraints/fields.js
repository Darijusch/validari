import isObject from 'lodash/isObject';

const fields = (value, constraints = {}, { validate, path, errors }) => {
    if (isObject(value)) {
        validate(value, constraints, errors, path);
    }
};

export default fields;