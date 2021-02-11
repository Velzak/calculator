//Create operators for four buttons, add , subtract, multiply, divide
//allow these operators to be called from function of operate
//When clicking a number, place number into the input of the num1 in operate function 
//Once an operator button is pressed begin operator function, switch to num2
//gather input for second number
//when equal is pressed, preform function 


function add(x, y) {
  return x + y;
}

function subtract(x, y) {
  return x - y;
}

function multiply(x, y) {
  return x * y;
}

function divide(x, y) {
  return x / y;
}

function operate(func, n1, n2) {
  return func === add
    ? add(n1, n2)
    : func === subtract
    ? subtract(n1, n2)
    : func === multiply
    ? multiply(n1, n2)
    : func === divide
    ? divide(n1, n2)
    : "error";
}

let num1 = 0;

document.querySelectorAll(".btn").forEach((item) => {
  item.addEventListener("click", getData)
})

function getData(event) {
    num1 += event.target.textContent
    console.log(num1)
};





