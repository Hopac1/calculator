function operate(operator, numOne, numTwo) {
    if (operator == "+") {
        // add(numOne, numTwo)
        console.log(typeof operator)
    } else if (operator === "-") {
        subtract(numOne, numTwo)
    } else if (operator === "/") {
        divide(numOne, numTwo)
    } else if (operator === "*") {
        multiply(numOne, numTwo)
    }
}

function add(numOne, numTwo) {
    return numOne + numTwo;
}

function subtract(numOne, numTwo) {
    return numOne - numTwo;
}

function divide(numOne, numTwo) {
    if (numTwo === 0) {
        return "Cannot divide by zero"
    }
    return numOne / numTwo;
}

function multiply(numOne, numTwo) {
    return numOne * numTwo;
}

