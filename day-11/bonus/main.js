/*Bonus Challenges
On Keypress
Create an HTML page with javascript that listens for a keypress event. When the user presses a key, the text of the h1 should show the value of the key they have pressed.

Example: If the user presses J, the text inside the h1 should display J.

Validation
Create an html page with a form. The form should include inputs for a username, email, and password as well as a submit button.

In a Javascript file, write code that does the following things when clicking the submit button:

checks that the password is "12345678"
checks that the username contains at least one number
Your page should also include an h1 tag. If the information in the form is correct, have Javascript change the text in the h1 to Correct otherwise change the text to Incorrect.
*/

let inputText = document.getElementById("text")

window.addEventListener('keypress', (event) => {
    inputText.innerHTML = event.key
});

let buttonSub = document.getElementById("submit-button")
let myPassword = document.getElementById("passwordt")
let myName = document.getElementById("name")
let arr = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]

buttonSub.addEventListener("click", (event) => {
  
  if (myPassword.value === "12345678" && myName.value)  
  alert(myInput.value)
})


