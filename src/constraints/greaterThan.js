import { formatMessage } from './../utils/format';

const greaterThan = (
    value,
    { value: comparedValue, message = 'This value should be greater than {{ compared_value }}.' } = {},
) => {
    if (value <= comparedValue) {
        return formatMessage(message, {
            '{{ value }}': value,
            '{{ compared_value }}': comparedValue,
        });
    }
};

export default greaterThan;
