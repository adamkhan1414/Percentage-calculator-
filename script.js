function calculate() {
    const valueA = parseFloat(document.getElementById('valueA').value);
    const valueB = parseFloat(document.getElementById('valueB').value);
    const mode = document.getElementById('mode').value;
    let result = '';

    if (isNaN(valueA) || isNaN(valueB)) {
        result = 'Please enter valid numbers.';
    } else {
        switch (mode) {
            case 'percentOf':
                result = (valueA / 100) * valueB;
                break;
            case 'whatPercent':
                result = (valueA / valueB) * 100;
                break;
            case 'increase':
                result = valueB + (valueB * (valueA / 100));
                break;
            case 'decrease':
                result = valueB - (valueB * (valueA / 100));
                break;
        }
        result = 'Result: ' + result.toFixed(2);
    }

    document.getElementById('result').innerText = result;
}

function copyResult() {
    const resultText = document.getElementById('result').innerText;
    if (resultText && resultText !== 'Result will appear here') {
        navigator.clipboard.writeText(resultText);
        alert('Result copied to clipboard!');
    } else {
        alert('No result to copy.');
    }
}