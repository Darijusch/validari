import { formatMessage } from '../../src/utils/format';

test('just plain text', () => {
    expect(formatMessage('this is a test message')).toBe('this is a test message');
});

test('text with replacement', () => {
    expect(formatMessage('this is a {{ test }} message', { '{{ test }}': 'test' })).toBe('this is a test message');
});

test('text with plural print singular', () => {
    expect(formatMessage('singular|plural', {}, { plural: 1 })).toBe('singular');
});

test('text with plural print plural', () => {
    expect(formatMessage('singular|plural', {}, { plural: 5 })).toBe('plural');
});