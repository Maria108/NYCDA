/* 3 - Pig Latin
Pig Latin is a game of alterations played on the English language. To create the Pig Latin form of an English word the initial consonant sound is transposed to the end of the word and an ay is affixed (Ex.: 'banana' would yield 'anana-bay'). Check out Wikipedia for more information on rules - try to get as close as possible. 
Compose a javascript function that takes in a regular sentence or paragraph and returns the Pig Latin equivalent. */


function pigLatin(str) {
    let arr = str.split(' ')
    let newStr = ''
    var vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
    for (idx = 0; idx < arr.length; idx++) {
        if (vowels.includes(arr[idx][0])) {
            newStr += arr[idx].slice(0).concat('-way ')
        } else if (vowels.includes(arr[idx][1])) {
            newStr += arr[idx].slice(1).concat('-', arr[idx][0], 'ay ')
        } else {
            newStr += arr[idx].slice(2).concat('-', arr[idx].slice(0, 2), 'ay ')
        }
    }
    return newStr
}

console.log(pigLatin('banana mama drama anna')) // anana-bay ama-may ama-dray anna-way
console.log(pigLatin('Hello my name is Masha')) // ello-Hay y-may ame-nay is-way asha-May