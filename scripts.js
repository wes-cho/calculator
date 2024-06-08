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

let clearButton = document.querySelector(".button.clear");
clearButton.addEventListener("click", () => {
    clearDisplay();
    operatorChoice = '';
    number1 = '';
    number2 = '';
    currentValue = '';
});

function clearDisplay(){
    document.querySelector(".display").textContent = '';
};

let numberButtons = document.querySelectorAll("#number");
let currentValue = '';
for (let i=0; i<numberButtons.length; i++){
    numberButtons[i].addEventListener("click", () => { 
        document.querySelector(".display").textContent += numberButtons[i].textContent;
        currentValue = document.querySelector(".display").textContent;
    });
};

let operatorButtons = document.querySelectorAll("#operator");
let operatorChoice = '';
let number1 = '';
for (let i=0; i<operatorButtons.length; i++){
    operatorButtons[i].addEventListener("click", () => {
            number1 = currentValue;
            operatorChoice = operatorButtons[i].textContent;
            clearDisplay(); //get rid of this once you know how to set variable without using displayValue
            currentValue = '';
    });
};

// let number2 = '';
let calculateButton = document.querySelector("#equals");
calculateButton.addEventListener("click", () => {
    number2 = currentValue;
    document.querySelector(".display").textContent = operate(number1, operatorChoice, number2);
    clearOperativeVariables();
});

function clearOperativeVariables(){
    number1 ='';
    number2 = '';
    operatorChoice = '';
    currentValue = '';
}

function calculate(operator){
    number2 = currentValue;
    document.querySelector(".display").textContent = operate(number1, operatorChoice, number2);
    operatorChoice = operatorTransformation(operator);
    number1 = document.querySelector(".display").textContent;
    number2 = '';
}