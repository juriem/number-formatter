'use strict';

var expect = require('chai').expect;
var numFormatter = require('../index');

describe('#numFormatter', function () {
    it('should convert single digits', function () {
        var result = numFormatter(1);
        expect(result).to.equal('1');
    });

    it('should convert double digits', function () {
        expect(numFormatter(12)).to.equal('12')
    });

    it('should convert triple digits', function () {
        expect(numFormatter(123)).to.equal('123');
    });

    it('should convert 4 digits', function() {
        expect(numFormatter(1234)).to.equal('1,234');
    });

    it('should convert 5 digits', function() {
        expect(numFormatter(12345)).to.equal('12,345');
    });

    it('should convert 6 digits', function() {
        expect(numFormatter(123456)).to.equal('123,456');
    });

    it('should convert 7 digits', function() {
        expect(numFormatter(1234567)).to.equal('1,234,567');
    });
});