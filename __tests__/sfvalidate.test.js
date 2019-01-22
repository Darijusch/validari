import sfvalidate from '../src/sfvalidate';

describe('sfvalidate', () => {
    test('wrong data type for data', () => {
        expect(() => sfvalidate.validate()).toThrow('can only validate objects');
    });
    test('wrong data type for validator schema', () => {
        expect(() => sfvalidate.validate({})).toThrow('validator schema can only be an object');
    });

    test('validate entity', () => {
        expect(sfvalidate.validate(
            {
                test: 'value',
                foo: [
                    {
                        bar: 'baz'
                    }
                ],
                values: [1, 2, 3],
                funcTest: 'test',
                baz: 'a',
            },
            {
                'test': {
                    notBlank: true,
                },
                'foo.$.bar': {
                    notBlank: true,
                },
                'values.$': {
                    greaterThan: {
                        value: 2,
                    }
                },
                'bar': {
                    notBlank: true,
                },
                'baz': {
                    length: {
                        min: 2
                    },
                    greaterThan: {
                        value: 'test',
                    }
                },
                funcTest: () => ({
                    notBlank: true,
                    length: {
                        min: 5,
                    },
                })
            },
        )).toEqual({
            bar: ['This value should not be blank.'],
            'values.0': ['This value should be greater than 2.'],
            'values.1': ['This value should be greater than 2.'],
            funcTest: ['This value is too short. It should have 5 characters or more.'],
            'baz': ['This value is too short. It should have 2 characters or more.', 'This value should be greater than test.']
        });
    });

    test('validate entity with result is not object for validator response', () => {
        expect(sfvalidate.validate(
            {
                funcTest: 'test',
            },
            {
                funcTest: () => 'test',
            },
        )).toEqual({});
    });

    test('validate entity with non existing validator', () => {
        expect(sfvalidate.validate(
            {
                foo: 'bar',
            },
            {
                foo: {
                    notExistingValidator: true,
                }
            },
        )).toEqual({});
    });

    test('validate entity with groups', () => {
        expect(sfvalidate.validate(
            {
                test: 'value',
                foo: [
                    {
                        bar: 'baz'
                    }
                ],
                values: [1, 2, 3],
                funcTest: 'test',
                baz: 'a',
            },
            {
                'test': {
                    notBlank: true,
                    groups: ['myGroup', 'default']
                },
                'foo.$.bar': {
                    notBlank: true,
                },
                'values.$': {
                    greaterThan: {
                        value: 2,
                        groups: ['doNotValidate']
                    }
                },
                'bar': {
                    notBlank: true,
                },
                'baz': {
                    length: {
                        min: 2,
                        groups: ['myGroup'],
                    },
                    greaterThan: {
                        value: 'test',
                        groups: ['myGroup'],
                    }
                },
                funcTest: () => ({
                    notBlank: true,
                    length: {
                        min: 5,
                    },
                })
            },
            {
                groups: [
                    'default', 'myGroup',
                ]
            }
        )).toEqual({
            bar: ['This value should not be blank.'],
            funcTest: ['This value is too short. It should have 5 characters or more.'],
            'baz': ['This value is too short. It should have 2 characters or more.', 'This value should be greater than test.']
        });
    });
});

