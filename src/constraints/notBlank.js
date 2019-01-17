import { formatMessage } from './../utils/format';

const notBlank = (value, { message = 'This value should not be blank.'} = {}) => {
    if ((value && typeof value === 'object' && Object.keys(value).length === 0) ||value === false || (!value && value !== 0)) {
        return formatMessage(message, {
            '{{ value }}': value,
        });
    }
};

export default notBlank;