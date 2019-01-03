import sfvalidate from '../src/sfvalidate';

test('if orginal user model', () => {
    expect(true).toBeTruthy();
    expect(sfvalidate.validate(
        {
            foo: 'test',
            bar: {
            },
            foobar: [
                {
                    foo: 'bar'
                },
                {
                    foo: 'foo'
                }
            ],
            barfoo: [1, 2, 3]
        },
        {
            foo: {
                notBlank: true,
                length: {
                    min: 10
                },
                url: true,
            },
            bar: {
                fields: {
                    baz: {
                        notBlank: true,
                    }
                }
            },
            foobar: {
                each: {
                    foo: {
                        length: {
                            min: 20
                        }
                    }
                }
            },
            barfoo: {
                eachScalar: {
                    greaterThan: {
                        value: 2
                    }
                }
            }
        })
    ).toEqual({"bar": {"baz": ["This value should not be blank."]}, "barfoo": [["This value should be greater than 2."], ["This value should be greater than 2."]], "foo": ["This value is too short. It should have 10 characters or more.", "This value is not a valid URL."], "foobar": [{"foo": ["This value is too short. It should have 20 characters or more."]}, {"foo": ["This value is too short. It should have 20 characters or more."]}]});
});