import getValidationPaths from '../../src/utils/getValidationPaths';

test('getValidationPaths without iterator', () => {
    expect(getValidationPaths({}, 'test')).toEqual(['test']);
});

test('getValidationPaths with iterator and no data for path', () => {
    expect(getValidationPaths({}, 'test.$')).toEqual([]);
});

test('getValidationPaths with iterator and data for path', () => {
    expect(
        getValidationPaths(
            {
                test: [1, 2],
            },
            'test.$',
        ),
    ).toEqual(['test.0', 'test.1']);
});

test('getValidationPaths with iterator and nested object', () => {
    expect(
        getValidationPaths(
            {
                test: {
                    baz: [
                        {
                            foo: {
                                bar: 'foo',
                            },
                        },
                    ],
                },
            },
            'test.baz.$.foo.bar',
        ),
    ).toEqual(['test.baz.0.foo.bar']);
});

test('getValidationPaths with iterator and first value is null', () => {
    expect(
        getValidationPaths(
            {
                test: null,
            },
            'test.baz.$.foo.bar',
        ),
    ).toEqual([]);
});
