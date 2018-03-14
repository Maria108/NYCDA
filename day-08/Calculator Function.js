// workshop day 8
/* 1 - Calculator Function
Make a function that takes in a word, and two numbers. The supported words would be “add”, “subtract”, “multiply” & “divide”. This function should perform the appropriate calculator action on the numbers and return the answer. Your calculator function should work for all of the following examples.
var answer = calculator("add", 4, 2)
console.log(answer) // 6
answer = calculator("subtract", 4, 2)
console.log(answer) // 2
answer = calculator("divide", 4, 2)
console.log(answer) // 2
answer = calculator("multiply", 4, 2)
console.log(answer) // 8
*/

function add(num1, num2) {
    return num1 + num2
}

function substruct(num1, num2) {
    return num1 - num2
}

function divide(num1, num2) {
    return num1 / num2
}

function multiply(num1, num2) {
    return num1 * num2
}

function calculator(num1, num2, manipulation) {
    return manipulation(num1, num2)
}

console.log(calculator(6, 3, divide))