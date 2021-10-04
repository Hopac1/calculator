const numberTextBox = document.querySelector(".numbers-entry");
const buttons = document.querySelectorAll(".button");
const numberButtons = document.querySelectorAll(".numbers");
const clearButton = document.querySelector(".clear");
const clearEntryButton = document.querySelector(".clear-entry");
const plusMinusButton = document.querySelector(".plus-minus")
const operatorButtons = document.querySelectorAll(".operator");
const equalButton = document.querySelector(".equal");

let total;
let operator;
let operands = ["", ""]
let operatorPressed = false;

// Event Listeners
numberButtons.forEach(button => button.addEventListener("click", () => {
    console.log(button.textContent);
    appendNumber(button.textContent);
    updateDisplay()
}));

operatorButtons.forEach(opButton => opButton.addEventListener("click", () => {
    storeOperator(opButton);
}))

equalButton.addEventListener("click", () => {
    checkInvalidInput()
    operate(operator, operands[0], operands[1])
})

clearButton.addEventListener("click", clear);

plusMinusButton.addEventListener("click", changeToMinusOrPlus)

// Functions
function appendNumber(number) {

    if (number === "." && operatorPressed === false && operands[0].includes(".")) {
        return
    } else if (number === "." && operatorPressed === true && operands[1].includes(".")) {
        return
    }

    if (operatorPressed) {
        operands[1] = operands[1] + number;
    } else {
        operands[0] = operands[0] + number;
    }
}

function changeToMinusOrPlus() {
    if (operands[0] === "" && operatorPressed === false) return;
    if (operands[1] === "" && operatorPressed === true) return;

    if (total) {
        if (total.includes("-")) {
            total = total.replace("-", "");
            total = Number(total);
        } else {
            total = "-" + total.toString();
            total = Number(total);
        }
    }

    if (!operatorPressed) {
        if (operands[0].includes("-")) {
            operands[0] = operands[0].replace("-", "");
        } else {
            operands[0] = "-" + operands[0];
        }
    } else {
        if (operands[1].includes("-")) {
            operands[1] = operands[1].replace("-", "");
        } else {
            operands[1] = "-" + operands[1];
        }
    }
    updateDisplay()
}

function updateDisplay() {
    if (operatorPressed) {
        numberTextBox.value = `${operands[0]} ${operator} ${operands[1]}`         
    } else {
        numberTextBox.value = operands[0]
    }
}

function checkInvalidInput() {
    if (!operatorPressed) {
        return
    }
}

function clear() {
    numberTextBox.value = "";
    operands = ["", ""];
    operatorPressed = false;
    operator = undefined;
    total = undefined;
}

function storeOperator(buttonPressed) {
    if (operands[0] === "") {
        return;
    }
    operatorPressed = true;
    operator = buttonPressed.textContent;
    numberTextBox.value = `${operands[0]} ${operator} `
}

function showSum() {
    numberTextBox.value = `${operands[0]} ${operator} ${operands[1]} = ${total}`
    operands[0] = total;
    operands[1] = "";
}

function operate(operatorSymbol, firstNum, secondNum) {
    firstNum = Number(firstNum);
    secondNum = Number(secondNum);
    if (operands[0] === "" || operands[1] === "") {
        return;
    }

    if (operatorSymbol === "+") {
        total = firstNum + secondNum;
        console.log(total);
    } else if (operatorSymbol === "-") {
        total = firstNum - secondNum;
        console.log(total);
    } else if (operatorSymbol === "÷") {
        total = firstNum / secondNum;
        console.log(total);
    } else if (operatorSymbol === "*") {
        total = firstNum * secondNum;
        console.log(total);
    } 
    showSum();
    operatorPressed = false;
    operator = undefined;
}


// CAN PUT THESE FUNCTIONS INTO operate() TO SHORTEN THE CODE // 
function add(numOne, numTwo) {
    total = numOne + numTwo;
    console.log(total);
    
}

function subtract(numOne, numTwo) {
    total = numOne - numTwo;
    console.log(total);
}

function divide(numOne, numTwo) {
    total = numOne / numTwo;
    console.log(total);
    
}

function multiply(numOne, numTwo) {
    total = numOne * numTwo;
    console.log(total);
}

