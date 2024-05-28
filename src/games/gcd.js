import game from '../index.js';

const rule = 'Find the greatest common divisor of given numbers.';

const gcd = (number1, number2) => {
    if (number1 === 0) {
        return number2;
    }
    return gcd(number2 % number1, number1);
};

const randomInteger = (min, max) => {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
};

const getQuestionAndAnswer = () => {
    const randomNumber1 = randomInteger(0, 100);
    const randomNumber2 = randomInteger(0, 100);
    
    const question = `${randomNumber1} ${randomNumber2}`;
    const correctAnswer = gcd(randomNumber1, randomNumber2);

    return [question, correctAnswer];
};

export default () => {
game(rule, getQuestionAndAnswer);
};