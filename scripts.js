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
//holds list of what buttons the user has clicked (number/operator/decimal)
let previousClicks = [];

const clearButton = document.querySelector(".clear");
clearButton.addEventListener('click', () => {
    document.querySelector('.display').textContent = '';
    previousClicks = [];
    number1 = '';
    number2 = '';
    
});

const numberButtons = document.querySelectorAll('#number');
for (let i=0; i<numberButtons.length; i++){
    numberButtons[i].addEventListener('click', () => {
        previousClicks.push(numberButtons[i].id);
        //updates the calculator's display with the number clicked
        document.querySelector('.display').textContent += numberButtons[i].textContent;
        //ensures var number2 is updated whenever a number is clicked
        number2 = document.querySelector('.display').textContent;
        //clears display when a number is clicked following an operator
        if (previousClicks[previousClicks.length-2] == 'operator'){
            document.querySelector('.display').textContent = numberButtons[i].textContent;
        };
    });
};

const operatorButtons = document.querySelectorAll('#operator');
for (let i=0; i<operatorButtons.length; i++){
    operatorButtons[i].addEventListener('click', () => {
        //runs calculation if number1 and operator have both been set, and last click wasn't an operator
        // also updates the display accordingly
        if (number1 && operator && previousClicks[previousClicks.length-1] != 'operator'){
            number2 = document.querySelector('.display').textContent;
            document.querySelector('.display').textContent = operate(number1, operator, number2);
        };
        previousClicks.push(operatorButtons[i].id);
        number1 = document.querySelector('.display').textContent;
        operator = operatorButtons[i].textContent;
    });
};

const decimalButton = document.querySelector('#decimal');
decimalButton.addEventListener('click', () => {
    previousClicks.push(decimalButton.id);
    //ensures var number2 is updated whenever a decimal is clicked
    number2 = document.querySelector('.display').textContent;
    //checks if number on display already contains a decimal -- adds one if it doesn't
    if (document.querySelector('.display').textContent.includes('.')){
        document.querySelector('.display').textContent += '';
    } else {
        document.querySelector('.display').textContent += '.';
    }
});

const calculateButton = document.querySelector('#equals');
calculateButton.addEventListener('click', () => {
    number2 = document.querySelector('.display').textContent;
    document.querySelector('.display').textContent = operate(number1, operator, number2);
    //clears variable so that user can't continuously click "calculate" 
    number1 = '';
});