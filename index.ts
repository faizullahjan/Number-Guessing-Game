#! /usr/bin/env node 
import inquirer from "inquirer";

//1 Computer will generate a Random Number
//User Input  for guessing number
//3  Copare User &  Coumputer Number And suggest

const randomNumber = Math.floor(Math.random() * 13 + 1)
const answer = await inquirer.prompt([
  {
    name: "UserGuess",
    type: "number",
    message: "Please Guess A Number Between 1 to 10:",
  },
]);
console.log(answer);
if(answer.UserGuess === randomNumber){
    console.log("Congratulation Your Guess Is Correct")
}
else if (answer.UserGuess != randomNumber){
    console.log("Sorryy :( You LOST A Game")
}