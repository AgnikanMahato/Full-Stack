let display = document.getElementById('display');
let currentInput = '';
let currentOperator = '';
let firstOperand = '';

function appendNumber(number) {
    if (currentInput.length <= 9) {  // Limit input to 10 digits
        currentInput += number;
        appendToDisplay(currentInput);
    }
}

function appendToDisplay(value) {
    // Display the value to the screen and ensure it fits in the display box
    display.innerHTML = value.toString().slice(0, 10);  // Show a max of 10 characters
}

function clearDisplay() {
    currentInput = '';
    firstOperand = '';
    currentOperator = '';
    appendToDisplay('0');
}

function deleteLastCharacter() {
    // Remove the last character from the current input
    if (currentInput.length > 0) {
        currentInput = currentInput.slice(0, -1);
        appendToDisplay(currentInput || '0');  // Show '0' if input is empty
    }
}

function toggleSign() {
    if (currentInput) {
        currentInput = (parseFloat(currentInput) * -1).toString();
        appendToDisplay(currentInput);
    }
}

function inputOperator(operator) {
    if (currentInput !== '') {
        firstOperand = currentInput;
        currentOperator = operator;
        currentInput = '';
        appendToDisplay(operator);  // Optionally show the operator in the display
    }
}

function calculate() {
    if (firstOperand && currentOperator && currentInput) {
        let result;
        switch (currentOperator) {
            case '+':
                result = parseFloat(firstOperand) + parseFloat(currentInput);
                break;
            case '-':
                result = parseFloat(firstOperand) - parseFloat(currentInput);
                break;
            case '*':
                result = parseFloat(firstOperand) * parseFloat(currentInput);
                break;
            case '/':
                result = parseFloat(firstOperand) / parseFloat(currentInput);
                break;
            default:
                return;
        }
        currentInput = result.toString();
        appendToDisplay(currentInput);
        firstOperand = '';
        currentOperator = '';
    }
}
