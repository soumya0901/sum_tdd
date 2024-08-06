const add  = require('./sum');

describe("sum", () => {
    test('empty numbers/strings with actual integer addition', () => {
        expect(add('1,"""" $2')).toBe(3);
        expect(add('1," "  ""4 2')).toBe(7);
        expect(add('1,""""4 is 2')).toBe(7);
    });
    test('adds numbers with negative integers as well in string', () => {
        expect(add('1, 2, -9, --10, 5')).toBe(8);
    });
    test('adds numbers in string', () => {
        expect(add('1, 2')).toBe(3);
    });
});