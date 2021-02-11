function add(x, y){
    return x + y
}

function subtract(x, y){
    return x - y
}

function multiply(x, y){
    return x * y
}

function divide(x, y){
    return x / y
}

function operate(func, n1, n2){
    return func === add ? add(n1, n2) : func === subtract ? subtract(n1, n2) : func === multiply ? multiply(n1, n2) : func === divide ? divide(n1, n2) : 'error'
}

console.log(operate(divide, 5, 4))