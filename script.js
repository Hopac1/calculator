const numberTextBox = document.querySelector(".numbers-entry");
const buttons = document.querySelectorAll(".button");
const numberButtons = document.querySelectorAll(".numbers");
const clearButton = document.querySelector(".clear");
const clearEntryButton = document.querySelector(".clear-entry");
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
    operate(operator, Number(operands[0]), Number(operands[1]))
})

clearButton.addEventListener("click", clearNumbers);


// Functions
function appendNumber(number) {
    // Let user be able to enter first and second digits each with a decimal
    // while not allowing user to enter multiple decimals in the same operand
    // MOVE TO OWN FUNCTION AND MAKE NAME EASY TO UNDERSTAND THNE REMOVE THIS CMMNT
    if (number === "." && operatorPressed === false && operands[0].includes(".")) {
        return
    } else if (number === "." && operatorPressed === true && operands[1].includes(".")) {
        return
    }


    // if (number === "." && operands[0].includes(".") || operands[1].includes(".")) {
    //     return
    // }
    if (operatorPressed) {
        operands[1] = operands[1] + number;
    } else {
        operands[0] = operands[0] + number;
    }
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
    // if (operator === "÷" && nextNumber === 0) {
    //     numberTextBox.value = "Undefined"
    // }
}

function clearNumbers() {
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
    // if (total) {
    //     nextNumber = undefined;
    // }
    operator = buttonPressed.textContent;
    numberTextBox.value = `${operands[0]} ${operator} `
}

function showSum() {
    numberTextBox.value = `${operands[0]} ${operator} ${operands[1]} = ${total}`
    operands[0] = total;
    operands[1] = "";
}

function operate(operatorSymbol, firstNum, secondNum) {
    if (operands[0] === "" || operands[1] === "") {
        return;
    }
    if (operatorSymbol === "+") {
        add(firstNum, secondNum)
    } else if (operatorSymbol === "-") {
        subtract(firstNum, secondNum)
    } else if (operatorSymbol === "÷") {
        divide(firstNum, secondNum)
    } else if (operatorSymbol === "*") {
        multiply(firstNum, secondNum)
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

