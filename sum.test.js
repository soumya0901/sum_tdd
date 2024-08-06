const add  = require('./sum');

describe("sum", () => {
    test('adds numbers in string', () => {
        expect(add('1, 2')).toEqual(3);
    });
});