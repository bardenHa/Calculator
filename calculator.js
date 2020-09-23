/*
Plan:
1- Create basic functions for math operators
2- Create a function 'operate' which takes an operator and 2 numbers and calls the previous function on those numbers
3- Set up DOM for each button
4- Create functions that adds to the display when clicking each button, store the display value in a variable
5- Store the whole number on the display when the user presses an operator and save which operator has been chosen. Then
   create a variable to store the second number typed when the user presses the 'equals' key. Then call the 'operate' function.
6- Update the display with the answer
*/

function add(n1,n2) {
    return n1 + n2;
}

function sub(n1,n2) {
    return n1 - n2;
}

function multiply(n1,n2) {
    return n1 * n2;
}

function divide(n1,n2) {
    return n1 / n2;
}

function percent(n1) {
    percentNumber = n1 / 100;
    clearDisplay();
    display.innerHTML = percentNumber;
}

function opposite(n1) {
    const oppositeNumber =  n1 * -1;
    display.innerHTML = ""
    display.innerHTML = oppositeNumber;
}

function operate(operator,n1,n2) {
    //converts strings to numbers
    n1 = Number(n1);
    n2 = Number(n2);

    switch(operator) {
        case operator = 'Plus':
          return add(n1,n2);
          break;
        case operator = 'Minus':
          return sub(n1,n2);
          break;
        case operator = 'Multiply':
          return multiply(n1,n2);
          break;
        case operator = 'Divide':
          return divide(n1,n2);
          break;
        default:
          alert('Operator not found');
      }
}

const display = document.getElementById('Display')
let firstNumber = 0;
let secondNumber = 0; 
let operatorUsed = false;
let operatorSign = '';

//Gets value on display
function getFirstNumber() {
    return display.innerHTML
}

function clearDisplay() {
    display.innerHTML = "";
    operatorUsed = false;
}

function addToDisplay(id) {
    //Checks for multiple decimals
    display.innerHTML.includes('.') && id == 'Dot' ? alert('Cannot add multiple decimal points.') :
    //Adds value to the display
    display.innerHTML = display.innerHTML.concat(document.getElementById(id).value);
}

function addOperatorToDislay(operator) {
    if (operatorUsed) {
        //alert('Only one operator can be used per calculation.')
        //For multiple calculations:
        equals();
        operatorSign = operator;
        addOperatorToDislay(operatorSign);
    }
    else {
        firstNumber = getFirstNumber();
        operatorUsed = true;
        operatorSign = operator;
        display.innerHTML = "";
    }
}

function equals() {
    if (operatorUsed) {
    secondNumber = getFirstNumber();
    const result = operate(operatorSign, firstNumber, secondNumber);
    //Rounds answers to 8 dp
    const roundedResult = Math.round(result * 100000000) / 100000000;
    display.innerHTML = roundedResult;
    operatorUsed = false;
    }
    else {
        alert('No operator chosen');
        operatorUsed = false;
    }
}

function deleteNumber() {
    const text = display.innerHTML;
    const deletedText = text.slice(0, -1);
    display.innerHTML = "";
    display.innerHTML = deletedText;
}

//Keyboard compatability:
window.addEventListener('keydown', (e) => {
    keyPressed = e.key;
    switch(keyPressed) {
        case keyPressed = 'c':
          return clearDisplay();
          break;
        case keyPressed = 'Backspace':
          return deleteNumber();
          break;
        case keyPressed = '/':
          return addOperatorToDislay('Divide');
          break;
        case keyPressed = '*':
          return addOperatorToDislay('Multiply');
          break;
        case keyPressed = '%':
          return percent(getFirstNumber());
          break;
        case keyPressed = '-':
          return addOperatorToDislay('Minus');
          break;
        case keyPressed = '+':
          return addOperatorToDislay('Plus');
          break;
        case keyPressed = '.':
          return addToDisplay('Dot');
          break;
        case keyPressed = 'Enter':
          return equals();
          break;
        case keyPressed = '1':
          return addToDisplay('1');
          break;
        case keyPressed = '2':
          return addToDisplay('2');
          break;
        case keyPressed = '3':
          return addToDisplay('3');
          break;
        case keyPressed = '4':
          return addToDisplay('4');
          break;
        case keyPressed = '5':
          return addToDisplay('5');
          break;
        case keyPressed = '6':
          return addToDisplay('6');
          break;
        case keyPressed = '7':
          return addToDisplay('7');
          break;  
        case keyPressed = '8':
          return addToDisplay('8');
          break;
        case keyPressed = '9':
          return addToDisplay('9');
          break;
        case keyPressed = '0':
          return addToDisplay('0');
          break;
        default:
      }
});
