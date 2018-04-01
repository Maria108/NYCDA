class Child {
    constructor(first_name, last_name, age) {
        this.first_name = first_name
        this.last_name = last_name
        this.age = age
    }
}

class DayCare {
    constructor() {
        this.list = []
    }

    add(Child) {
        this.list.push(Child)
    }
}

let Maria = new Child("Maria", "Abash", 3)
let Ivan = new Child("Ivan", "Polka", 4)
let newDayCare = new DayCare()
newDayCare.add(Maria)
newDayCare.add(Ivan)
console.log(newDayCare.list)