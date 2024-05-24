import game from '../index.js';

const rule = 'What is the result of the expression?';

const calculateFunc = (firstNumber, mathSigns, secondNumber) => {
    let result = 0;
    switch (mathSigns) {
        case '+':
            result = firstNumber + secondNumber;
            break;
        case '-':
            result = firstNumber - secondNumber;
            break;
        case '*':
            result = firstNumber * secondNumber;
            break;
        default:
            console.log('Unknown operator');
    }
    return result;
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