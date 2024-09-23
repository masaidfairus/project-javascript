// these variables hold the values used in the calculator
let displayValue = ''; // holds the value display on the calculator screen
let num1 = ''; // hold the first number for calculator
let num2 = ''; // holds the second number for calculator
let operator = ''; // holds the operator (+,-,*,-/) for the calculator

// this function appends the clicked button value to the calculator display

function appendToDisplay(value) {
    if (value === '=' && num1 !== ''&& num2 !== '') {
        calculate();
        requestAnimationFrame;
    }

    if (value === 'c'){
        clearDisplay()
        return;
    }

    displayValue += value
    document.getElementById('display').value = displayValue;

    if (!isNaN(value)){
        if (!operator) {
            num1 += value;   
        }else{
            num2 += value;
        }
    }else {
        if (value !== '.' && !operator){
            operator = value;
        }
    }
}

function calculate (){
    let result;
    switch(operator){
    case'+':
        result = parseFloat(num1) + parseFloat(num2);
        break;
    case'-':
        result = parseFloat(num1) - parseFloat(num2);
        break;
    case'*':
        result = parseFloat(num1) * parseFloat(num2);
        break;
    case'/':
        result = parseFloat(num1) / parseFloat(num2);
        break;
    }

    document.getElementById('display').value = result;
    num1 = result.toString();

    num2 = '';
    operator = '';
}

function clearDisplay(){
    displayValue = '';
    num1 = '';
    num2 = '';
    operator = '';
    document.getElementById('display').value = displayValue;
}