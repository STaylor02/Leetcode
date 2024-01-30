/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) { //creates createCounter function which accepts init integer
    let num = init; // creates another variable that takes the value of init

    let numIncrement = function() { //creates function called numIncrement
       return ++num; // returns num + 1 then returns to prior set value
    };
    let numReset = function() {
     return num = init; // returns set num value
    };
    let numDecrement = function() {
     return --num; // returns num - 1 then returns to prior set value
    };

    return {
        increment: numIncrement, //returns value of numIncrement function based on increment value
        reset: numReset, //returns value of numReset function based on reset value
        decrement: numDecrement, //returns value of numDecrement function based on decrement value
    }
};