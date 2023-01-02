//Defining variables...
//This can also be done using var but is ill-advised. 
//Let and const are block scoped ({}), whereas var is function scoped

const x = 1
let y = 5

//Arrays
//Note that the array can be modified even though t is defined as const. This is due to the fact that only the reference is const (and arrays are mutable)
const t = [1, 2, 3, 4, 5]
t.push(6)

//We can iterate through the array using "forEach":
t.forEach((value) => { console.log(value) })

//Here we pass an anonymous function to the forEach method : (value) => {console.log(value)}

//When we use React, it is preferable to use features from functional programming such as the use of immutable data structures.
//It is preferable in react to use the method concat, which does not add the item to the array, but creates a new array in which the content of the old array
//are loacted. 

const a = [1, 5, 10]
const b = a.concat(5)

console.log(a)
console.log(b)

//There are many of useful methods defined for arrays, such as the map method. 

const m1 = a.map(value => value * 2) //Map creates a new array for which the function given as a parameter is used to create the items.

//Could also transform the map into something completely different

const m2 = t.map(value => '<li>' + value + '</li>')
console.log(m2)
// [ '<li>1</li>', '<li>2</li>', '<li>3</li>' ] is printed

//We can also destructure an array like the following...
const g = [1, 2, 3, 4, 5]

const [first, second, ...rest] = t

console.log(first, second)  // 1, 2 is printed
console.log(rest)          // [3, 4, 5] is printed

/////////////////////////////////////////////////////////////////////////////////////////////////////

//Objects
//We can define objects in many ways. Object literals are one of the most common. 
const object1 = {
    name: 'Arto Hellas',
    age: 35,
    education: 'PhD',
}

const object2 = {
    name: 'Full Stack web application development',
    level: 'intermediate studies',
    size: 5,
}

const object3 = {
    name: {
        first: 'Dan',
        last: 'Abramov',
    },
    grades: [2, 3, 5, 3],
    department: 'Stanford University',
}

console.log(object1.age)    //35
console.log(object1["age"]) //35

//Javascript doesn't have classes in the same sense as other O.O languages but this has been an addition in ES6
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Functions
const sum = (p1, p2) => {
    console.log(p1)
    console.log(p2)
    return p1 + p2
}

//We can also have an arrow function with ommitted braces if there is just a single parameter and/or expression. 

const f = p => p * 2

//Other than the arrow syntax, there is function expressions and function declarations. 

//Declaration:
function functionDeclaration(a, b) {
    console.log(a, b)
}

//Expression

const functionExpression = function (a, b) {
    return (a + b)
}


///////////////////////////////////////////////////////////////////////////////////
//Object Methods

const arto = {
    name: 'Arto Hellas',
    age: 35,
    education: 'PhD',
    greet: function () {
        console.log('hello, my name is ' + this.name)
    },
    doAddition: function (a, b) {
        return a + b
    }
}

arto.greet()  // "hello, my name is Arto Hellas" gets printed. "this" refers to the object itself. 

//We can also declare functions after the object has been created. 

arto.growOlder = function () {
    this.age += 1
}

console.log(arto.age)   // 35 is printed
arto.growOlder()
console.log(arto.age)   // 36 is printed

//We can also create references to member functions:

reference = arto.doAddition
console.log(reference(4, 5))

//However, if we try to do 

reference2 = arto.greet
reference2() //Hello my name is undefined. 

//"this" is the cause of this issue as it is based on what is calling the method.
//Here it refers to global this object.
//There are ways to circumvent this issue, such as binding.


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Classes

//There are features to make simulating object oriented classes possible. 
//Classes are actually based around the prototype system and are "syntactic sugar"

class Person {
    constructor(name) {
        this.name = name
    }

    getName() {
        return this.name
    }
    //Methods are created on the prototype
}

bob = new Person("Bob")
console.log(bob.getName())

//We could achieve the same result by using constructor functions. 
//Since each object has a prototype, we can manually set the getName as a method of the prototype of "Dog", meaning all instances of Dog
//Can access the getName function, which closely follows defining the getName method in the dog class as above. 

function Dog(name) {
    this.name = name
}

Dog.prototype.getName = function () {
    return this.name
}

sparky = new Dog("Sparky")
console.log(sparky.getName())