/* Do the following in javascript:

1. Target the element with the id of nycda-title.
Change the value of the text inside the element to say "Welcome to NYCDA"
Now grab the element with id of nycda-help-message and change the text inside to "Ask people in NYCDA for help if you're struggling"

2. Target all the elements with the class of nycda-class
Log the last element from that class collection in your developer console

3. Target all the paragraph tags that exist in your document
Log the second paragraph element to your developer console*/

let firstElement = document.getElementById('nycda-title');
// firstElement.textContent = '<em>Welcome to NYCDA</em>' // change exact text == '<em>Welcome to NYCDA</em>'
// firstElement.innerText = '<em>Welcome to NYCDA</em>' // same == '<em>Welcome to NYCDA</em>'
firstElement.innerHTML = '<em>Welcome to NYCDA</em>' // change text to emfasize == Welcome to NYCDA

let secondElement = document.getElementById('nycda-help-message');
secondElement.innerHTML = 'Ask people in NYCDA for help if you are struggling'

let allElements = document.getElementsByClassName('nycda-class')[3];
console.log(allElements)
    // console.log(allElements[allElements.length - 1])

let allParag = document.getElementsByTagName('p');
console.log(allParag[1])
let redBorder = document.querySelector("input");
redBorder.style.borderColor = 'red'

/* Write JS to handle when a person clicks on element with the id of submit-button to grab the value of the input field with the the id of input-important. Make sure you type something in the input field before you run your testing!*/


let buttonSub = document.getElementById("submit-button")
let myInput = document.getElementById("input-important")

buttonSub.addEventListener("click", (event) => {
    alert(myInput.value)
})

// // if you dont link js on html page - do this:
// document.addEventListener("DOMContentLoaded", (event) => {
// // all here
// })