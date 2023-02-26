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
            const displayedSelected = upperScreenDisplay.textContent
            const previousKeyType = calculator.dataset.previousKeyType
            if (!action) {
                if (displayedSelected === '0' || previousKeyType === 'operator') {
                    upperScreenDisplay.textContent = keyContent;
                } else {
                    upperScreenDisplay.textContent = displayedSelected + keyContent;
                }
            }

            if (
                action === 'plus' ||
                action === 'subtract' ||
                action === 'multiply' ||
                action === 'divide' ||
                action === 'percentage'
            ) {
                buttonKey.classList.add('pressed');
                calculator.dataset.firstValue = displayedSelected
                console.log(displayedSelected);
                calculator.dataset.operator = action
                console.log(action);
                calculator.dataset.previousKeyType = 'operator';
            }
            if (action === 'decimal') {
                if (!displayedSelected.includes('.'))
                    upperScreenDisplay.textContent = displayedSelected + '.'
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

const operate = function (a, operator, b) {
    if (operator === "plus") {
        add(a, b);
        total = output;
        return total;
    }
    if (operator === "subtract") {
        subtract(a, b);
        total = output;
        return total;
    }
    if (operator === "multiply") {
        multiply(a, b);
        total = output
        return total;
    }
    if (operator === "divide") {
        divide(a, b);
        total = output;
        return total;
    }
    return total;
};

