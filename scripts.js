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

let numberButtons = document.querySelectorAll("#number");
let displayValue = '';
for (let i=0; i<numberButtons.length; i++){
    numberButtons[i].addEventListener("click", () => {
        document.getElementById("display").textContent += numberButtons[i].textContent;
        displayValue = document.getElementById("display").textContent;
    });
};

let clearButton = document.querySelector("#clear");
clearButton.addEventListener("click", () => {
    document.getElementById("display").textContent = '';
    operatorChoice = '';
    number1 = '';
    number2 = '';
    displayValue = '';
});

let operatorButtons = document.querySelectorAll("#operator");
let operatorChoice = '';
let number1 = '';
for (let i=0; i<operatorButtons.length; i++){
    operatorButtons[i].addEventListener("click", () => {
        operatorChoice = operatorTransformation(operatorButtons[i].textContent); //can get rid of function wrapper when you change from words to symbol buttons
        number1 = displayValue;
        document.getElementById("display").textContent = '';
        displayValue = '';
    });
};

function operatorTransformation(operatorChoice){
    switch (operatorChoice){
        case 'Add':
            return '+';
        case 'Subtract':
            return '-';
        case 'Multiply':
            return '*';
        case 'Divide':
            return '/';
    };
};

let number2 = '';
let calculateButton = document.querySelector("#equals");
calculateButton.addEventListener("click", () => {
    number2 = displayValue;
    document.getElementById("display").textContent = operate(number1, operatorChoice, number2);
});

