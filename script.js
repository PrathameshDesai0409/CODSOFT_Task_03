let display = document.getElementById('display');

function clearDisplay() {
    display.innerText = '0';
}

function deleteLast() {
    if (display.innerText.length > 1) {
        display.innerText = display.innerText.slice(0, -1);
    } else {
        display.innerText = '0';
    }
}

function appendNumber(number) {
    if (display.innerText === '0') {
        display.innerText = number;
    } else {
        display.innerText += number;
    }
}

function appendOperator(operator) {
    const lastChar = display.innerText.slice(-1);
    if ('+-*/'.includes(lastChar)) {
        display.innerText = display.innerText.slice(0, -1) + operator;
    } else {
        display.innerText += operator;
    }
}

function appendParenthesis(parenthesis) {
    display.innerText += parenthesis;
}

function appendFunction(func) {
    display.innerText += func + '('; // Append the function and an opening parenthesis
}

function calculateResult() {
    try {
        let result = evaluateExpression(display.innerText);
        display.innerText = result.toFixed(8); // Limit decimal places to 8
    } catch {
        display.innerText = 'Error';
    }
}

function evaluateExpression(expression) {
    // Replace the function names with their actual JavaScript equivalents
    expression = expression.replace(/sqrt/g, 'Math.sqrt');
    expression = expression.replace(/sin/g, 'Math.sin');
    expression = expression.replace(/cos/g, 'Math.cos');
    expression = expression.replace(/tan/g, 'Math.tan');

    return eval(expression);
}
