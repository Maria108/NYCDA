// function palindrome(str) {
//     for (idx = 0; idx < str.length / 2; idx++) {
//         if (str[idx] !== str[str.length - 1 - idx]) {
//             return false
//         }
//     }
//     return true
// }

function palindrome(str) {
    let lowerCaseStr = str.toLowerCase()
    return lowerCaseStr.split('').reverse().join('') == lowerCaseStr
}


//EXAMPLE TESTS

console.log(palindrome('tacocat'));
//OUTPUT: true

console.log(palindrome('banana'));
//OUTPUT: false