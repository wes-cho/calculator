function add(a,b){
    return a+b;
};

function subtract(a,b){
    return a-b;
};

function multiply(a,b){
    return a*b;
};

function divide(a,b){
    return a/b;
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
});

let operatorButtons = document.querySelectorAll("#operator");
let operatorChoice = '';
for (let i=0; i<operatorButtons.length; i++){
    operatorButtons[i].addEventListener("click", () => {
        operatorChoice = operatorTransformation(operatorButtons[i].textContent);
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