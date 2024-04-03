#!/usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 5 + 1);
const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "please guess a number(Number Limit from 1 to 5):",
    },
]);
console.log(answers);
if (answers.userGuessedNumber === randomNumber) {
    console.log("congtratulations you guess right number.");
}
else {
    console.log("Sorry You guess wrong Number");
}
