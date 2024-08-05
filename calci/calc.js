
const display = document.getElementById('display');

function calculateResult() {
    try {
        display.value = eval(display.value.replace(/[^-()\d/*+.]/g, '')); 
    } catch (e) {
        alert('Invalid expression');
        display.value = '';
    }
}

function clearDisplay() {
    display.value = '';
}

function appendNumber(number) {
    display.value += number;
}

function appendOperator(operator) {
    const lastChar = display.value.slice(-1);
    
    if (['+', '-', '*', '/'].includes(lastChar)) {
        display.value = display.value.slice(0, -1) + operator;
    } else {
        display.value += operator;
    }
}
