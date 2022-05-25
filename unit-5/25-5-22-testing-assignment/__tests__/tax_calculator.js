const { expect, test, describe } = require('@jest/globals');
const taxCalculator = require('../tax_calculator');

describe('Calculating tax', function () {
    test("When income is less than 250000", function () {
        expect(taxCalculator(240000)).toBe("no tax");
    });
    test("When income is greater than 250000 and less than 500000", function () {
        expect(taxCalculator(300000)).toBe("30000 rupees tax");
    });
    test("When income is greater than 500000 ans less than 1000000", function () {
        expect(taxCalculator(600000)).toBe("120000 rupees tax");
    });

    test("When income is greater than 1000000", function () {
        expect(taxCalculator(1100000)).toBe("330000 rupees tax");
    })
})