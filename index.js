#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from 'chalk-animation';
const sleep = () => {
    return new Promise((res) => {
        setTimeout(res, 1000);
    });
};
async function welcome() {
    const rainbowTitle = chalkAnimation.rainbow("-------Lets start the program------");
    await sleep();
    rainbowTitle.stop();
    await askQuestion();
}
// welcome();
let again = false;
async function askQuestion() {
    let question = await inquirer.prompt([
        {
            type: 'input',
            name: 'str',
            message: chalk.greenBright('Please enter the paragraph you want to count word and characters: ')
        }
    ]);
    let wordArr = question.str.split(' ');
    let arr = [];
    let chr = 0;
    for (let i of wordArr) {
        if (i) {
            arr.push(i);
            chr += i.length;
        }
        else {
            continue;
        }
    }
    console.log(`Total words in the paragraph are: ${arr.length}`);
    console.log(`Total chracters in the paragraph are: ${chr}`);
    const repeat = await inquirer.prompt([
        {
            type: 'confirm',
            name: 'repeat',
            message: 'would you like to repeat? '
        }
    ]);
    if (repeat.repeat) {
        again = true;
        console.log(again);
    }
    else {
        again = false;
    }
}
do {
    await welcome();
} while (again);
