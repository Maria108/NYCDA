/* 2 - Kardashian Quiz
Let’s build a simple quiz program, this is the perfect use of a function to take care of the repetitive task of reading from a collection of questions. First off you should build a function that takes in a question and an answer then returns 1 or 0 depending on if the person got it right. 
You can make use of the prompt  function in JavaScript to get user input. Here’s some starter code:
*/

function ask() {
    let questions = [
        "Was Kim born in 1985?",
        "Will Rob get out of jail?",
        "Does North seem happy?",
        "Kanye released 'Heartless' in 2008?",
        "Is Kim a women?"
    ]
    let answers = [
        "yes",
        "no",
        "no",
        "yes",
        "yes"
    ]
    let score = 0;
    for (let idx = 0; idx < questions.length; idx++) {
        let myQuestion = prompt(questions[idx])
        if (myQuestion === answers[idx]) {
            score++
        }
    }
    return score
}

ask()