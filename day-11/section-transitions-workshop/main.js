/*  This event listener should apply the show class to the items in a section when the user passes every 800px of the page.
 */

//let window = document.getElementsByClassName('show')
//let allElements = document.getElementsByTagName('div')
let sectionsAll = document.getElementsByTagName('section')

window.addEventListener('scroll', (event) => {
    if (window.scrollY > 200 && !sectionsAll[0].className.includes('show')) {
        sectionsAll[0].className += " show"
    }
    if (window.scrollY > 800 && !sectionsAll[1].className.includes('show')) {
        sectionsAll[1].className += " show"
    }
    if (window.scrollY > 1600 && !sectionsAll[2].className.includes('show')) {
        sectionsAll[2].className += " show"
    }
    if (window.scrollY > 2400 && !sectionsAll[3].className.includes('show')) {
        sectionsAll[3].className += " show"
    }
});