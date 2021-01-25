// JS SPREAD OPERATOR

let arr = [3, 4, 5, 6, 7, 8, 9]
console.log(arr)
let newArr = [1, 2, ...arr] //Adding new elements to an array
console.log(newArr)
console.log(...newArr) //Printing array elements induvidually

//Spread operator does not create new elements, or create new variable.
//Used only in values seperated by commas.

//Copy array
const mainArr = [...arr]

//Join two or more arrays
const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const alphabets = ["a", "b", "c"]

const allNumerics = [...number, ...alphabets]
console.log(allNumerics)

//Spread operator works on all Iterables.
//Iterables: Arrays, Strings, Maps and Sets but not Object

const string = "Suraj";
const letters = [...string, 'S']
console.log(letters)

//Since 2018 Spread operater works even on Objects even though it's not and Iterables.