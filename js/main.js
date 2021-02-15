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
    sum = Math.round((sum + Number.EPSILON) * 10000000) / 10000000
    output.innerText = sum
    clear()

  }
  subtract() {
    sum === undefined
      ? (sum = this.firstInput - this.secondInput)
      : (sum = sum - this.secondInput);
    sum = Math.round((sum + Number.EPSILON) * 10000000) / 10000000
    output.innerText = sum
    clear()

  }
  multiply() {
    sum === undefined
      ? (sum = this.firstInput * this.secondInput)
      : (sum = sum * this.secondInput);
    sum = Math.round((sum + Number.EPSILON) * 10000000) / 10000000   
    output.innerText = sum
    clear()

  }
  divide() {
    sum === undefined
      ? (sum = this.firstInput / this.secondInput)
      : (sum = sum / this.secondInput);
      sum = Math.round((sum + Number.EPSILON) * 10000000) / 10000000      
      output.innerText = sum
      clear()
  }
// does operation based on operatorSymbol 
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

//clears all variables to start fresh
function clearAll(){
  inputOne = undefined
  inputTwo = undefined
  operatorSymbol = undefined
  sum = undefined
  output.innerText = 0
}

//clears operating variables 
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
      : inputOne.length < 10
      ? (inputOne += event.target.textContent)
      : inputOne = inputOne
      ;
    
      output.innerText = inputOne
    console.log(inputOne);
  } else if (operatorSymbol !== undefined) {
    inputTwo === undefined
      ? (inputTwo = event.target.textContent)
      : inputTwo.length < 10
      ? (inputTwo += event.target.textContent)
      : inputTwo = inputTwo  
      output.innerText = inputTwo
    console.log(inputTwo);
  }
}

//listening for operator symbols to be clicked
document.querySelectorAll(".operator").forEach((item) => {
  item.addEventListener("click", getOperator);
});

//gets the operator and assigns it to operatorSymbol
function getOperator(event) {
  if (inputOne !== undefined) {
    operatorSymbol = event.target.textContent;
  } 
  if (operatorSymbol === undefined){
    operatorSymbol = event.target.textContent;
  }
  if(inputTwo !== undefined){
    operating()
    operatorSymbol = event.target.textContent;

  }
  console.log(operatorSymbol);
}

document.querySelector('#percent').addEventListener('click', percent)

function percent(){
  if (inputOne !== undefined){
    inputOne = inputOne / 100
    output.innerText = inputOne
  } else if (inputTwo !== undefined){
    inputTwo = inputTwo / 100
  } else if (sum !== undefined){
    sum = sum / 100
  }
}

document.querySelector('.plusminus').addEventListener('click', positiveNegative)

function positiveNegative(){
  if(output.innerText === inputOne){
    output.innerText = -inputOne
    inputOne = -inputOne

  } else if (output.innerText === inputTwo){
    output.innerText = -inputTwo
    inputTwo = -inputTwo

  } else if (output.innerText === sum){
    output.innerText = -sum
    sum = -sum

  } 
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
