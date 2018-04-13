/*eslint-env browser*/
//step 1 - create classes
//Named Class
/*function Cat() {
    
};*/
//Anonymous Class
/*var Dog = function() {
    
};*/
//step 2 - Instances
/*var siamese = new Cat();
var labrador = new Dog();*/
//step 3 - constructor and method
/*function Animal() {
    "use strict";
    window.console.log("The Animal has been created!");
};
var bird = new Animal();*/
//Step 4 - Accepting an argument
/*function Animal(kind) {
    "use strict";
    this.kind = kind;
    window.console.log("The " + this.kind + " has been created!");
}
var bird = new Animal("Cockatoo");*/
//Step 5 - Defining properties
/*function Animal(type, breed, color, height, length) {
    this.type = type;
    this.breed = breed;
    this.color = color;
    this.height = height;
    this.length = length;
    window.console.log("My new pet is a " + this.color + " " + this.breed + " " + this.type + " that is " + this.height + " tall and " + this.length + " long.");
};
var myPet = new Animal("dog", "Boxer Labrador mix", "tan", "22 inches", "36 inches");*/
//Step 6 - for loop
function Animal(type, breed, color, height, length) {
    this.type = type;
    this.breed = breed;
    this.color = color;
    this.height = height;
    this.length = length;
};
var myPet = new Animal();
for (var property in myPet) {
    window.console.log(property);
};