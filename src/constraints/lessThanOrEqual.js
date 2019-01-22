import { formatMessage } from "./../utils/format";

const lessThanOrEqual = (
    value,
    {
        value: comparedValue,
        message = "This value should be less than or equal to {{ compared_value }}."
    } = {}
) => {
    if (comparedValue < value) {
        return formatMessage(message, {
            "{{ value }}": value,
            "{{ compared_value }}": comparedValue
        });
    }
    return undefined;
};

export default lessThanOrEqual;
