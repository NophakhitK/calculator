let output = 0;
let total = 0;

const upperScreenValue = document.querySelector('.upperScreenDisplay');
const displayValueSelected = document.querySelector('.displayValue')

const allInputs = document.querySelectorAll('.inputButton');

const valueSelected = function () {
    for (const input of allInputs) {
        input.addEventListener('click', () => {
            displayValueSelected.textContent = input.textContent
        });
    }
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
    if (operator === "*") {
        multiply(a, b);
        total = output
        return total;
    }
    if (operator === "÷") {
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

