// 01. Create a variable.js file and declare variables and assign string, boolean, undefined and null data types, Display all the value with their data type.

let variableString = "30 JS Questions";
// console.log(variableString); OUTPUT:::: [30 JS Questions]
let variableBoolean = false;
// console.log(variableBoolean); OUTPUT:::: [false]
let emptyVariable;
// console.log(emptyVariable); OUTPUT:::: [undefined]

// 02. Declare variables to store your first name, last name, marital status, country and age and display them using interploation method.
let firstName = "Kunal";
// console.log(firstName); OUTPUT:::: [Kunal]
let lastName = "Kumar";
// console.log(lastName); OUTPUT:::: [Kumar]
let maritalStatus = "non-married";
// console.log(maritalStatus); OUTPUT:::: [non-married]
let age = 21;
// console.log(age);OUTPUT:::: [21]
console.log(
  `my name is ${firstName} ${lastName}, my age is ${age} year's and ${maritalStatus}`
);
