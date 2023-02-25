let output = 0;
let total = 0;
let displayValue = "";
let storedValue = displayValue;
let firstPart = 0;
let secondPart = 0;
let operatorChosen = "";

const upperScreenValue = document.querySelector('.upperScreenDisplay');
const displayValueSelected = document.querySelector('.displayValue')
const allInputs = document.querySelectorAll('.rows > button');
// const allOperators = document.querySelectorAll('.operators');
const plusOperator = document.getElementById('plusOperator');
const subtractOperator = document.getElementById('subtractOperator');
const multiplyOperator = document.getElementById('multiplyOperator');
const divideOperator = document.getElementById('divideOperator');
const equalOperator = document.getElementById('equalOperator');
const functionOperators = [plusOperator, subtractOperator, multiplyOperator, divideOperator];



const valueSelected = function () {
    for (const input of allInputs) {
        input.addEventListener('click', function (e) {
            displayValue += e.target.value;
            displayValueSelected.textContent = displayValue;
            console.log(displayValue);
        });
    }
}



const operate = function (a, operator, b) {
    sliceString();
    a = parseInt(firstPart);
    operator = operatorChosen;
    b = parseInt(secondPart);
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
        ห
        divide(a, b);
        total = output;
        return total;
    }
};

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

// const checkOperator = function () {
//     for (const operator of allOperators) {
//         if (storedValue.contains(operator)) {
//             return true;
//         } else {
//             return false;
//         }
//     }
// }



// const findIndexOperator = function () {
//     const plusOperatorIndex = displayValue.indexOf(plusOperator);
//     const subtractOperatorIndex = displayValue.indexOf(subtractOperator);
//     const multiplyOperatorIndex = displayValue.indexOf(multiplyOperator);
//     const divideOperatorIndex = displayValue.indexOf(divideOperator);
// }


const sliceString = function () {
    plusOperatorIndex = findPlusOperatorIndex();
    equalOperatorIndex = findEqualOperatorIndex();
    firstPart = displayValue.slice(0, plusOperatorIndex);
    console.log(firstPart);
    operatorChosen = displayValue.slice(plusOperatorIndex, plusOperatorIndex + 1);
    console.log(operatorChosen);
    secondPart = displayValue.slice(plusOperatorIndex + 1, equalOperatorIndex);
    console.log(secondPart);
}

const findPlusOperatorIndex = function () {
    const plusOperatorIndex = displayValue.indexOf(plusOperator.value);
    console.log(plusOperatorIndex)
    return plusOperatorIndex;
}
const findEqualOperatorIndex = function () {
    const equalOperatorIndex = displayValue.indexOf(equalOperator.value);
    console.log(equalOperatorIndex);
    return equalOperatorIndex;
}


valueSelected();

