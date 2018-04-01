// let car = {
//     brand: "ford",
//     wheels: 12,
//     color: "red"
// }

// class Car {
//     constuctor(brand, weels, color) {
//         this.brand = brand
//         this.weels = weels
//         this.color = color
//     }
// }


// class Wizard {
//     constuctor(universe, powers, age) {
//         this.universe = universe
//         this.powers = powers
//         this.age = age
//     }
// }

// let wizards = [
//     new Wizard("Lord of the Rings", ["Regeneration", "Magic Staff", "Fire Bolt"], 106),
//     new Wizard("fairly", ["wishes", "floating", "comedy"], 99)
// ]

// console.log(wizards)


// let videoGameLevel = {
//     levelOfDifficulty: 5,
//     isFoggy: true,
//     monstersExist: true
// }



// class Person {
//     constructor(firstName, lastName, age) {
//         this.firstName = firstName
//         this.lastName = lastName
//         this.age = age
//     }
// }

// // what code would I write to fill in the values in the html?
// let people = [
//     new Person("Martin", "Sosa", 62),
//     new Person("Yorvin", "Rosario", 82)
// ]
// console.log(people)

// // get fullName() {
// //     return `${this.firstName} ${this.lastName}`
// // }
// // }

// let orlando = new Person("Orlando", "Caraballo", 1009)

// console.log(orlando.fullName)
//     //   for(let i = 0; i < people.length; ++i) {
//     //     firstNames[i].innerText = people[i].firstName
//     //     lastNames[i].innerHTML = people[i].lastName
//     //     ages[i].innerHTML = people[i].age
//     //   }

/*Methods
Create a class Circle that stores a property radius

Create a method called calculateDiameter that multiplies the radius by two. Create a new object instance and log the calculateDiameter return value to the console.

Create a method called calculateCircumference that returns 2 times the radius multiplied by pi. (Use the special property Math.PI available in javascript)

Using dot notation change the radius property value in your object instance. Now log the return value of calculateCircumference to the console.

Change the calculateCircumference name to circumference and modify it to be a getter method.*/

class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    get calculateDiameter() {
        return this.radius * 2
    }

    get calculateCirc() {
        return this.calculateDiameter * Math.PI
    }

}

let myCircle = new Circle(5)

console.log(myCircle.calculateCirc)

// class Circle {

//     constructor(radius) {
//         this.radius = radius;
//     }

//     get calculateDiameter() {
//         return this.radius * 2;
//     }
// }

// let myCircle = new Circle(5)

// console.log(myCircle.calculateDiameter)

/*Inheritance
Create a class called Rectangle and initialize its constructor with a height and width property.

Give it a method called calculateArea that will return its width multiplied by its height
Create a class called Animal with a constructor that accepts a name parameter.

Give the class a method called speak that will return the name concatenated with the phrase " speaks" at the end
Create another class called Dog and extend it to inherit from the Animal class

Create a new dog instance and check if you can call the speak method on it

Override the speak method in the Dog class so that when a dog speaks it says the "woof!" */

class Rectangle {
    constructor(height, width) {
        this.height = height
        this.width = width
    }

    get calculateArea() {
        return this.width * this.height
    }
}

Rectangle.prototype.test = function() {
    return this.width * 2
}

let myRectangle = new Rectangle(5, 7)
console.log(myRectangle.calculateArea)
console.log("test: ", myRectangle.test())


class Animal {
    constructor(name) {
        this.name = name
    }

    get speak() {
        return this.name + " speaks" // `${this.name} speaks`
    }
}

let myAnimal = new Animal("Poppy")
console.log(myAnimal.speak)

class Dog extends Animal {
    constructor(name, color) {
        super(name)
        this.color = color
    }
    get speak() {
        return `${this.name} woof!`
    }
}

// let myAnimal = new Animal("Poppy")
let myDog = new Dog("Kitty", "red")
console.log(myDog.speak)