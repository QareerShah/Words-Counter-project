#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bold.cyanBright("\n\t\tWelcome to Qareer-ul-Ain  'word Counter'\n\t\t "));
console.log("<".repeat(80));
let answers = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter a Sentence",
    }
]);
let words = answers.sentence.trim().split(" ");
console.log(">".repeat(80));
console.log(chalk.bold.italic.yellowBright("sentence words:"));
console.log(words);
console.log(chalk.bold(`\n Word Count: ${chalk.cyanBright(words.length)}`));
