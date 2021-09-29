let sum = 0;

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
}

function add(numOne, numTwo) {
    sum = numOne + numTwo;
    console.log(sum);
    
}

function subtract(numOne, numTwo) {
    sum = numOne - numTwo;
    console.log(sum);
}

function divide(numOne, numTwo) {
    if (numTwo === 0) {
        console.log("Cannot divide by zero");
        return;
    }
    sum = numOne / numTwo;
    console.log(sum);
    
}

function multiply(numOne, numTwo) {
    sum = numOne * numTwo;
    console.log(sum);
}

