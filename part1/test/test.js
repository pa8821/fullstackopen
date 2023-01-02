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