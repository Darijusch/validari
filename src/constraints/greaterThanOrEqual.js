import { formatMessage } from './../utils/format';

const greaterThanOrEqual = (
    value,
    { value: comparedValue, message = 'This value should be greater than or equal to {{ compared_value }}.' } = {},
) => {
    if (comparedValue > value) {
        return formatMessage(message, {
            '{{ value }}': value,
            '{{ compared_value }}': comparedValue,
        });
    }
};

export default greaterThanOrEqual;
