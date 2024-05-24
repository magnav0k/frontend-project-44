import game from '../index.js';

const rule = 'What is the result of the expression?';

const calculateFunc = (firstNumber, mathSigns, secondNumber) => {
    switch (mathSigns) {
        case '+':
            return firstNumber + secondNumber;
        case '-':
            return firstNumber - secondNumber;
        case '*':
            return firstNumber * secondNumber;
        default:
            console.log('Unknown operator');
    }
}

const randomInteger = (min, max) => {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

const prepareExpression = () => {
    const firstNumber = randomInteger(1, 100);
    const secondNumber = randomInteger(1, 100);
    const arrSigns = ['+', '-', '*'];
    const sign = arrSigns[randomInteger(arrSigns.length)];
    const question = `${firstNumber} ${sign} ${secondNumber}`;
    const answer = String(calculateFunc(sign, firstNumber, secondNumber));
    return [question, answer];
}

export default () => {
game(rule, prepareExpression);
};