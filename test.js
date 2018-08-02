const ASSERT = require('assert');
const CALC = require('./calc');
const multiply = CALC.multiply ;
const sum = CALC.sum;
const deduct = CALC.deduct;
const divide = CALC.divide;

describe('Multiply result', function(){
    it('should test multiplication 3 * 5', function() {
        var expected = 15;
        var actual = multiply(3, 5);
        ASSERT.equal(actual, expected);
    });
    it('should test multiplication 5 * 3', function() {
        var expected = 15;
        var actual = multiply(5, 3);
        ASSERT.equal(actual, expected);
    });
    it('should test multiplication', function() {
        var expected = -6;
        var actual = multiply(-2, 3);
        ASSERT.equal(actual, expected);
    });
});

describe('Sum result', function(){
    it('should test sum', function() {
        var expected = 8;
        var actual = sum(3, 5);
        ASSERT.equal(actual, expected);
    });
    it('should test sum', function() {
        var expected = 50;
        var actual = sum(25, 25);
        ASSERT.equal(actual, expected);
    });
    it('should test sum', function() {
        var expected = 1;
        var actual = sum(-2, 3);
        ASSERT.equal(actual, expected);
    });
});

describe('Deduct result', function(){
    it('should test deduct', function() {
        var expected = -2;
        var actual = deduct(3, 5);
        ASSERT.equal(actual, expected);
    });
    it('should test deduct', function() {
        var expected = 0;
        var actual = deduct(25, 25);
        ASSERT.equal(actual, expected);
    });
    it('should test deduct', function() {
        var expected = -5;
        var actual = deduct(-2, 3);
        ASSERT.equal(actual, expected);
    });
});

describe('Divide result', function(){
    it('should test divide', function() {
        var expected = 5;
        var actual = divide(15, 3);
        ASSERT.equal(actual, expected);
    });
    it('should test divide', function() {
        var expected = 1;
        var actual = divide(25, 25);
        ASSERT.equal(actual, expected);
    });
    it('should test divide', function() {
        var expected = 2.5;
        var actual = divide(5, 2);
        ASSERT.equal(actual, expected);
    });
});