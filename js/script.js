// functions for calculator

const add = function (firstValue, secondValue) {
    return output = firstValue + secondValue;
};

const subtract = function (firstValue, secondValue) {
    return output = firstValue - secondValue;
}

const multiply = function (firstValue, secondValue) {
    return output = firstValue * secondValue;
}

const divide = function (firstValue, secondValue) {
    return output = firstValue / secondValue;
}

const power = function (firstValue, secondValue) {
    return output = firstValue ** secondValue;
}

const operate = function (firstValue, operator, secondValue) {
    if (operator === "plus") {
        add(firstValue, secondValue);
        total = output;
    }
    if (operator === "subtract") {
        subtract(firstValue, secondValue);
        total = output;
    }
    if (operator === "multiply") {
        multiply(firstValue, secondValue);
        total = output
    }
    if (operator === "divide") {
        divide(firstValue, secondValue);
        total = output;
    }
    if (operator === "power") {
        power(firstValue, secondValue);
        total = output;
    }
    return total;
};

// Function for round decimal to 4 places
function roundLongDecimals(total) {
    if (total.toString().indexOf('.') !== -1) {
        if (total.toString().split('.')[1].length > 4) {
            return total.toFixed(4);
        }
    }
    return total;
}

const calculator = document.querySelector('.calculator');
let displayValue = document.querySelector('.displayValue');
const buttonKeys = document.querySelectorAll('.rows > button');
const allOperators = document.querySelectorAll('.operators');

for (const buttonKey of buttonKeys) {
    buttonKey.addEventListener('click', (e) => {
        if (e.target.matches('button')) {
            const key = e.target;
            const action = key.dataset.action;
            let displaySelected = displayValue.textContent;
            const previousKeyType = calculator.dataset.previousKeyType;
            const keyContent = key.textContent;
            if (!action) {
                if (displaySelected === '0' || previousKeyType === 'operator' || previousKeyType === 'calculate') {
                    displayValue.textContent = keyContent;
                } else {
                    displayValue.textContent = displaySelected + keyContent
                }
                calculator.dataset.previousKeyType = 'number';
            }

            if (action === 'plus' ||
                action === 'subtract' ||
                action === 'multiply' ||
                action === 'divide' ||
                action === 'power'
            ) {
                const firstValue = parseFloat(calculator.dataset.firstValue);
                const operator = calculator.dataset.operator;
                const secondValue = parseFloat(displaySelected);
                if (firstValue && operator && previousKeyType !== 'operator' && previousKeyType !== 'calculate') {
                    const calculatedValue = operate(firstValue, operator, secondValue);
                    displayValue.textContent = calculatedValue;

                    // Update calculate value as first value
                    calculator.dataset.firstValue = calculatedValue;
                } else {
                    // If there are no calculation, set displayed number as first value
                    calculator.dataset.firstValue = displaySelected
                }
                calculator.dataset.previousKeyType = 'operator';
                calculator.dataset.operator = action
            }

            if (action === 'decimal') {
                if (!displaySelected.includes('.')) {
                    displayValue.textContent = displaySelected + '.';
                } else if (previousKeyType === 'operator' || previousKeyType === 'calculate') {
                    displayValue.textContent = '0.'
                }
                calculator.dataset.previousKeyType = 'decimal'
            }
            if (action === 'clearAll') {
                calculator.dataset.firstValue = '';
                calculator.dataset.modValue = '';
                calculator.dataset.operator = '';
                calculator.dataset.previousKeyType = '';
                displayValue.textContent = 0;
                calculator.dataset.previousKeyType = 'clearAll';
            }
            if (action === 'clearDisplay') {
                displayValue.textContent = 0;
                calculator.dataset.previousKeyType = 'clearDisplay';
            }
            if (action === 'calculate') {
                let firstValue = parseFloat(calculator.dataset.firstValue);
                const operator = calculator.dataset.operator;
                const secondValue = parseFloat(displaySelected);

                if (firstValue) {
                    if (previousKeyType === 'calculate') {
                        firstValue = displaySelected;
                        secondValue = calculator.dataset.modValue;
                    }
                    total = operate(firstValue, operator, secondValue);
                    displayValue.textContent = roundLongDecimals(total);
                }
                // Set modifier value attribute
                calculator.dataset.modValue = secondValue;
                calculator.dataset.previousKeyType = 'calculate'
            }
        }
    });
}


// let output = 0;
// let total = 0;
// let displayValue = "";
// let storedValue = "";
// let firstPart = 0;
// let secondPart = 0;
// let operatorChosen = "";
// let index = 0;

// const displayValueSelected = document.querySelector('.displayValue');
// const displayTotalValue = document.querySelector('.totalValueDisplay');

// const allInputs = document.querySelectorAll('.rows > button');

// const plusOperator = document.getElementById('plusOperator');
// const subtractOperator = document.getElementById('subtractOperator');
// const multiplyOperator = document.getElementById('multiplyOperator');
// const divideOperator = document.getElementById('divideOperator');
// const equalOperator = document.getElementById('equalOperator');
// const allOperators = document.getElementsByClassName('operators')
// const clearButton = document.getElementById('clearAll');

// for (const input of allInputs) {
//     input.addEventListener('click', function (e) {
//         if (e.target.value === '=') {

//         } else if (e.target.value === 'AC') {
//             clearAll();
//         } else if (e.target.value === 'C') {
//             clearDisplay();
//         }
//         else {
//             displayValue += e.target.value;
//             displayValueSelected.textContent = displayValue;
//             console.log(displayValue);
//         }
//     });
// }


// for (const allOperator of allOperators) {
//     allOperator.addEventListener('click', () => {
//         if (allOperator.value === plusOperator.value) {
//             storedValue = displayValue;
//             storedValue += plusOperator.value;
//             index = findPlusOperatorIndex();
//             firstPart = storedValue.slice(0, index);
//             operatorChosen = allOperator.value;
//         } if (allOperator.value === subtractOperator.value) {
//             storedValue = displayValue;
//             storedValue += subtractOperator.value;
//             index = findSubtractOperatorIndex();
//             firstPart = displayValue.slice(0, index);
//             operatorChosen = allOperator.value;
//         } if (allOperator.value === multiplyOperator.value) {
//             storedValue = displayValue;
//             storedValue += multiplyOperator.value;
//             index = findMultiplyOperatorIndex();
//             firstPart = displayValue.slice(0, index);
//             operatorChosen = allOperator.value;
//         } if (allOperator.value === divideOperator.value) {
//             storedValue = displayValue;
//             storedValue += divideOperator.value;
//             index = findDivideOperatorIndex();
//             firstPart = displayValue.slice(0, index);
//             operatorChosen = allOperator.value;

//         }
//     })
// }

// const sliceStringSecondPart = function () {
//     storedValue = displayValue;
//     storedValue += equalOperator.value;
//     console.log(storedValue);
//     console.log(index);
//     equalIndex = findEqualOperatorIndex();
//     secondPart = storedValue.slice(index + 1, equalIndex);
// }

// equalOperator.addEventListener('click', () => {
//     a = parseFloat(firstPart);
//     operator = operatorChosen;
//     sliceStringSecondPart();
//     b = parseFloat(secondPart);
//     operate(a, operator, b);
//     console.log(total);
//     displayTotalValue.textContent = total;
// });


// const findPlusOperatorIndex = function () {
//     const plusOperatorIndex = storedValue.indexOf(plusOperator.value);
//     return plusOperatorIndex;
// }

// const findSubtractOperatorIndex = function () {
//     const subtractOperatorIndex = storedValue.indexOf(subtractOperator.value);
//     return subtractOperatorIndex;
// }

// const findMultiplyOperatorIndex = function () {
//     const multiplyOperatorIndex = storedValue.indexOf(multiplyOperator.value);
//     return multiplyOperatorIndex;
// }

// const findDivideOperatorIndex = function () {
//     const divideOperatorIndex = storedValue.indexOf(divideOperator.value);
//     return divideOperatorIndex;
// }

// const findEqualOperatorIndex = function () {
//     const equalOperatorIndex = storedValue.indexOf(equalOperator.value);
//     return equalOperatorIndex;
// }


// const clearAll = function () {
//     total = 0;
//     displayValue = "";
//     storedValue = "";
//     displayValueSelected.textContent = displayValue;
//     displayTotalValue.textContent = storedValue;
// }

// const clearDisplay = function () {
//     displayValue = "";
//     storedValue = "";
//     displayValueSelected.textContent = displayValue;
// }


// _____________ TEST 2 ________________

// const calculator = document.querySelector('.calculator');
// const buttonKeys = calculator.querySelectorAll('.rows > button');
// const upperScreenDisplay = document.querySelector('.displayValue');

// let a = 0;
// let b = 0;
// let total = 0;

// for (const buttonKey of buttonKeys) {
//     buttonKey.addEventListener('click', e => {
//         if (e.target.matches('button')) {
//             const key = e.target;
//             const action = key.dataset.action;
//             const keyContent = key.textContent;
//             const previousKeyType = calculator.dataset.previousKeyType;
//             const displayedSelected = upperScreenDisplay.textContent;
//             if (!action) {
//                 if (displayedSelected === '0' || previousKeyType === 'operator') {
//                     upperScreenDisplay.textContent = keyContent;
//                 } else {
//                     upperScreenDisplay.textContent = displayedSelected + keyContent;
//                 }
//                 calculator.dataset.previousKeyType = 'number';
//             }
//             if (
//                 action === 'plus' ||
//                 action === 'subtract' ||
//                 action === 'multiply' ||
//                 action === 'divide' ||
//                 action === 'power'
//             ) {
//                 calculator.dataset.firstValue = displayedSelected
//                 calculator.dataset.operator = action
//                 calculator.dataset.previousKeyType = 'operator';

//             }
//             if (action === 'decimal') {
//                 if (!displayedSelected.includes('.')) {
//                     upperScreenDisplay.textContent = displayedSelected + '.'
//                 }
//                 if (previousKeyType === 'operator') {
//                     upperScreenDisplay.textContent = '0.'
//                 }
//                 calculator.dataset.previousKeyType = 'decimal';
//             }
//             if (action === 'clear') {
//                 console.log('clear');
//             }
//             if (action === 'clearAll') {
//                 console.log('clearAll');
//             }
//             if (action === 'calculate') {
//                 const firstValue = calculator.dataset.firstValue
//                 const operator = calculator.dataset.operator
//                 const secondValue = displayedSelected;
//                 a = firstValue;
//                 b = secondValue;
//                 total = operate(a, operator, b)
//                 upperScreenDisplay.textContent = total;
//             }

//         }
//     });
// }


// function roundLongDecimals(total) {
//     if (total.toString().indexOf('.') !== -1) {
//         if (total.toString().split('.')[1].length > 4) {
//             return total.toFixed(4);
//         }
//     }
//     return total;
// }
