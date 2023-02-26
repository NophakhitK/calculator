const calculator = document.querySelector('.calculator');
const buttonKeys = calculator.querySelectorAll('.rows > button')

for (const buttonKey of buttonKeys) {
    buttonKey.addEventListener('click', function (e) {
        const key = e.target;
        const action = key.dataset.action;
        if (action === 'plus') {
            console.log('plus');
        }
        if (action === 'subtract') {
            console.log('subtract');
        }
        if (action === 'multiply') {
            console.log('multiply');
        }
        if (action === 'divide') {
            console.log('divide');
        }
        if (action === 'percentage') {
            console.log('percentage');
        }
        if (action === 'decimal') {
            console.log('decimal');
        }
        if (action === 'clear') {
            console.log('clear');
        }
        if (action === 'clearAll') {
            console.log('clearAll');
        }
        if (action === 'calculate') {
            console.log('calculate')
        }
        if (!action) {
            console.log('NOT ACTION');
        }
    });
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

