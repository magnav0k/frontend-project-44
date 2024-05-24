import game from '../index.js';

const rule = 'What is the result of the expression?';

const arrSigns = ['+', '-', '*'];

const calculateFunc = (firstNumber, mathSigns, secondNumber) => {
    switch (mathSigns) {
        case '+':
            return firstNumber + secondNumber;
        case '-':
            return firstNumber - secondNumber;
        case '*':
            return firstNumber * secondNumber;
        default:
            break;
    }
};

const randomInteger = (min, max) => {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

const getQuestionAndAnswer = () => {
    const randomNumber1 = randomInteger(1, 100);
    const randomSigns = arrSigns[randomInteger(0, arrSigns.length - 1)];
    const randomNumber2 = randomInteger(1, 50);
    
    const question = `${randomNumber1} ${randomSigns} ${randomNumber2}`;
    const correctAnswer = calculateFunc(randomNumber1, randomSigns, randomNumber2);
    
    return [question, correctAnswer];
};

export default () => {
game(rule, getQuestionAndAnswer);
};