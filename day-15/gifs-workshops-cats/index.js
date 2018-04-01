//This comes from data.js
var gifs = window.data.data;


let myImage = document.getElementById("my-img")

let idx = 0
let newGifs = shuffle(gifs)

document.getElementById("my-btn").addEventListener("click", () => {
    if (idx < gifs.length) {
        myImage.src = newGifs[idx].images.original.url
        idx++
    } else {
        newGifs = shuffle(gifs)
        idx = 0
        myImage.src = newGifs[idx].images.original.url
    }

});


function shuffle(arr) {
    let newArr = []
    let tmp = arr.slice()
    while (tmp.length) {
        let randomIdx = Math.floor(Math.random() * tmp.length)
        newArr.push(tmp[randomIdx])
        tmp.splice(randomIdx, 1)
    }
    return newArr
}