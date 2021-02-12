//Create operators for four buttons, add , subtract, multiply, divide
//allow these operators to be called from function of operate
//When clicking a number, place number into the input of the firstInput in operate function
//Once an operator button is pressed begin operator function, switch to secondInput
//gather input for second number
//when equal is pressed, preform function

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
