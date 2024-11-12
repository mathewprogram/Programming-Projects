//Calculator functions.

function updateDisplay() {
    const x = document.querySelector(".display").textContent;
    document.querySelector(".display").textContent = x;
}

function clearDisplay() {
    document.querySelector(".display").textContent = "";
    document.querySelector(".result").textContent = "";
}

function appendNumber(number) {
    document.querySelector(".display").textContent += number;
    document.querySelector(".result").textContent += number;
}

function appendOperator(operator) {
    document.querySelector(".display").textContent += operator;
    document.querySelector(".result").textContent += operator;
}

function calculate() {
    const x = document.querySelector(".display").textContent;
    const y = document.querySelector(".result").textContent;
    document.querySelector(".display").textContent = operate(x, y);
}

function backspace() {
    const x = document.querySelector(".display").textContent;
    document.querySelector(".display").textContent = x.slice(0, -1);
}

function operate(x, y) {
    x = Number(x);
    y = Number(y);
    switch (document.querySelector(".display").textContent.slice(-1)) {
        case "+":
            return x + y;
        case "-":
            return x - y;
        case "*":
            return x * y;
        case "/":
            return x / y;
        default:
            return y;
    }
}



