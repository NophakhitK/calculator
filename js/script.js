let output = 0;
let total = 0;
let displayValue = "";
let storedValue = "";
let firstPart = 0;
let secondPart = 0;
let operatorChosen = "";
let index = 0;

const upperScreenValue = document.querySelector('.upperScreenDisplay');
const displayValueSelected = document.querySelector('.displayValue')
const allInputs = document.querySelectorAll('.rows > button');

const plusOperator = document.getElementById('plusOperator');
const subtractOperator = document.getElementById('subtractOperator');
const multiplyOperator = document.getElementById('multiplyOperator');
const divideOperator = document.getElementById('divideOperator');
const equalOperator = document.getElementById('equalOperator');
const allOperators = document.getElementsByClassName('operators')

const valueSelected = function () {
    for (const input of allInputs) {
        input.addEventListener('click', function (e) {
            if (e.target.value !== '=') {
                displayValue += e.target.value;
                displayValueSelected.textContent = displayValue;
                console.log(displayValue);
            }
        });
    }
}





for (const allOperator of allOperators) {
    allOperator.addEventListener('click', () => {
        if (allOperator.value === plusOperator.value) {
            storedValue = displayValue;
            storedValue += plusOperator.value;
            index = findPlusOperatorIndex();
            firstPart = storedValue.slice(0, index);
            operatorChosen = allOperator.value;
        } if (allOperator.value === subtractOperator.value) {
            storedValue = displayValue;
            storedValue += subtractOperator.value;
            index = findSubtractOperatorIndex();
            firstPart = displayValue.slice(0, index);
            operatorChosen = allOperator.value;
        } if (allOperator.value === multiplyOperator.value) {
            storedValue = displayValue;
            storedValue += multiplyOperator.value;
            index = findMultiplyOperatorIndex();
            firstPart = displayValue.slice(0, index);
            operatorChosen = allOperator.value;
        } if (allOperator.value === divideOperator.value) {
            storedValue = displayValue;
            storedValue += divideOperator.value;
            index = findDivideOperatorIndex();
            firstPart = displayValue.slice(0, index);
            operatorChosen = allOperator.value;

        }
    })
}


const sliceStringSecondPart = function () {
    storedValue = displayValue;
    storedValue += equalOperator.value;
    console.log(storedValue);
    console.log(index);
    equalIndex = findEqualOperatorIndex();
    secondPart = storedValue.slice(index + 1, equalIndex);
}

equalOperator.addEventListener('click', () => {
    a = parseInt(firstPart);
    console.log(a);
    console.log(typeof a);
    operator = operatorChosen;
    console.log(operator);
    console.log(typeof operator);
    sliceStringSecondPart();
    b = parseInt(secondPart);
    console.log(b);
    console.log(typeof b)
    operate(a, operator, b);
    console.log(total);
});

const findPlusOperatorIndex = function () {
    const plusOperatorIndex = storedValue.indexOf(plusOperator.value);
    return plusOperatorIndex;
}

const findSubtractOperatorIndex = function () {
    const subtractOperatorIndex = storedValue.indexOf(subtractOperator.value);
    return subtractOperatorIndex;
}

const findMultiplyOperatorIndex = function () {
    const multiplyOperatorIndex = storedValue.indexOf(multiplyOperator.value);
    return multiplyOperatorIndex;
}

const findDivideOperatorIndex = function () {
    const divideOperatorIndex = storedValue.indexOf(divideOperator.value);
    return divideOperatorIndex;
}

const findEqualOperatorIndex = function () {
    const equalOperatorIndex = storedValue.indexOf(equalOperator.value);
    return equalOperatorIndex;
}

const add = function (a, b) {
    return output = a + b;
};

const subtract = function (a, b) {
    return output = a - b;
}

const multiply = function (a, b) {
    return output = a * b;
}

const divide = function (a, b) {
    return output = a / b;
}

const operate = function (a, operator, b) {
    if (operator === "+") {
        add(a, b);
        total = output;
        return total;
    }
    if (operator === "-") {
        subtract(a, b);
        total = output;
        return total;
    }
    if (operator === "x") {
        multiply(a, b);
        total = output
        return total;
    }
    if (operator === "÷") {
        divide(a, b);
        total = output;
        return total;
    }
    return total;
};



valueSelected();

