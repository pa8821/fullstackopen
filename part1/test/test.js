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