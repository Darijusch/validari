import { formatMessage } from './../utils/format';

const length = (value, {
    maxMessage = 'This value is too long. It should have {{ limit }} character or less.|This value is too long. It should have {{ limit }} characters or less.',
    minMessage = 'This value is too short. It should have {{ limit }} character or more.|This value is too short. It should have {{ limit }} characters or more.',
    exactMessage = 'This value should have exactly {{ limit }} character.|This value should have exactly {{ limit }} characters.',
    max,
    min
} = {}) => {
    if (typeof value !== 'string' || value.length === 0) {
        return;
    }
    if (max !== undefined && value.length > max) {
        return formatMessage(
            min === max ? exactMessage : maxMessage,
            {
                '{{ value }}': value,
                '{{ limit }}': max,
            },
            {
                plural: max,
            }
        );
    }
    if (min !== undefined && value.length < min) {
        return formatMessage(
            min === max ? exactMessage : minMessage,
            {
                '{{ value }}': value,
                '{{ limit }}': min,
            },
            {
                plural: min,
            }
        );
    }
};

export default length;