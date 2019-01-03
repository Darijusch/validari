import url from '../../src/constraints/url';

describe('url with dataset relative protocols false valid urls', () => {
    test.each([
        ['http://a.pl', undefined],
        ['http://www.google.com', undefined],
        ['http://www.google.com.', undefined],
        ['http://www.google.museum', undefined],
        ['https://google.com/', undefined],
        ['https://google.com:80/', undefined],
        ['http://www.example.coop/', undefined],
        ['http://www.test-example.com/', undefined],
        ['http://www.symfony.com/', undefined],
        ['http://symfony.fake/blog/', undefined],
        ['http://symfony.com/?', undefined],
        ['http://symfony.com/search?type=&q=url+validator', undefined],
        ['http://symfony.com/#', undefined],
        ['http://symfony.com/#?', undefined],
        ['http://www.symfony.com/doc/current/book/validation.html#supported-fields', undefined],
        ['http://very.long.domain.name.com/', undefined],
        ['http://localhost/', undefined],
        ['http://myhost123/', undefined],
        ['http://127.0.0.1/', undefined],
        ['http://127.0.0.1:80/', undefined],
        ['http://[::1]/', undefined],
        ['http://[::1]:80/', undefined],
        ['http://[1:2:3::4:5:6:7]/', undefined],
        ['http://sãopaulo.com/', undefined],
        ['http://xn--sopaulo-xwa.com/', undefined],
        ['http://sãopaulo.com.br/', undefined],
        ['http://xn--sopaulo-xwa.com.br/', undefined],
        ['http://пример.испытание/', undefined],
        ['http://xn--e1afmkfd.xn--80akhbyknj4f/', undefined],
        ['http://مثال.إختبار/', undefined],
        ['http://xn--mgbh0fb.xn--kgbechtv/', undefined],
        ['http://例子.测试/', undefined],
        ['http://xn--fsqu00a.xn--0zwm56d/', undefined],
        ['http://例子.測試/', undefined],
        ['http://xn--fsqu00a.xn--g6w251d/', undefined],
        ['http://例え.テスト/', undefined],
        ['http://xn--r8jz45g.xn--zckzah/', undefined],
        ['http://مثال.آزمایشی/', undefined],
        ['http://xn--mgbh0fb.xn--hgbk6aj7f53bba/', undefined],
        ['http://실례.테스트/', undefined],
        ['http://xn--9n2bp8q.xn--9t4b11yi5a/', undefined],
        ['http://العربية.idn.icann.org/', undefined],
        ['http://xn--ogb.idn.icann.org/', undefined],
        ['http://xn--e1afmkfd.xn--80akhbyknj4f.xn--e1afmkfd/', undefined],
        ['http://xn--espaa-rta.xn--ca-ol-fsay5a/', undefined],
        ['http://xn--d1abbgf6aiiy.xn--p1ai/', undefined],
        ['http://☎.com/', undefined],
        ['http://username:password@symfony.com', undefined],
        ['http://user.name:password@symfony.com', undefined],
        ['http://username:pass.word@symfony.com', undefined],
        ['http://user.name:pass.word@symfony.com', undefined],
        ['http://user-name@symfony.com', undefined],
        ['http://symfony.com?', undefined],
        ['http://symfony.com?query=1', undefined],
        ['http://symfony.com/?query=1', undefined],
        ['http://symfony.com#', undefined],
        ['http://symfony.com#fragment', undefined],
        ['http://symfony.com/#fragment', undefined],
        ['http://symfony.com/#one_more%20test', undefined],
    ])(
        'url(%s) should return %s',
        (value, expected) => {
            expect(url(value)).toBe(expected);
        }
    );
});

describe('url with dataset relative protocols false invalid urls', () => {
    test.each([
        ['/google.com', 'This value is not a valid URL.'],
        ['//goog_le.com', 'This value is not a valid URL.'],
        ['//google.com::aa', 'This value is not a valid URL.'],
        ['//google.com:aa', 'This value is not a valid URL.'],
        ['//127.0.0.1:aa/', 'This value is not a valid URL.'],
        ['//[::1', 'This value is not a valid URL.'],
        ['//hello.☎/', 'This value is not a valid URL.'],
        ['//:password@symfony.com', 'This value is not a valid URL.'],
        ['//:password@@symfony.com', 'This value is not a valid URL.'],
        ['//username:passwordsymfony.com', 'This value is not a valid URL.'],
        ['//usern@me:password@symfony.com', 'This value is not a valid URL.'],
        ['//example.com/exploit.html?<script>alert(1);</script>', 'This value is not a valid URL.'],
        ['//example.com/exploit.html?hel lo', 'This value is not a valid URL.'],
        ['//example.com/exploit.html?not_a%hex', 'This value is not a valid URL.'],
        ['//', 'This value is not a valid URL.'],
    ])(
        'url(%s) should return %s',
        (value, expected) => {
            expect(url(value)).toBe(expected);
        }
    );
});

describe('url with dataset relative protocols true valid urls', () => {
    test.each([
        ['//google.com', undefined],
        ['//symfony.fake/blog/', undefined],
        ['//symfony.com/search?type=&q=url+validator', undefined],
    ])(
        'url(%s) should return %s',
        (value, expected) => {
            expect(url(value,  { relativeProtocol: true })).toBe(expected);
        }
    );
});

describe('url with dataset relative protocols true invalid urls', () => {
    test.each([
        ['/google.com', 'This value is not a valid URL.'],
        ['//goog_le.com', 'This value is not a valid URL.'],
        ['//google.com::aa', 'This value is not a valid URL.'],
        ['//google.com:aa', 'This value is not a valid URL.'],
        ['//127.0.0.1:aa/', 'This value is not a valid URL.'],
        ['//[::1', 'This value is not a valid URL.'],
        ['//hello.☎/', 'This value is not a valid URL.'],
        ['//:password@symfony.com', 'This value is not a valid URL.'],
        ['//:password@@symfony.com', 'This value is not a valid URL.'],
        ['//username:passwordsymfony.com', 'This value is not a valid URL.'],
        ['//usern@me:password@symfony.com', 'This value is not a valid URL.'],
        ['//example.com/exploit.html?<script>alert(1);</script>', 'This value is not a valid URL.'],
        ['//example.com/exploit.html?hel lo', 'This value is not a valid URL.'],
        ['//example.com/exploit.html?not_a%hex', 'This value is not a valid URL.'],
        ['//', 'This value is not a valid URL.']
    ])(
        'url(%s) should return %s',
        (value, expected) => {
            expect(url(value,  { relativeProtocol: true })).toBe(expected);
        }
    );
});