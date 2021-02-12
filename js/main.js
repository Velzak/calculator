//Create operators for four buttons, add , subtract, multiply, divide
//allow these operators to be called from function of operate
//When clicking a number, place number into the input of the num1 in operate function
//Once an operator button is pressed begin operator function, switch to num2
//gather input for second number
//when equal is pressed, preform function

function add(x, y) {
   outputValue.textContent = x + y
}

function subtract(x, y) {
  outputValue.textContent = x - y
}

function multiply(x, y) {
  outputValue.textContent = x * y
}

function divide(x, y) {
  outputValue.textContent = x / y
}

function operate(func, n1, n2) {
  return func === '+'
    ? add(n1, n2)
    : func === '-'
    ? subtract(n1, n2)
    : func === '×'
    ? multiply(n1, n2)
    : func === '÷'
    ? divide(n1, n2)
    : "error";
}

let firstInput;
let secondInput;
let operating;

let outputValue = document.querySelector('h2');

// document.querySelectorAll(".btn").forEach((item) => {
//   item.addEventListener("click", getData)
// })

// function getData(event) {
//   if (operating === undefined){
//     num1 += event.target.textContent
//     console.log(num1)
//   }
// };

//Gets numbers from clicking on number buttons/
document.querySelectorAll(".number").forEach((item) => {
  item.addEventListener("click", getData);
});

//if the operating number has not been clicked, placed button value into firstInput, otherwise put it into secondInput
function getData(event) {
  if (operating === undefined) {
    //if the first input equals undefined 
    firstInput === undefined
      ? (firstInput = event.target.textContent)
      : (firstInput += event.target.textContent);
    console.log(firstInput);
    outputValue.innerText = firstInput
  } else if (operating !== undefined) {
    secondInput === undefined
      ? (secondInput = event.target.textContent)
      : (secondInput += event.target.textContent);
    console.log(secondInput);
    outputValue.innerText = secondInput
  } else {

  }
}

//Event Listener for clicking on operators, 
document.querySelectorAll(".operator").forEach((item) => {
  item.addEventListener("click", getOp);
});

function getOp(event) {
  if(firstInput !== undefined){
    operating = event.target.textContent;
  }
  console.log(operating);
}

document.querySelector(".equals").addEventListener("click", solveEquation, false)

function solveEquation(){
  operate(operating, Number(firstInput), Number(secondInput))
}