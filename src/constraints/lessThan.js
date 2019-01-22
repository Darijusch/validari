import { formatMessage } from "./../utils/format";

const lessThan = (
    value,
    {
        value: comparedValue,
        message = "This value should be less than {{ compared_value }}."
    } = {}
) => {
    if (value >= comparedValue) {
        return formatMessage(message, {
            "{{ value }}": value,
            "{{ compared_value }}": comparedValue
        });
    }
    return undefined;
};

export default lessThan;
