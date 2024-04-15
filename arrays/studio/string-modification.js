const input = require('readline-sync');
let str = "LaunchCode";

//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.

let firstThree = ("");

firstThree = str.splice(0,3);
console.log(str);

let lastThree = str.splice(3);
console.log(last);

let final = final + firstThree;
console.log(final);

//Use a template literal to print the original and modified string in a descriptive phrase.
console.log(`The original word is ${str}: ${final}`);

//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.

let numLetters = input.question("How many letters will be relocated"); 


//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.

if (numLetters - str.length >= 1) {
    console.log(`Problem: you guessed too many letters. We will move 3 letters`);
} else if (numLetters - str.length == 0) {
    console.log("Congrats! You guessed it."); 
} else if (numLetters - str.length <0) {
    let moving = str.slice(0, numLetters);
    let movingSecond = str.slice(numLetters);
    console.log(` ${movingSecond + moving} too few guess again.`)
} else {
    console.log("Big problem!");
}