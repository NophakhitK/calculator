const calculator = document.querySelector('.calculator');
const buttonKeys = calculator.querySelectorAll('.rows > button');
const upperScreenDisplay = document.querySelector('.displayValue');

let a = 0;
let b = 0;
let total = 0;

for (const buttonKey of buttonKeys) {
    buttonKey.addEventListener('click', e => {
        if (e.target.matches('button')) {
            const key = e.target;
            const action = key.dataset.action;
            const keyContent = key.textContent;
            const previousKeyType = calculator.dataset.previousKeyType;
            const displayedSelected = upperScreenDisplay.textContent;
            if (!action) {
                if (displayedSelected === '0' || previousKeyType === 'operator') {
                    upperScreenDisplay.textContent = keyContent;
                } else {
                    upperScreenDisplay.textContent = displayedSelected + keyContent;
                }
                calculator.dataset.previousKeyType = 'number';
            }
            if (
                action === 'plus' ||
                action === 'subtract' ||
                action === 'multiply' ||
                action === 'divide' ||
                action === 'power'
            ) {
                calculator.dataset.firstValue = displayedSelected
                calculator.dataset.operator = action
                calculator.dataset.previousKeyType = 'operator';

            }
            if (action === 'decimal') {
                if (!displayedSelected.includes('.')) {
                    upperScreenDisplay.textContent = displayedSelected + '.'
                }
                if (previousKeyType === 'operator') {
                    upperScreenDisplay.textContent = '0.'
                }
                calculator.dataset.previousKeyType = 'decimal';
            }
            if (action === 'clear') {
                console.log('clear');
            }
            if (action === 'clearAll') {
                console.log('clearAll');
            }
            if (action === 'calculate') {
                const firstValue = calculator.dataset.firstValue
                const operator = calculator.dataset.operator
                const secondValue = displayedSelected;
                a = firstValue;
                b = secondValue;
                total = operate(a, operator, b)
                upperScreenDisplay.textContent = total;
            }

        }
    });
}




const add = function (a, b) {
    return output = parseFloat(a) + parseFloat(b);
};

const subtract = function (a, b) {
    return output = parseFloat(a) - parseFloat(b);
}

const multiply = function (a, b) {
    return output = parseFloat(a) * parseFloat(b);
}

const divide = function (a, b) {
    return output = parseFloat(a) / parseFloat(b);
}

const power = function (a, b) {

    return output = (parseFloat(a)) ** (parseFloat(b));

}

const operate = function (a, operator, b) {
    if (operator === "plus") {
        add(a, b);
        total = output;
        return roundLongDecimals(total);
    }
    if (operator === "subtract") {
        subtract(a, b);
        total = output;
        return roundLongDecimals(total);
    }
    if (operator === "multiply") {
        multiply(a, b);
        total = output
        return roundLongDecimals(total);
    }
    if (operator === "divide") {
        divide(a, b);
        total = output;
        return roundLongDecimals(total);
    }
    if (operator === 'power') {
        power(a, b)
        total = output;
        return roundLongDecimals(total);
    }
    return total;
};

function roundLongDecimals(total) {
    if (total.toString().indexOf('.') !== -1) {
        if (total.toString().split('.')[1].length > 4) {
            return total.toFixed(4);
        }
    }
    return total;
}
