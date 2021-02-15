//Create operators for four buttons, add , subtract, multiply, divide
//allow these operators to be called from function of operate
//When clicking a number, place number into the input of the firstInput in operate function
//Once an operator button is pressed begin operator function, switch to secondInput
//gather input for second number
//when equal is pressed, preform function

/*
function add(x, y) {
  sum === undefined ? (sum = x + y) : (sum += x + y);
  outputValue.textContent = sum;
  clear();
}

function subtract(x, y) {
  sum === undefined ? (sum = x - y) : (sum += x - y);
  outputValue.textContent = sum;
  clear();
}

function multiply(x, y) {
  outputValue.textContent = x * y;
  sum === undefined ? (sum = x * y) : (sum += x * y);
  clear();
}

function divide(x, y) {
  outputValue.textContent = x / y;
  sum === undefined ? (sum = x / y) : (sum += x / y);
  clear();
}

function operate(func, n1, n2) {
  return func === "+"
    ? add(n1, n2)
    : func === "-"
    ? subtract(n1, n2)
    : func === "×"
    ? multiply(n1, n2)
    : func === "÷"
    ? divide(n1, n2)
    : "error";
}

function clear() {
  firstInput = undefined;
  secondInput = undefined;
  operating = undefined;
  sum = undefined;
}

//Number inputs
let firstInput;
let secondInput;
//operator input
let operating;
//sum input.
let sum;

let outputValue = document.querySelector("h2");

//Gets numbers from clicking on number buttons/
document.querySelectorAll(".number").forEach((item) => {
  item.addEventListener("click", getOperation);
});

//if the operating number has not been clicked, placed button value into firstInput, otherwise put it into secondInput
function getOperation(event) {
  if (operating === undefined) {
    //if the first input equals undefined, make firstInput equal to button press, otherwise add to firstInput value
    firstInput === undefined
      ? (firstInput = event.target.textContent)
      : (firstInput += event.target.textContent);
    console.log(firstInput);
    outputValue.innerText = firstInput;
    //If the operating value has been clicked, then start adding to the second value
  } else if (operating !== undefined) {
    secondInput === undefined
      ? (secondInput = event.target.textContent)
      : (secondInput += event.target.textContent);
    console.log(secondInput);
    outputValue.innerText = secondInput;
  }
}

//Event Listener for clicking on operators, gets operator for use
document.querySelectorAll(".operator").forEach((item) => {
  item.addEventListener("click", getOp);
});

function getOp(event) {
  if (firstInput !== undefined) {
    operating = event.target.textContent;
  }
  console.log(operating);
}

document
  .querySelector(".equals")
  .addEventListener("click", solveEquation, false);

function solveEquation() {
  if (sum !== undefined) {
    operate(Number(sum), Number(firstInput), Number(secondInput));
  } else {
    operate(operating, Number(firstInput), Number(secondInput));
  }
}

document.querySelector("#clear").addEventListener("click", clearAll, false);

function clearAll() {
  firstInput = undefined;
  secondInput = undefined;
  operating = undefined;
  sum = undefined;
  outputValue.innerText = 0;
}
*/

class Calculator {
  constructor(firstInput, secondInput, operator) {
    (this.firstInput = firstInput),
      (this.secondInput = secondInput),
      (this.operator = operator);
  }

  add() {
    sum === undefined
      ? (sum = this.firstInput + this.secondInput)
      : (sum = sum + this.secondInput);
    output.innerText = sum
    clear()

  }
  subtract() {
    sum === undefined
      ? (sum = this.firstInput - this.secondInput)
      : (sum = sum - this.secondInput);
      output.innerText = sum
      clear()

  }
  multiply() {
    sum === undefined
      ? (sum = this.firstInput * this.secondInput)
      : (sum = sum * this.secondInput);
      output.innerText = sum
      clear()

  }
  divide() {
    sum === undefined
      ? (sum = this.firstInput / this.secondInput)
      : (sum = sum / this.secondInput);
      output.innerText = sum
      clear()
  }

  operate() {
    this.operator === "+"
      ? this.add()
      : this.operator === "-"
      ? this.subtract()
      : this.operator === "×"
      ? this.multiply()
      : this.operator === "÷"
      ? this.divide()
      : console.log("ERR");
  }

}
document.querySelector('#clear').addEventListener('click', clearAll)

function clearAll(){
  inputOne = undefined
  inputTwo = undefined
  operatorSymbol = undefined
  sum = undefined
  output.innerText = 0
}

function clear(){
  inputOne = undefined
  inputTwo = undefined
  operatorSymbol = undefined
}

let output = document.querySelector('h2')
output.innerText = 0

document.querySelectorAll(".number").forEach((item) => {
  item.addEventListener("click", getData);
});
//get variables, undefined to start.
let inputOne;
let inputTwo;
let operatorSymbol;
let sum;

//get the ipput variables if they are undefined, first check if the operatorSymbol is undefined so we can get the first input
function getData(event) {
  if (operatorSymbol === undefined) {
    inputOne === undefined
      ? (inputOne = event.target.textContent)
      : (inputOne += event.target.textContent);
      output.innerText = inputOne
    console.log(inputOne);
  } else if (operatorSymbol !== undefined) {
    inputTwo === undefined
      ? (inputTwo = event.target.textContent)
      : (inputTwo += event.target.textContent);
      output.innerText = inputTwo
    console.log(inputTwo);
  }
}

document.querySelectorAll(".operator").forEach((item) => {
  item.addEventListener("click", getOperator);
});

function getOperator(event) {
  if (inputOne !== undefined) {
    operatorSymbol = event.target.textContent;
  } else if (operatorSymbol === undefined){
    operatorSymbol = event.target.textContent;

  }
  console.log(operatorSymbol);
}

document.querySelector(".equals").addEventListener("click", operating);

function operating() {
  if (sum === undefined) {
    let calc = new Calculator(Number(inputOne), Number(inputTwo), operatorSymbol);
    calc.operate();
  } else if (sum !== undefined){
    let calc = new Calculator(Number(sum), Number(inputTwo), operatorSymbol)
    calc.operate()
  }
}


