function divi(a, b) {
    return a / b;
};

function mult(a, b) {
    return a * b;
};

function sub(a, b) {
    return a - b;
};

function add(a, b) {
    return a + b;
};

function operate(a, b, op) {
    a = parseFloat(a);
    b = parseFloat(b);

    switch(op) {
        case '+':
            return add(a, b);
        case '-':
            return sub(a, b);
        case '*':
            return mult(a, b);
        case '/':
            return divi(a, b);
        default:
            return "E0";
    };
};

function clicked(obj) {
    const display = document.querySelector(".display");

    q = obj.target.innerHTML;

    if (nums.includes(q)) {
        if (displayStatus == 0) {
            first += q;
        } else {
            second += q;
        }
    } else if (ops.includes(q) && displayStatus == 1) {
        first = operate(first, second, operation);
        operation = q;
        second = '';
    } else if (ops.includes(q) && displayStatus == 0) {
        displayStatus = 1;
        operation = q;
    } else if (q === '=') {
        displayStatus = 2;
    }

    if (displayStatus == 0) {
        display.innerHTML = first;
    } else if (displayStatus == 1) {
        display.innerHTML = second;
    } else if (displayStatus == 2) {
        display.innerHTML = operate(first, second, operation);
        displayStatus = 0;
        first = '';
        second = '';
        operation = 'E';
    }
};

function main() {
    const frame = document.querySelector(".frame");
    const display = document.querySelector(".display");
    const buttons = document.querySelector(".buttons");

    frame.style.background = 'green';

    display.style.margin = "8px";
    display.style.height = '48px';
    display.style.color = 'white';
    display.style.padding = "16px";

    display.innerHTML = '0';

    for (let i = 0; i < 5; i++) {
        let row = document.createElement("div");
        buttons.appendChild(row);
        for (let h = 0; h < 4; h++) {
            let btn = document.createElement("button");
            row.appendChild(btn);
            btn.classList.add(`${i}${h}`);
        }
    }

    const btns = document.querySelectorAll("button");

    btns.forEach(function(n) {
        switch(parseInt(n.classList)) {
            case 0:
                n.innerHTML = "7";
                break;
            case 1:
                n.innerHTML = "8";
                break;
            case 2:
                n.innerHTML = "9";
                break;
            case 3:
                n.innerHTML = "*";
                break;
            case 10:
                n.innerHTML = "4";
                break;
            case 11:
                n.innerHTML = "5";
                break;
            case 12:
                n.innerHTML = "6";
                break;
            case 13:
                n.innerHTML = "/";
                break;
            case 20:
                n.innerHTML = "1";
                break;
            case 21:
                n.innerHTML = "2";
                break;
            case 22:
                n.innerHTML = "3";
                break;
            case 23:
                n.innerHTML = "+";
                break;
            case 30:
                n.innerHTML = "0";
                break;
            case 31:
                n.innerHTML = ".";
                break;
            case 32:
                n.innerHTML = "";
                break;
            case 33:
                n.innerHTML = "-";
                break;
            case 43:
                n.innerHTML = "=";
                break;
        };

        n.addEventListener("click", clicked);
    });


};

let operation = "E";
let displayStatus = 0;
let first = '';
let second = '';
const nums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.'];
const ops = ['+', '-', '*', '/'];

main();