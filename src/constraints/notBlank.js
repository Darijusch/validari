import { formatMessage } from './../utils/format';
import { isObject } from '../utils';

const notBlank = (value, { message = 'This value should not be blank.'} = {}) => {
    if ((isObject(value) && Object.keys(value).length === 0) ||value === false || value === null || value === undefined || value === '') {
        return formatMessage(message, {
            '{{ value }}': value,
        });
    }
};

export default notBlank;