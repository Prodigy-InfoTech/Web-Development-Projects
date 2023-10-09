function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function deleteLastDigit() {
    let displayValue = document.getElementById('display').value;
    if (displayValue.length > 0) {
        displayValue = displayValue.slice(0, -1);
        document.getElementById('display').value = displayValue;
    }
}

function calculate() {
    try {
        const result = eval(document.getElementById('display').value);
        document.getElementById('display').value = result;
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}