/* 1 - Reverse a String
Write a JavaScript function that takes in a string and reverses it. A for loop would be handy for this!*/

function reverse(str) {
    let newStr = ""
    for (i = str.length - 1; i >= 0; i--) {
        newStr += str[i]
    }
    return newStr;
}

console.log(reverse("Masha"))