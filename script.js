const numberTextBox = document.querySelector(".numbers-entry");
const buttons = document.querySelectorAll(".button");
const numberButtons = document.querySelectorAll(".numbers");
const clearButton = document.querySelector(".clear");
const clearEntryButton = document.querySelector(".clear-entry");
const operatorButtons = document.querySelectorAll(".operator");
const equalButton = document.querySelector(".equal");

let total = 0;
let operator;
let firstNumber;
// numberTextBox.value = firstNumber;

let nextNumber;


// Event Listeners
numberButtons.forEach(button => button.addEventListener("click", () => {
    console.log(button.textContent);
    if (firstNumber) {
        changeSecondNumDisplay(button);
    } else {
        changeFirstNumDisplay(button);
    }
}));

operatorButtons.forEach(opButton => opButton.addEventListener("click", () => {
    storeOperator(opButton);
}))

equalButton.addEventListener("click", () => {
    if (firstNumber && nextNumber) {
        operate(operator, firstNumber, nextNumber);
    }
})

clearButton.addEventListener("click", clearNumbers);


// Functions
function clearNumbers() {
    numberTextBox.value = "";
    firstNumber = null;
    nextNumber = null;
    total = 0;
}

function changeFirstNumDisplay(button) {
    firstNumber = parseInt(button.textContent);
    numberTextBox.value += firstNumber;
}

function changeSecondNumDisplay(button) {
    nextNumber = parseInt(button.textContent);
    numberTextBox.value += nextNumber;
}

function storeOperator(buttonPressed) {
    operator = buttonPressed.textContent;
    numberTextBox.value = `${firstNumber} ${operator} `
}

function showSum() {
    numberTextBox.value = `${firstNumber} ${operator} ${nextNumber} = ${total}`
}

function operate(operatorSymbol, firstNum, secondNum) {
    if (operatorSymbol === "+") {
        add(firstNum, secondNum)
    } else if (operatorSymbol === "-") {
        subtract(firstNum, secondNum)
    } else if (operatorSymbol === "/") {
        divide(firstNum, secondNum)
    } else if (operatorSymbol === "*") {
        multiply(firstNum, secondNum)
    } 
    showSum();
}

function add(numOne, numTwo) {
    total = numOne + numTwo;
    console.log(total);
    
}

function subtract(numOne, numTwo) {
    total = numOne - numTwo;
    console.log(total);
}

function divide(numOne, numTwo) {
    if (numTwo === 0) {
        console.log("Cannot divide by zero");
        return;
    }
    total = numOne / numTwo;
    console.log(total);
    
}

function multiply(numOne, numTwo) {
    total = numOne * numTwo;
    console.log(total);
}

