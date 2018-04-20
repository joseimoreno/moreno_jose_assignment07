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
/*function Animal(type, breed, color, height, length) {
    this.type = type;
    this.breed = breed;
    this.color = color;
    this.height = height;
    this.length = length;
};
var myPet = new Animal();
for (var property in myPet) {
    window.console.log(property);
};*/

//Step 7
/*function Animal(animaltype, color) {
    "use strict";
    this.animaltype = animaltype;
    this.color = color;
}
Animal.prototype.speak = function () {
    if (this.animaltype === "Dog") {
        return "The" + this.color + "dog is barking!"
    } else if (this.animaltype === "Cat") {
        return "The" + this.color + "cat is meowing!";
    }
}
var myAnimal = new Animal("Dog", " black ");
window.alert(myAnimal.speak());*/


// step 8
/*8.	Now, convert all of your properties to private properties. Then, create a private method called checkType(). In this method you will check to see what the type is. If it’s dog, return dog, otherwise, return cat. Then, create a public method called speak that returns the value of the checkType() method. The console window should now display “The <animal type> has made a noise!”*/

/*
function Animal(animaltype) {
    "use strict";
    var animalType = animaltype;
    var checkType = function () {
        if (animaltype === "dog") {
            return("Dog");
        } else if (animaltype === "cat") {
            return "Cat";
        }
    };
    this.speak = function () {
        var string1 = checkType();
        window.console.log("The " + string1 + " has made a sound");
        
    };
}
var myAnimal = new Animal("dog");
myAnimal.speak();
*/

//step 9

/*
function Word(words) {
    "use strict";
    this.words = words;
}
Word.prototype.wordcount = function () {
    "use strict";
    var count = (this.words.match(/[Dd]/g)).length;
    window.console.log("there are " + count + " words matching with  the letter 'd'");
};
var user = window.prompt("Enter sentence to count the usage of the letter 'd' ");
var myWord = new Word(user);
myWord.wordcount();
*/

