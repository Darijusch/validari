import { formatMessage } from './../utils/format';
import { MissingOptionsException } from './exceptions';

const count = (value, {
    maxMessage = 'This collection should contain {{ limit }} element or less.|This collection should contain {{ limit }} elements or less.',
    minMessage = 'This collection should contain {{ limit }} element or more.|This collection should contain {{ limit }} elements or more.',
    exactMessage = 'This collection should contain exactly {{ limit }} element.|This collection should contain exactly {{ limit }} elements.',
    max,
    min
} = {}) => {
    if ((min === undefined || min === null) && (max === undefined || max === null)) {
        throw new MissingOptionsException('Either option "min" or "max" must be given for constraint length');
    }
    if (!value || typeof value !== 'object') {
        return;
    }

    const length = Object.keys(value).length;

    if (max !== undefined && max !== null && length > max) {
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
    if (min !== undefined && min !== null && length < min) {
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

export default count;