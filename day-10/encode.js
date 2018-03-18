/**
Javascript features and functions in use: 
- FOR OF Loop:    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
- FOR IN Loop:    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in
- CHARCODEAT:     https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt
- FROMCHARCODE:   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode
- ARRAY JOIN:     https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
**/

function encode(word) {
    let result = []; //somewhere to setore the converted caracters
    for (let value of word) { //next we loop over each character in the string.
        result.push(value.charCodeAt()); //and save the charcode to the array
    }
    return result.join(':'); // and return that list of codes, separated by colons
}


function decode(hash) {
    let arr = hash.split(':'); //split the code by semicolons!
    let result = []; // agaikn somewhere to put our codes
    for (let code of arr) {
        result.push(String.fromCharCode(code)); //changke the ode back to the string character equivalent
    }
    return result.join('');
}


let message = "I'm trying to send this secret message.";
let encodedMessage = encode(message);
let decodedMessage = decode(encodedMessage);


console.log(message);
console.log(encodedMessage);
console.log(decodedMessage);