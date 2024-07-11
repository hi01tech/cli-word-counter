#! /usr/bin/env node 

// Importing chalk and inquirer packages
import inquirer from "inquirer";
import chalk from "chalk";



//Display a colorful welcome message

console.log(chalk.bold.rgb(255,113,181)("-".repeat(70)));
console.log(chalk.rgb(169,255,47).bold("\n\t\t Welcome to hi01tech Word Counter\n\t"));
console.log(chalk.bold.rgb(255,113,181)("-".repeat(70),));


//Prompt thhe user to input a message
let answer = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter a sentence: "
    }
]);

//Triming and splitting a sentence into words
let words = answer.sentence.trim().split(" ");

//Analyzing of user sentence
console.log(chalk.rgb(169,255,47)("-".repeat(70)));

console.log(chalk.bold.rgb(2255,113,181)(`\n Sentence Words: `));
console.log('\n',words,'\n');
console.log(chalk.bold.rgb(255,113,181)(` Word Count : `,),chalk.rgb(255,255,73)(words.length));
console.log(chalk.bold.rgb(255,113,181)("-".repeat(70),));
