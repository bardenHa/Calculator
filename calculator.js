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
    return n1 / 100;
}

function opposite(n1) {
    return n1 * -1;
}

function dot(n1) {
    return n1 + '.';
}

function operate(operator,n1,n2) {
    switch(operator) {
        case operator = 'add':
          return add(n1,n2);
          break;
        case operator = 'sub':
          return sub(n1,n2);
          break;
        case operator = 'multiply':
          return multiply(n1,n2);
          break;
        case operator = 'divide':
          return divide(n1,n2);
          break;
        default:
          return 'Operator not found'
      }
}

const display = document.getElementById('Display')
let firstNumber = 0;
let secondNumber = 0; 
let operatorUsed = false;

//Updates first number
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
        alert('Only one operator can be used per calculation.')
    }
    else {
        firstNumber = getFirstNumber();
        addToDisplay(operator);
        operatorUsed = true;
    }
}