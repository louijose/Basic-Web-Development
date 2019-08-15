/*
Data types available:
undefined, null, boolean, string, symbol, number, and object
*/
// Variables defined without var are global variables
//= =, != convert both values being compared to a common type
//= ==, !== strict equality operator does not perform a type conversion

/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable no-var */
/* eslint-disable no-unused-vars */
/* eslint-disable vars-on-top */
/* eslint-disable no-shadow */
/* eslint-disable no-redeclare */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-prototype-builtins */
/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
/* eslint-disable quote-props */
/* eslint-disable arrow-parens */
/* eslint-disable block-scoped-var */
/* eslint-disable operator-linebreak */
/* eslint-disable no-spaced-func */
/* eslint-disable no-return-asssign */
/* eslint-disable arrow-body-style */
/* eslint-disable no-return-assign */

var name = "Bob";
var len = name.length;
var alpha = name[0];
console.log(alpha);// Output = S
// Strings are immutable
var myArray = [["Dog", 1], ["Cat", 2]];
myArray.push(["Goat", 3]); // To add to the end of an array
var goat = myArray.pop(); // To remove from the end of an array
var dog = myArray.shift(); // To remove from the beginning of an array
myArray.unshift(goat); // To add to beginning of an array
function printArray() {
    console.log(myArray);// Output = [Array(2), Array(2)]
    return myArray[0];
}
var varGoat = printArray();
console.log(typeof 3);// Output = number
console.log(typeof "3");// Output = string
// Class
var myDog = {
    name: "Chop",
    feet: 4,
    tail: 1
};
myDog.bark = "Woof";
var dogFeet = "feet";
console.log(myDog[dogFeet]);// Output = 4
delete myDog.tail;
// eslint-disable-next-line no-prototype-builtins
console.log(myDog.hasOwnProperty(dogFeet));// Output = true
// Random numbers, Math.random() generates a random number between 0 and 1
var randomNumber = Math.floor(Math.random * 10);// Math.floor() to round the number down to its nearest whole number
// Random number between two numbers a and b, given a > b
let a = 30;
let b = 20;
var ranNum = Math.floor((Math.random() * (a - b + 1)) + b);
// eslint-disable-next-line
var a007 = parseInt("007");
/*
"use strict";
x = 3.14; //Throws an error because x is not declared

The var keyword lets you overwrite variable declarations without an error, using let keyword solves the issue.
let camper = "James";
let camper = "David";//Throws an error
*/
let notVar = "Solves var overwrite issues....";
// Variables declared using const keyword are read-only, objects (including arrays and functions) assigned to a variable using const are still mutable
const READ_ONLY = "Read-Only variable";
// Object.freeze function prevents data mutation
Object.freeze(myDog);
// Anonymous functions
const anonymousFunc = function () {
    let myVar = "Anonymous function";
    return myVar;
};
// Arrow functions
const arrowFunc = () => {
    let myVar = "Arrow function";
    return myVar;
};
// map(), filter(), reduce()
var testArray = [2, 3.2, -4, 5, 7.9, 6];
var initialValue = 0;
// eslint-disable-next-line
const positiveIntegerArraySquareSum = testArray.filter((num) =>  Number.isInteger(num) && num>0).map((num) => num * num).reduce((total, current) => total + current, initialValue);
// Defaut parameters
function addTwoNums(a, b = 1) {
    return a + b;
}
console.log(addTwoNums(5, 6));// Output = 11
console.log(addTwoNums(5));// Output = 6
// Rest operator for variable arguments
function addNNumbers(...args) {
    return args.reduce((a, b) => a + b, 0);
}
console.log(addNNumbers(1, 2, 3));// Output = 6
console.log(addNNumbers(1, 3, 5, 6));// Output = 15
// Spread operator to unpack arrays, it spreads the array
var testArray = [6, 89, 3, 45];
var maxTestArray = Math.max(...testArray);// Value = 89
// Math.max() expects comma-separated arguments, not an array
// Destructuring assignment to assign variables from objects
var myObj = {
    x: { a: 10, b: 100 },
    y: 11,
    z: 12
};
const { x: { a: aVal } } = myObj;
console.log(aVal);// Output = 10
// Destructuring assignment to assign variables from arrays
const [p, q,,, r, ...s] = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(p, q, r);// Output = 1 2 5
console.log(s);// Output = 6 7 8
// Destructuring assignment to pass an object as a function's parameters
var myObj = {
    x: 10,
    y: 11,
    z: 12
};
const sumXY = ({ x, y }) => myObj.x + myObj.y;
console.log(sumXY(myObj));// Output = 21
// Template literals, use ` not " or '
const details = {
    name: "Bob",
    age: 22
};
const greeting = `Hello... I am ${details.name}!!
I am ${details.age} years old.`;
console.log(greeting);
/*
Output =
Hello... I am Bob!!
I am 22 years old.
*/
/*
Write concise object literal declarations using simple fields,
const getMousePosition = (x, y) => ({ x: x, y: y });
Can be written omitting x: x, y: y as,
const getMousePosition = (x, y) => ({ x, y });
Write concise declarative functions,
const person = {
name: "Taylor",
sayHello: function() {
    return `Hello! My name is ${this.name}.`;
    }
};
Can be written omitting : function as,
const person = {
name: "Taylor",
sayHello() {
    return `Hello! My name is ${this.name}.`;
}
};
*/
// "class" syntax to define a constructor function
class Vegetable {
    // constructor(vegetableName) {
    //     this.vegetableName = vegetableName;
    // }
    get writer() {
        return this.vegetableName;
    }

    set writer(setName) {
        this.vegetableName = setName;
    }
}
const carrot = new Vegetable("Carrot");
/*
With "import" we can choose which parts of a module or file to load into a given file,
import { function } from "file_path_goes_here"
In most cases, the file path requires a ./ before it; otherwise, node will look in the node_modules directory first trying to load it as a dependency.

Export using export function to reuse a code block,
function capitalizeString(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
};
const foo = "bar";
export { capitalizeString, foo };
export const bar = "foo";//To export variables
Import everything into object object_name
import * as object_name from "file_path_goes_here";
Export fallback with export default,
export default function add(x, y) {
    return x + y;
};
Import default functions from a file, omit the {} encompassing add,
import add from "file_path_goes_here";//Import default functions from a file, omit the {} encompassing add
*/
// Regular Expressions
// Test method
var regex = /test|text/;// Regular expression to search for test or text
var regexTest = "Is test in this string..";
console.log(regex.test(regexTest));// Output = true
var regex = /TEST/i;// Ignores case
console.log(regex.test(regexTest));// Output = true
// Extract matches
var hello = "Hello, World!".match(/hello/i);// Returns ["Hello"] to variable hello
// Find more than one match
var regexTest = "Repeat, repeat, REPEAT!";
var repeat = regexTest.match(/repeat/ig);// Returns ["Repeat", "repeat", "REPEAT"]
// Match anything with wildcard period
var regexTest = "fun sun run pun nun";
var wildCardMatch = regexTest.match(/.un/g);// Returns ["fun", "sun", "run", "pun, "nun"]
// Match single characters with multiple possibilities
var regexTest = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
var regex = /[aeiou]/gi;
console.log(regexTest.match(regex));// Output = all vowels
var regex = /[^aeiou]/gi;
console.log(regexTest.match(regex));// Output = all non vowel characters
// Character set using the hyphen character
var regexTest = "Blueberry 3.141592653s are delicious.";
var regex = /[a-z0-9]/gi;
console.log(regexTest.match(regex));// Output = all alphabets and numbers
// Match characters that occur one or more times consecutively
var regexTest = "Mississippi";
var regex = /s+/g;
console.log(regexTest.match(regex));// Output = ["ss", "ss"]
// Match characters that occur zero or more times consecutively
var regexTest = "Mississippi";
var regex = /s*/g;// Returns ["ss", "ss"]
// Lazy matching
/*
A greedy match finds the longest possible part of a string that fits the regex pattern and returns it as a match, by default regular expressions are greedy, the alternative is called a lazy match, which finds the smallest possible part of the string that satisfies the regex pattern
*/
var regexTest = "titanic";
var regex = /t[a-z]*i/;
console.log(regexTest.match(regex));// Output = ["titani"]
var regex = /t[a-z]*?i/;// Lazy match
console.log(regexTest.match(regex));// Output = ["ti"]
// Matching beginning string patterns
var regexTest = "Cal and cal both like racing";
var regex = /^Cal/;
console.log(regexTest.match(regex));// Output = ["Cal"]
// Outside of a character set, the caret is used to search for patterns at the beginning of strings
// Matching ending string patterns
var regex = /racing$/;
console.log(regexTest.match(regex));// Output = ["racing"]
// [A-Za-z0-9_] : \w
// [^A-Za-z0-9] : \W
// [0-9] : \d
// [^0-9] : \D
// [ \r\t\f\n\v] : \s, whitespace, carriage return, tab, form feed, new line character
// [^ \r\t\f\n\v] : \S
// Specify upper and lower limit for matches
var regexTest = "Ohhh ohhhhhh ohh";
var regex = /[Oo]h{3,4} /g;// If just lower limit {lower_limit,}, if exact number of times then {exact_number}
console.log(regexTest.match(regex));// Output = ["Ohhh"]
// Check for all or none
let american = "color";
let british = "colour";
var regex = /colou?r/;
regex.test(american);// Returns true
regex.test(british);// Returns true
// Positive and negative look ahead
/*
A positive lookahead will look to make sure the element in the search pattern is there, but won't actually match it, on the other hand, a negative lookahead will look to make sure the element in the search pattern is not there.
*/
let qu = "qu";
let qt = "qt";
var regex = /q(?=u)/;
regex.test(qu);// Returns true
var regex = /q(?!u)/;
regex.test(qt);// Returns true
let password = "abc123";
let checkPassword = /(?=\w{3,6})(?=\D*\d)/;
checkPassword.test(password);// Returns true
// Reusing patterns using capture groups
var regexTest = "regex regex";
var regex = /(\w+)\s\1/;
regex.test(regexTest);// Returns true
console.log(regexTest.match(regex));// Output = ["regex regex", "regex"], matched string and capture group
// Use capture group to search and replace
let wrongText = "The sky is silver.";
var regex = /silver/;
var rightText = wrongText.replace(regex, "blue");
console.log(rightText);// Output = "The sky is blue."
var codeCamp = "Code Camp".replace(/(\w+)\s(\w+)/, "$2 $1");
console.log(codeCamp);// Output = "Camp Code"
// Remove white space from start and end
let helloWorld = "    Hello, World!    ";
var regex = /^\s+|\s+$/g;
helloWorld = helloWorld.replace(regex, "");// Or use helloWorld.trim()
// Debugging
// console.clear();//To clear the console
console.log("Hello Debug");// Output = Hello Debug
console.log(typeof 3, typeof "three");// Output = number string

// Data structures
// console.clear();
// eslint-disable-next-line
let _1DArray = ["one", 2, "three", true, undefined, null];
console.log(_1DArray);// Output = (6) ["one", 2, "three", true, undefined, null]
_1DArray[2] = 3;
console.log(_1DArray);// Output = (6) ["one", 2, 3, true, undefined, null]
// The push() method adds elements to the end of an array, and unshift() adds elements to the beginning
// The pop() removes an element from the end of an array, while shift() removes an element from the beginning
// The splice(start, deleteCount, ...items) removes any number of consecutive elements from anywhere in an array, also appends elements
let myDay = ["today", "was", "not", "so", "great"];
console.log(myDay);// Output = (5) ["today", "was", "not", "so", "great"]
let changeDay = myDay.splice(2, 2, "totally", "damn");
console.log(changeDay);// Output = (2) ["not", "so"]
console.log(myDay);// Output = (5) ["today", "was", "totally", "damn", "great"]
// The slice(start, stop) extracts elements
let extractDay = myDay.slice(0, 1);
console.log(extractDay);// Output = ["today"]
// Check for the presence of an element using indexOf()
console.log(myDay.indexOf("not"));// Output = -1
console.log(myDay.indexOf("damn"));// Output = 3
// every(), forEach(), map()
const greaterThan10 = (myArr) => {
    var retArr = [];
    // eslint-disable-next-line
    for (var i = 0; i < myArr.length; i++) {
        if (myArr[i] > 10) {
            retArr.push(myArr[i]);
        }
    }
    return retArr;
};
console.log(greaterThan10([2, 12, 8, 14, 80, 0, 1]));// Output = (3) [12, 14, 80]
// JavaScript objects
let myObject = {
    name: "Bob",
    age: 22,
    gender: "Male"
};
console.log(myObject.name);// Output = Bob
// eslint-disable-next-line
console.log(myObject["name"]);// Output = Bob
// Deleting object properties
delete myObject.age;
console.log(myObject);// Output = {name: "Bob", gender: "Male"}
// Checking if object has a property
// eslint-disable-next-line
console.log(myObject.hasOwnProperty("gender"));// Output = true
console.log("gender" in myObject);// Output = true
myObject.sport = "football";
// Iterate through the keys of an object
// eslint-disable-next-line
for (let _property in myObject) {
    if (_property === "name" || _property === "sport") {
        // eslint-disable-next-line
        console.log(myObject[_property]);
    }
}
// Generate an array of all keys of an object
let _keys = Object.keys(myObject);
console.log(_keys);// Output = ["name", "gender", "sport"]
// To check if a string ends with "what_you_wanna_check"
var endChecker = "This is the end";
console.log(endChecker.endsWith("nd"));// Output = true
// To join an array to form a string
let _keysString = _keys.join(" ");
console.log(_keysString);// Output = name gender sport
// Substrings
console.log(_keysString.substring(0, 4));// Output = name
// Determine whether a value is an illegal number
console.log(Number.isNaN(NaN));// Output = true
console.log(Number.isNaN("abc"));// Output = false
// eslint-disable-next-line
console.log(isNaN("abc"));// Output = true
// To sort arrays
var arrayToSort = [2, 7, 4, 3, 9, 1];
arrayToSort.sort();// arrayToSort.sort( (a, b) => a - b );
console.log(arrayToSort);// Output = [1, 2, 3, 4, 7, 9]
arrayToSort.reverse();// arrayToSort.sort( (a, b) => b - a );
console.log(arrayToSort);// Output = [9, 7, 4, 3, 2, 1]
// To find max
console.log(Math.max(...arrayToSort));// Output = 9
console.log(Math.min(...arrayToSort));// Output = 1
// Object oriented programming
const myDetails = {
    name: "Bob",
    age: 22,
    sport: "football",
    flat: "16E",
    nameAge() {
        return `I am ${name}, I am ${this.age} years old, I like ${myDetails.sport}.`;
    }
};
myDetails.car = "BMW";
console.log(myDetails);// Output = {name: "Bob", age: 22, sport: "Football", flat: "16E", car: "BMW"}
console.log(myDetails.nameAge());// Output = I am Bob, I am 22 years old, I like football.
// Constructor function
function Dog(color) {
    this.name = "Woof";
    this.color = color;
    this.legs = 4;
}
const houndDog = new Dog("Black");
console.log(houndDog);// Output = Dog {name: "Woof", color: "Black", legs: 4}
// Verify an objects constructor
console.log(houndDog instanceof Dog);// Output = true
// Prototype property
Dog.prototype.tail = 1;// The prototype is an object that is shared among ALL instances of Dog
console.log(houndDog.tail);// Output = 1
Dog.prototype = {
    constructor: Dog,
    printDogName() {
        console.log(this.name);
    },
    printDogLegs() {
        console.log(this.legs);
    }
};
// Manually setting the prototype to a new object erases the constructor property
const pug = new Dog("Brown");
// console.log(pug.constructor === Dog);//If "constructor: Dog" is not added to Dog.prototype, Output = false
pug.printDogName();// Output = Woof
pug.printDogLegs();// Output = 4
// Own properties
const ownProps = [];
const prototypeProps = [];
for (var property in houndDog) {
    if (houndDog.hasOwnProperty(property)) {
        ownProps.push(property);
    } else {
        prototypeProps.push(property);
    }
}
console.log(ownProps);// Output = ["name", "color", "legs"]
console.log(prototypeProps);// Output = ["tail"]
// Constructor property
console.log(houndDog.constructor === Dog);// Output = true
// Understand where an objects prototype comes from
console.log(Dog.prototype.isPrototypeOf(pug));// Output = true
// Prototype chain
console.log(typeof Dog.prototype);// A prototype is an object, Output = object
console.log(Object.prototype.isPrototypeOf(Dog.prototype));// Object is a supertype for all objects in JavaScript, Output = true
// Don't Repeat Yourself (DRY), creating a supertype
function CatAndMouse() {
}
CatAndMouse.prototype = {
    constructor: CatAndMouse,
    printName() {
        console.log(`I am ${this.name}.`);
    }
};
function Cat(name) {
    this.name = name;
}
Cat.prototype = {
    constructor: Cat
};
function Mouse(name) {
    this.name = name;
}
Mouse.prototype = {
    constructor: Mouse
};
// Example of inheritance, Cat from CatAndMouse
Cat.prototype = Object.create(CatAndMouse.prototype);// Setting the child's prototype to an instance of the parents prototype
Mouse.prototype = Object.create(CatAndMouse.prototype);// Setting the child's prototype to an instance of the parents prototype
let tom = new Cat("Tom");// Inherits properties of Cat
let jerry = new Mouse("Jerry");// Inherits prototypes of Mouse
tom.printName();// Output = I am Tom.
jerry.printName();// Output = I am Jerry.
console.log(tom.constructor);// Before reset, Output = ƒ CatAndMouse() {}
Cat.prototype.constructor = Cat;// Resets the inherited constructor property
console.log(tom.constructor);// After reset, Output = ƒ Cat(name) { this.name = name; }
tom.printName();// Output = I am Tom.
console.log(jerry.constructor);// Before reset, Output = ƒ CatAndMouse() {}
Mouse.prototype.constructor = Mouse;// Resets the inherited constructor property
console.log(jerry.constructor);// After reset, Output = ƒ Mouse(name) { this.name = name; }
jerry.printName();// Output = I am Jerry.
// Overriding inherited methods
Cat.prototype.printName = function () {
    console.log(`Hi, I am ${this.name}.`);
};
tom.printName();// Output = Hi, I am Tom.
// Using mixin to add common behavior between unrelated objects
let Plane = {
    name: "AirBus"
};
let Bird = {
    name: "Raven"
};
let flyMixin = function (obj) {
    // eslint-disable-next-line
    obj.fly = function () {
        console.log(`${this.name}, flies.`);
    };
};
flyMixin(Plane);
flyMixin(Bird);
Plane.fly();
Bird.fly();
// Using closure to protect properties within an object from being modified
function privateFunction() {
    let secret = "This is a secret.";// Changes the scope of that variable to be within the constructor function versus available globally, private property
    this.revealSecret = function () {
        console.log(secret);
    };
}
// eslint-disable-next-line new-cap
let secretKey = new privateFunction();
secretKey.revealSecret();// Output = This is a secret.
secretKey.secret = "This is public.";// Does nothing
secretKey.revealSecret();// Output = This is a secret.
// Immediately invoked function expression(IIFE)

(function () {
    console.log("This is an immediately invoked function expression or IIFE.");
}());
// Using IIFE to create a module
let Duck = {
    name: "Daffy!!"
};
let motionModule = (function () {
    return {
        glideMixin(obj) {
            obj.glide = function () {
                console.log("Gliding, wooosh!");
            };
        },
        flyMixin(obj) {
            obj.fly = function () {
                console.log("Flying, wooosh!");
            };
        }
    };
    // eslint-disable-next-line func-call-spacing
}
());
motionModule.glideMixin(Duck);
Duck.glide();
motionModule.flyMixin(Duck);
Duck.fly();

// Functional Programming
// console.clear();
/*
Functions that can be assigned to a variable, passed into another function, or returned from another function just like any other normal value, are called first class functions. In JavaScript, all functions are first class functions.
The functions that take a function as an argument, or return a function as a return value are called higher order functions.
When the functions are passed in to another function or returned from another function, then those functions which gets passed in or returned can be called a lambda.
*/
const prepareNegativeRandomNumber = (a = 10, b = 15) => {
    if (a < b) {
        var temp = a;
        a = b;
        b = temp;
    }
    return -1 * (Math.floor((Math.random() * (a - b + 1)) + b));
};
const preparePositiveRandomNumber = (a = 10, b = 15) => {
    if (a < b) {
        var temp = a;
        a = b;
        b = temp;
    }
    return 1 * (Math.floor((Math.random() * (a - b + 1)) + b));
};
const makeRandomArray = (prepareRandomNumber, quantity) => {
    const randArray = [];
    for (var i = 0; i < quantity; i++) {
        randArray.push(prepareRandomNumber());
    }
    return randArray;
};
const negativeArray = makeRandomArray(prepareNegativeRandomNumber, 23);
const positiveArray = makeRandomArray(preparePositiveRandomNumber, 17);
console.log(negativeArray, positiveArray);
/*
Output =
(23) [-13, -13, -10, -12, -13, -13, -14, -13, -12, -11, -10, -14, -10, -10, -14, -10, -15, -13, -10, -12, -12, -15, -11] (17) [13, 14, 15, 10, 15, 15, 10, 12, 11, 15, 14, 12, 13, 14, 10, 14, 15]
*/
// An array of titles of each site open within the window(tabs)
function Window(tabs) {
    this.tabs = tabs;
}
// To join two windows into one window
Window.prototype.join = function (otherWindow) {
    this.tabs = this.tabs.concat(otherWindow.tabs);
    return this;
};
// To open a new tab at the end
Window.prototype.openTab = function (tabName) {
    this.tabs.push(tabName);
    return this;
};
// To close a tab
Window.prototype.closeTab = function (index) {
    var tabsBefore = this.tabs.splice(0, index);
    var tabsAfter = this.tabs.splice(1);// var tabsAfter = this.tabs.splice(index); would cause a bug because splice changes the tabs property
    this.tabs = tabsBefore.concat(tabsAfter);
    return this;
};
// Creating three browser windows
var workWindow = new Window(["GMail", "Inbox", "Work mail", "Docs", "freeCodeCamp"]);
var socialWindow = new Window(["FB", "Gitter", "Reddit", "Twitter", "Medium"]);
var videoWindow = new Window(["Netflix", "YouTube", "Vimeo", "Vine"]);
// Joining, opening and closing
var finalTabs = workWindow.join(socialWindow.closeTab(2)).openTab("Wiki").join(videoWindow.closeTab(3));
// alert(finalTabs.tabs);//To show finalTabs.tabs in alert window
/*
Changing or altering things is called mutation, and the outcome is called a side effect. A function, ideally, should be a pure function, meaning that it does not cause any side effects.
*/
const fixedValue = 200;
function incrementValue(fixedValue) {
    return fixedValue + 1;
}
var newValue = incrementValue(fixedValue);
console.log(newValue);// Output = 201
// Refactoring global variables out of functions
/*
Don't alter a variable or object - create new variables and objects and return them if need be from a function.
Declare function arguments - any computation inside a function depends only on the arguments, and not on any global object or variable.
*/
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];
function add(bookList, bookName) {
    return [...bookList, bookName];
}
function remove(bookList, bookName) {
    var newList = [];
    bookList.forEach((num) => {
        if (num !== bookName) {
            newList.push(num);
        }
    });
    return newList;
}
var newBookList = add(bookList, "A Brief History of Time");
console.log(newBookList);// Output = (5) ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae", "A Brief History of Time"]
var newerBookList = remove(bookList, "On The Electrodynamics of Moving Bodies");
console.log(newerBookList);// Output = (3) ["The Hound of the Baskervilles", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"]
var newestBookList = remove(add(bookList, "A Brief History of Time"), "On The Electrodynamics of Moving Bodies");
console.log(newestBookList);// Output = (4) ["The Hound of the Baskervilles", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae", "A Brief History of Time"]
// Using the map method to extract data from an array
const watchList = [
    {
        "Title": "Inception",
        "Year": "2010",
        "Rated": "PG-13",
        "Released": "16 Jul 2010",
        "Runtime": "148 min",
        "Genre": "Action, Adventure, Crime",
        "Director": "Christopher Nolan",
        "Writer": "Christopher Nolan",
        "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page, Tom Hardy",
        "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
        "Language": "English, Japanese, French",
        "Country": "USA, UK",
        "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
        "Metascore": "74",
        "imdbRating": "8.8",
        "imdbVotes": "1,446,708",
        "imdbID": "tt1375666",
        "Type": "movie",
        "Response": "True"
    },
    {
        "Title": "Interstellar",
        "Year": "2014",
        "Rated": "PG-13",
        "Released": "07 Nov 2014",
        "Runtime": "169 min",
        "Genre": "Adventure, Drama, Sci-Fi",
        "Director": "Christopher Nolan",
        "Writer": "Jonathan Nolan, Christopher Nolan",
        "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
        "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
        "Language": "English",
        "Country": "USA, UK",
        "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
        "Metascore": "74",
        "imdbRating": "8.6",
        "imdbVotes": "910,366",
        "imdbID": "tt0816692",
        "Type": "movie",
        "Response": "True"
    },
    {
        "Title": "The Dark Knight",
        "Year": "2008",
        "Rated": "PG-13",
        "Released": "18 Jul 2008",
        "Runtime": "152 min",
        "Genre": "Action, Adventure, Crime",
        "Director": "Christopher Nolan",
        "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
        "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
        "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
        "Language": "English, Mandarin",
        "Country": "USA, UK",
        "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
        "Metascore": "82",
        "imdbRating": "9.0",
        "imdbVotes": "1,652,832",
        "imdbID": "tt0468569",
        "Type": "movie",
        "Response": "True"
    },
    {
        "Title": "Batman Begins",
        "Year": "2005",
        "Rated": "PG-13",
        "Released": "15 Jun 2005",
        "Runtime": "140 min",
        "Genre": "Action, Adventure",
        "Director": "Christopher Nolan",
        "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
        "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
        "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
        "Language": "English, Urdu, Mandarin",
        "Country": "USA, UK",
        "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
        "Metascore": "70",
        "imdbRating": "8.3",
        "imdbVotes": "972,584",
        "imdbID": "tt0372784",
        "Type": "movie",
        "Response": "True"
    },
    {
        "Title": "Avatar",
        "Year": "2009",
        "Rated": "PG-13",
        "Released": "18 Dec 2009",
        "Runtime": "162 min",
        "Genre": "Action, Adventure, Fantasy",
        "Director": "James Cameron",
        "Writer": "James Cameron",
        "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
        "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
        "Language": "English, Spanish",
        "Country": "USA, UK",
        "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
        "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
        "Metascore": "83",
        "imdbRating": "7.9",
        "imdbVotes": "876,575",
        "imdbID": "tt0499549",
        "Type": "movie",
        "Response": "True"
    }
];
var ratingMapped = watchList.map(function (movie) {
    return {
        title: movie.Title,
        rating: movie.imdbRating
    };
});
console.log(ratingMapped);// Output = (5) [{…}, {…}, {…}, {…}, {…}]
// Use the filter method to extract data from an array
var ratingFiltered = watchList.map(function (movie) {
    return {
        title: movie.Title,
        rating: movie.imdbRating
    };
}).filter((item) => item.rating > 8.5);
console.log(ratingFiltered);// Output = (3) [{…}, {…}, {…}]
// Use the reduce method to analyze data
var ratingReducedTotal = watchList.filter((item) => (item.Director === "Christopher Nolan")).map((item) => (Number(item.imdbRating))).reduce(
    (original, current) => original += current, 0
);
console.log(ratingReducedTotal);// Output = 34.7
var ratingReducedAverage = ratingReducedTotal / watchList.filter((item) => (item.Director === "Christopher Nolan")).length;
console.log(ratingReducedAverage);// Output = 8.675
// Implement map method on a prototype
const sampleArray = [23, 65, 98, 5];
// eslint-disable-next-line no-extend-native
Array.prototype.myMap = function (callback) {
    var newArray = [];
    this.forEach((num) => {
        newArray.push(callback(num));
    });
    return newArray;
};
var newSampleArray = sampleArray.myMap(function (item) {
    return item * 2;
});
console.log(newSampleArray);// Output = (4) [46, 130, 196, 10]
// Implement filter method on a prototype
// eslint-disable-next-line no-extend-native
Array.prototype.myFilter = function (callback) {
    var newArray = [];
    this.forEach((num) => {
        if (callback(num) === true) {
            newArray.push(num);
        }
    });
    return newArray;
};
var newSampleArray = sampleArray.myFilter(function (item) {
    return item % 2 === 1;
});
console.log(newSampleArray);// Output = (3) [23, 65, 5]
// Return part of an array using the slice method
const inputAnimal = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
function sliceArray(animal, start, end) {
    return animal.slice(start, end);
}
var newAnimal = sliceArray(inputAnimal, 1, 3);
console.log(newAnimal);// Output = (2) ["Dog", "Tiger"]
// Removing elements from an array using slice instead of splice
const inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
function nonMutatingSplice(city, start, end) {
    return (city.slice(start, end));
}
var newCity = nonMutatingSplice(inputCities, 1, 4);
console.log(newCity);// Output = (3) ["Delhi", "Islamabad", "London"]
// Combine two arrays using the concat function
function nonMutatingConcat(original, attach) {
    return original.concat(attach);
}
var newList = nonMutatingConcat(newAnimal, newCity);
console.log(newList);// Output = (5) ["Dog", "Tiger", "Delhi", "Islamabad", "London"]
// Adding elements to the ends of an array using concat instead of push
function nonMutatingPush(original, newItem) {
    return original.concat(newItem);
}
var newList = nonMutatingPush(newAnimal, newCity);
console.log(newList);// Output = (5) ["Dog", "Tiger", "Delhi", "Islamabad", "London"]
// Sort arrays alphabetically and numerically
const alphabetArray = ["a", "x", "s", "b", "c", "z"];
const numberArray = [1, 3, 4, 9, 2, 0, -4, 11];
function sortAlphabets(arr) {
    var temp = [];
    temp = temp.concat(arr);// To make sure original array stays the same
    return temp.sort((a, b) => a > b);
}
function sortNumber(arr) {
    return [].concat(arr).sort((a, b) => a - b);// To make sure original array stays the same
}
var sortedAlphabets = sortAlphabets(alphabetArray);
console.log(alphabetArray);// Output = (6) ["a", "x", "s", "b", "c", "z"]
console.log(sortedAlphabets);// Output = (6) ["a", "b", "c", "s", "x", "z"]
var sortedNumbers = sortNumber(numberArray);
console.log(numberArray);// Output = (7) [1, 3, 4, 9, 2, 0, -4]
console.log(sortedNumbers);// Output = (7) [-4, 0, 1, 2, 3, 4, 9]
// Using the split method to split a string
const stringToSplit = "How9are7you2today!";
var splitArrayOfStrings = stringToSplit.split(/\d/);
console.log(splitArrayOfStrings);// Output = (4) ["How", "are", "you", "today!"]
// Using the join method to combine an array into a string
const stringFromArray = splitArrayOfStrings.join(" ");
console.log(stringFromArray);// Output = How are you today!
// Convert strings to URL slugs
const stringURL = "A Mind Needs Books Like A Sword Needs A Whetstone";
function stringToURL(str) {
    return str.toLowerCase().split(/\s+/).join("-");
}
console.log(stringToURL(stringURL));// Output = a-mind-needs-books-like-a-sword-needs-a-whetstone
// Using every method to check that every element in an array meets a criteria
console.log(numberArray.every((num) => {
    return num < 10;
}));// Output = false
// Using some method to check that any element in an array meets a criteria
console.log(numberArray.some((num) => {
    return num > 10;
}));// Output = true
// Currying and Partial Application
/*
The arity of a function is the number of arguments it requires. Currying a function means to convert a function of N arity into N functions of arity 1.
Partial application can be described as applying a few arguments to a function at a time and returning another function that is applied to more arguments.
*/
function unCurried(x, y, z) {
    return x + y + z;
}
console.log(unCurried(10, 20, 30));// Output = 60
function curried(x) {
    return function (y) {
        return function (z) {
            return x + y + z;
        };
    };
}
console.log(curried(10)(20)(30));// Output = 60
var groupedFunction = curried(10)(20);
console.log(groupedFunction(30));// Output = 60
function impartialFunction(x, y, z) {
    return x + y + z;
}
var partialFunction = impartialFunction.bind(this, 20, 30);
console.log(partialFunction(10));// /Output = 60
// Algorithm scripting
// Symmetric difference of two arrays
const arrayOne = [1, "calf", 3, "piglet"];
const arrayTwo = [1, "calf", 3, 4];
function symmetricDifference(arr1, arr2) {
    return arr1.concat(arr2).filter((num) => {
        return !arr1.includes(num) || !arr2.includes(num);// To check if num is not included in arr1 or arr2
    });
    // return arr1.filter(num => !arr2.includes(num)).concat(arr2.filter(num => !arr1.includes(num)));
}
console.log(symmetricDifference(arrayOne, arrayTwo));// Output = (2) ["piglet", 4]
// Remove all occurrences of given elements from an array
const seekAndDestroyArray = [1, 2, 3, 1, 2, 3];
function seekAndDestroy(arr, ...args) {
    return arr.filter((num) => !args.includes(num));
}
console.log(seekAndDestroy(seekAndDestroyArray, 2, 3));// Output = (2) [1, 1]
// Find matches within objects
const elementArray = [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }];
function findMatch(collection, source) {
    var sourceKeys = Object.keys(source);// To extract an array of all keys
    return collection.filter((obj) => {
        return sourceKeys.every((key) => obj.hasOwnProperty(key) && obj[key] === source[key]);
    });
    /*
    return collection.filter((obj) => {
        for(var i=0; i<sourceKeys.length; i++) {
            if(!obj.hasOwnProperty(sourceKeys[i]) || obj[sourceKeys[i]] !== source[sourceKeys[i]]) {
                return false;
            }
        }
        return true;
    });
    */
}
console.log(findMatch(elementArray, { last: "Capulet" }));// Output = [{first: "Tybalt", last: "Capulet"}]
// Make spinal strings out of ordinary strings
const spinalString = "thisIsSpinalTapThe_Andy_Griffith_Show";
function spinalCase(str) {
    return str.split(/\s+|_|(?=[A-Z])/).join("-").toLowerCase();
    /*
    var regex = /\s+|_+/g;
    str = str.replace(/([a-z])([A-Z])/g, "$1 $2");
    return str.replace(regex, "-").toLowerCase();
    */
}
console.log(spinalCase(spinalString));// Output = this-is-spinal-tap-the-andy-griffith-show
// Translate into pig latin
const pigLatin = "paragraphs";
function translatePigLatin(str) {
    function isConsonant(char) {
        return !/[aeiou]/.test(char);
    }
    if (!isConsonant(str.charAt(0))) {
        return str + "way";
    // eslint-disable-next-line no-else-return
    } else {
        var charArr = str.split("");
    }
    while (isConsonant(charArr[0])) {
        var temp = charArr.shift();
        charArr.push(temp);
    }
    return charArr.join("") + "ay";
    /*
    function check(i) {
        return ["a", "e", "i", "o", "u"].indexOf(str.charAt(i)) === -1 ? check(i + 1): i;
    };
    return str.substring(check(0)).concat((check(0) === 0 ? "w": str.substring(0, check(0))) + "ay");
    */
}
console.log(translatePigLatin(pigLatin));// Output = aragraphspay
// Search and replace elements in strings
const searchReplaceString = "A quick brown fox JuMpEd over the lazy dog";
function searchAndReplace(str, before, after) {
    var regex = new RegExp(before, "gi");// To create a regular expression
    function applyCasing(source, target) {
        var targetArr = target.split("");
        var sourceArr = source.split("");
        for (var i = 0; i < Math.min(targetArr.length, sourceArr.length); i++) {
            if (/[A-Z]/.test(sourceArr[i])) {
                targetArr[i] = targetArr[i].toUpperCase();
            } else {
                targetArr[i] = targetArr[i].toLowerCase();
            }
        }
        return targetArr.join("");
    }
    var regexMatch = str.match(regex).toString();
    return str.replace(regexMatch, applyCasing(regexMatch, after));
}
console.log(searchAndReplace(searchReplaceString, "jumped", "lEaPed"));// Output = A quick brown fox LeApEd over the lazy dog
// DNA pairing base pairs are AT and CG
function pairDNA(str) {
    var pairs = {
        A: "T",
        T: "A",
        C: "G",
        G: "C"
    };
    return str.split("").map(x => [x, pairs[x]]);
}
console.log(pairDNA("GCG"));// Output = [["G", "C"], ["C", "G"], ["G", "C"]]
// Find the missing letter
const missingLetter = "abcdefghjklmno";
function findMissingLetter(str) {
    for (var i = 1; i < str.length; i++) {
        if (str.charCodeAt(i) - str.charCodeAt(i - 1) > 1) {
            return String.fromCharCode(str.charCodeAt(i - 1) + 1);
        }
    }
}
console.log(findMissingLetter(missingLetter));// Output = i
// Union of arrays
function unionArrays(...arrays) {
    var retArr = [];
    for (var i in arrays) {
        for (var j in arrays[i]) {
            if (!retArr.includes(arrays[i][j])) {
                retArr.push(arrays[i][j]);
            }
        }
    }
    return retArr;
}
console.log(unionArrays([1, 3, 2], [5, 2, 1, 4], [2, 1]));// Output = (5) [1, 3, 2, 5, 4]
// Convert to HTML entities
function convertHTML(str) {
    var htmlEntities = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        "\"": "&quot;",
        "'": "&apos;"
    };
    return str.split("").map((entity) => htmlEntities[entity] || entity).join("");
}
console.log(convertHTML("\"Dolce & Gabbana\""));// Output = &quot;Dolce &amp; Gabbana&quot;
// Sum of all primes
function sumPrime(num) {
    function isPrime(num) {
        var primeNumbers = [];
        var sieve = [];
        for (var i = 2; i <= num; i++) {
            if (!sieve[i]) {
                primeNumbers.push(i);
                for (var j = i; j <= num; j += i) {
                    sieve[j] = true;
                }
            }
        }
        return primeNumbers;
    }
    return isPrime(num).reduce((x, y) => x + y);
}
console.log(sumPrime(100));// Output = 1060
// Euclidean function implementation for finding HCF
function findHCF(a, b) {
    while (b > 0) {
        var temp = a;
        a = b;
        b = temp % b;
    }
    return a;
}
/*
function findHCF(a, b) {
    if(b === 0) {
        return a;
    } else {
        return findHCF(b, a%b);
    }
};
*/
console.log(findHCF(120, 16));// Output = 8
// LCM of a range
function findLCM(a, b) {
    return (a * b / findHCF(a, b));
}
function rangeLCM(arr) {
    var min = Math.min(...arr);
    var max = Math.max(...arr);
    var lcm = findLCM(min, min + 1);
    while (min < max) {
        min++;
        lcm = findLCM(lcm, min);
    }
    return lcm;
}
console.log(rangeLCM([23, 18]));// Output = 6056820
// Function to drop elements according to a function
function dropIt(arr, func) {
    return arr.slice(arr.findIndex(func) > -1 ? arr.findIndex(func) : arr.length, arr.length);
}
console.log(dropIt([1, 2, 3, 4], function (n) { return n >= 3; }));// Output = (2) [3, 4]
// Flattening a multi dimensional array
function flat(arr) {
    var flatArr = [].concat(...arr);
    return flatArr.some(Array.isArray) ? flat(flatArr) : flatArr;
    /*
    var flatArray = [];
    function check(arg) {
        if(!Array.isArray(arg)) {
            flatArray.push(arg);
        } else {
            for(var elt in arg) {
                check(arg[elt]);
            }
        }
    };
    arr.forEach(check);
    return flatArray;
    */
}
console.log(flat([1, [2], [3, [[4]]]]));// Output = (4) [1, 2, 3, 4]
// Binary to text
function binaryToText(str) {
    return str.split(" ").map(x => String.fromCharCode(parseInt(x, 2))).join("");
}
console.log(binaryToText("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"));// Output = Aren't bonfires fun!?
// Optional arguments
function sumNumbers() {
    // eslint-disable-next-line prefer-rest-params
    var args = Array.from(arguments);
    // eslint-disable-next-line no-nested-ternary
    return args.some(n => typeof n !== "number") ?
        undefined :
        args.length > 1 ?
            args.reduce((a, b) => a + b, 0) :
            // eslint-disable-next-line no-confusing-arrow
            (n) => typeof n === "number" ?
                args[0] + n :
                undefined;
}
console.log(sumNumbers(1, 3));// Output = 4
var sumNow = sumNumbers(1);
console.log(sumNow(3));// Output = 4
