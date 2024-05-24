import readlineSync from 'readline-sync';

const countOfQuestions = 3;

export default (rule, getQuestionAndAnswer) => {
    console.log('Welcome to the Brain Games!');
    const name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}!`);
    console.log(rule);
    for (let i = 0; i < countOfQuestions; i += 1) {
        const [question, correctAnswer] = getQuestionAndAnswer();
        console.log(`Question: ${question}`);
        const anwser = readlineSync.question('Your answer: ');
        if (anwser === String(correctAnswer)) {
            console.log('Correct!');
        } else {
            console.log(`'${anwser}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
            console.log(`Let's try again, ${name}!`);
            return;
        }
    }
    console.log(`Congratulations, ${name}!`);
};