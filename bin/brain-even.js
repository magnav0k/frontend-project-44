import readlineSyncr from '../src/cli.js';
import readlineSync from 'readline-sync';

const isEven = () => {
    console.log('Welcome to the Brain Games!');
    readlineSyncr();
    const countOfQuestions = 3;
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    const userName = readlineSync.question('May I have your name? ');
    for (let i = 0; i < countOfQuestions; i += 1) {
        const getRandomInt = (max) => {
            return Math.floor(Math.random() * max);
        }
        const question = ('Question: ' + getRandomInt(20));
        console.log(question);
        const answer = readlineSync.question('Your answer: ');
        if (answer % 2 !== 0) {
            console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${userName}!`);
            return;
        }
        console.log('Correct!');
    }
    console.log(`Congratulation, ${userName}!`);
};
isEven ();
export default isEven;