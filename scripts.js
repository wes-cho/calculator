function add(a,b){
    return Number(a) + Number(b);
};

function subtract(a,b){
    return Number(a) - Number(b);
};

function multiply(a,b){
    return Number(a) * Number(b);
};

function divide(a,b){
    return Number(a) / Number(b);
};

function operate(num1, operator, num2){
    switch (operator){
        case '+':
            return add(num1, num2);
        case  '-':
            return subtract(num1, num2);
        case '*':
            return multiply(num1, num2);
        case '/':
            return divide(num1, num2);
    };
};

let number1 = '';
let number2 = '';
let operator = '';
let display = '';
let result = '';
let previousClicks = [];

const clearButton = document.querySelector(".clear");
clearButton.addEventListener('click', (e) => {
    document.querySelector('.display').textContent = '';
    previousClicks = [];
});

const numberButtons = document.querySelectorAll('#number');
for (let i=0; i<numberButtons.length; i++){
    numberButtons[i].addEventListener('click', (e) => {
        previousClicks.push(numberButtons[i].id);
        document.querySelector('.display').textContent += numberButtons[i].textContent;
        if (previousClicks[previousClicks.length-2] == 'operator'){
            document.querySelector('.display').textContent = numberButtons[i].textContent;
        };
    });
};

const operatorButtons = document.querySelectorAll('#operator');
for (let i=0; i<operatorButtons.length; i++){
    operatorButtons[i].addEventListener('click', (e) => {
        previousClicks.push(operatorButtons[i].id);
        operator = operatorButtons[i].textContent;
        number1 = document.querySelector('.display').textContent;
    });
};

const decimalButton = document.querySelector('#decimal');
decimalButton.addEventListener('click', (e) => {
    previousClicks.push(decimalButton.id);
    if (document.querySelector('.display').textContent.includes('.')){
        document.querySelector('.display').textContent += '';
    } else {
        document.querySelector('.display').textContent += '.';
    }
});

const calculateButton = document.querySelector('#equals');
calculateButton.addEventListener('click', () => {
    number2 = document.querySelector('.display').textContent;
    document.querySelector('.display') = operate(number1, operator, number2);
});