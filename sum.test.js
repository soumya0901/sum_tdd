const add  = require('./sum');

describe("sum", () => {
    test('empty numbers/strings with actual integer addition', () => {
        expect(add('1,"""" $2')).toBe(3);
        expect(add('1," "  ""4 2')).toBe(7);
        expect(add('1,""""4 is 2')).toBe(7);
    });
    test('adds numbers with negative integers as well in string', () => {
        expect(add('1, 2, -9, *&5')).toBe(8);        
    });
    test('adds numbers with negative integers acting as delimiters as well in string', () => {
        expect(add('1, 2, ----9, *&-5')).toBe(3);        
    });
    test('adds numbers with explicitly positive integers in string', () => {
        expect(add('1, 2, +9, *&-5')).toBe(12);        
    });
    test('adds numbers with positive integers as well even when they act as delimiter in string', () => {
        expect(add('1, 2, -9, +++10^%$ +++++++5')).toBe(18);
    });
    test('adds numbers in string', () => {
        expect(add('1, 2')).toBe(3);
    });
});