const add  = require('./sum');

describe("sum", () => {
    test('adds numbers in string', () => {
        expect(add('1, 2')).toBe(3);
    });
    test('empty numbers/strings with actual integer addition', () => {
        expect(add('')).toBe(0);
        expect(add('1')).toBe(1);
        expect(add('1,"""" $2')).toBe(3);
        expect(add('1," "  ""4 2')).toBe(7);
        expect(add('1,""""4 is 2')).toBe(7);
    });
    test('adds numbers with negative integers as well in string', () => {
        expect(add('1, 2, *&5')).toBe(8);        
    });
    test('adds numbers with negative integers acting as delimiters as well in string', () => {
        expect(add('1, 2, *&')).toBe(3);        
    });
    test('adds numbers with explicitly positive integers in string', () => {
        expect(add('1, 2, +9, *&')).toBe(12);        
    });
    test('adds numbers with positive integers as well even when they act as delimiter in string', () => {
        expect(add('1, 2, , +++10^%$ +++++++5')).toBe(18);
    });
    test('adds numbers with newline chars in string', () => {
        expect(add('1\n2\n9\n5')).toBe(17);
        expect(add('1\n2, -\n9,\n +++10^%$ +++++++5')).toBe(27);
        expect(add('//;\n1;2')).toBe(3);
        expect(() => { add('-9 -8 1,2'); }).toThrow('negative numbers not allowed -9,-8');
    });
    test('adds numbers but ignores number bigger than 1000 in string', () => {
        expect(add('//1000[*][%]\n1*2%3')).toBe(1006);
        expect(add('//1002[*][%]\n1*2%3')).toBe(6);
    });

    
});