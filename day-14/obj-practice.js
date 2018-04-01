/* Create a constructor function called Car. Add a drive() method to its prototype that just logs to the console. Now create an instance of Car and call drive().*/

function Car() {}
Car.prototype.drive = function() {
    console.log('drive!');
};

let bmw = new Car();
bmw.drive();