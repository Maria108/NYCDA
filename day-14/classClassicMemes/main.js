/* Create a class called Classic. This class will have two attributes and a function:
frame: a string “black-border” to denote that classical art should have a thin black border.
// art_url: a string reference to a artwork. By default this should be a placeholder picture like https://upload.wikimedia.org/wikipedia/commons/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg. This default should be overridden by anything a user passes in, like new Classic("http://simpleabstract.com/assets/images/Oil-On-Canvas-Abstract-Art.jpg") , art_url should be that url instead.
render: The function that appends the artwork to the DOM. Your task is to write this in such a way that it puts the frame around the artwork. Maybe set the class of the image tag you’re appending to to the frame type of the object.
*/

class Classic {
    constructor(art_url = "http://i0.kym-cdn.com/entries/icons/original/000/022/940/spongebobicon.jpg", frame = "black") {
        this.frame = frame
        this.art_url = art_url
    }

    render() {
        let art = document.createElement("img");
        art.setAttribute("src", this.art_url);
        document.body.appendChild(art);
        art.className = this.frame
    }

}

let newClassic = new Classic("http://simpleabstract.com/assets/images/Oil-On-Canvas-Abstract-Art.jpg")

newClassic.render()

/* Part Two - Memes
Create a new class called Meme. Meme should inherit all the properties and methods of Classic but use a different frame. If you don’t like the included red frame, feel free to use another color.
var meme1 = new Meme("http://i0.kym-cdn.com/entries/icons/original/000/022/940/spongebobicon.jpg")
meme1.render()

Tip: You can use the frame properties of your object as the class for a HTML node. This way you can apply styles from your css dynamically.
*/

class Memes extends Classic {
    constructor(art_url, frame = "red") {
        super(art_url, frame);
    }
}

let newMemes = new Memes()

newMemes.render()
newMemes.render()


/* Bonus:
Try creating another class called Gallery that stores a group of Classic or Meme objects in a list. This class has a method called .add() that accepts one parameter of type Classic or Meme. When you use the .add() method, it should add an object to the list. This class should have a method called .renderAll() that renders all objects in the list in the html document.
*/

class Gallery {
    constructor() {
        this.list = []
    }

    add(element) {
        this.list.push(element)
    }

    renderAll() {
        // for (let i=0; i<this.list.length; i++) {
        //   this.list[i].render()
        // }
        this.list.forEach((element) => {
            element.render()
        })
    }
}

let newGallery = new Gallery()
newGallery.add(newClassic)
newGallery.add(newMemes)
newGallery.renderAll()