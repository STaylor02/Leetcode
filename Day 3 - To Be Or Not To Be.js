/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) { //creates variable "expect" and creates a function val
    let toBe = function(x) { // creates another variable and function x
        if (x === val) return true; // saying if x is equal to val, then return value of true
        throw new Error ("Not Equal"); // else, throw error printing "Not Equal"
    }
    let notToBe = function(x) {
        if (x !== val) return true;
        throw new Error ("Equal");
    }
    return {toBe,notToBe}; // returns values of toBe and notToBe based on input
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */