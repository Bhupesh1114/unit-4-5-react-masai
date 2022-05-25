const {expect,test,describe } = require('@jest/globals');
const timeConversion = require('../Time_Conversion');

describe("Testing for time conversion", function () {
    test("time conversion", function () {
        expect(timeConversion(20000000)).toBe("5.56 hour")
    })
})