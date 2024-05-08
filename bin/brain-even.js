console.log('Welcome to the Brain Games!');

import readlineSync from 'readline-sync';
import readlineSyncr from '../src/cli.js';
readlineSyncr();
const isEven = (number) => {
    
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    const getRandomInt = (max) => {
        return Math.floor(Math.random() * max);
    }
    const question = ('Question: ' + getRandomInt(20));
    console.log(question);
    const answer = readlineSync.result('Your answer: ')
    if (answer % 2 !== 0) {
        return result = "'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, Bill!"
    }
};