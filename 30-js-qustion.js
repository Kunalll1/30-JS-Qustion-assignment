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
// console.log(
//   `my name is ${firstName} ${lastName}, my age is ${age} year's and ${maritalStatus}`
// );

// 03. Declare a varibale and assign string value to it and change all the string characters to capital letters using toUpperCase() method.
let string =
  "My name is Kunal, and I am currently learning Full Stack Web Development under the awesome teachers Hetash Sir and Anurage Sir. I love the way they explain the topics.";

// console.log(string.toUpperCase()); OUTPUT:::: [MY NAME IS KUNAL, AND I AM CURRENTLY LEARNING FULL STACK WEB DEVELOPMENT UNDER THE AWESOME TEACHERS HETASH SIR AND ANURAGE SIR. I LOVE THE WAY THEY EXPLAIN THE TOPICS.]

// 04. Declare a varibale and assign string value to it and check if the string contains a word Script using includes() method.

// console.log(string.includes("Hetash")); OUTPUT:::: [true]

// 05. Declare a varibale and assign string value to it and then split it into an array using split() method

// console.log(string.split([])); OUTPUT:::: [ [
//     'M', 'y', ' ', 'n', 'a', 'm', 'e', ' ', 'i', 's', ' ', 'K',
//     'u', 'n', 'a', 'l', ',', ' ', 'a', 'n', 'd', ' ', 'I', ' ',
//     'a', 'm', ' ', 'c', 'u', 'r', 'r', 'e', 'n', 't', 'l', 'y',
//     ' ', 'l', 'e', 'a', 'r', 'n', 'i', 'n', 'g', ' ', 'F', 'u',
//     'l', 'l', ' ', 'S', 't', 'a', 'c', 'k', ' ', 'W', 'e', 'b',
//     ' ', 'D', 'e', 'v', 'e', 'l', 'o', 'p', 'm', 'e', 'n', 't',
//     ' ', 'u', 'n', 'd', 'e', 'r', ' ', 't', 'h', 'e', ' ', 'a',
//     'w', 'e', 's', 'o', 'm', 'e', ' ', 't', 'e', 'a', 'c', 'h',
//     'e', 'r', 's', ' ',
//     ... 67 more items
//   ] ]

// 06. 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.

let companyName = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
// console.log(companyName.split(",", 7));
// OUTPUT:::: [[ 'Facebook', ' Google',' Microsoft', ' Apple', ' IBM',' Oracle',' Amazon' ] ]
