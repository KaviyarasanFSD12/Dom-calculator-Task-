// const $ = document.querySelector.bind(document);
// const $_ = document.querySelectorAll.bind(document);

// let operation = {
//   num1: '',
//   num2: '',
//   operator: null
// };

// const sum = () => parseFloat(currentOperation.num1) + parseFloat(currentOperation.num2);
// const subtract = () => parseFloat(currentOperation.num1) - parseFloat(currentOperation.num2);
// const multiply = () => parseFloat(currentOperation.num1) * parseFloat(currentOperation.num2);
// const divide = () => parseFloat(currentOperation.num1) / parseFloat(currentOperation.num2);
// const show = (i) => $('#display').innerText = i;
// const showIncremental = (i) => $('#display').innerText += i;
// const showPrev = (i) => $('#prev').innerText += i;
// const deleteLastPrev = () => $('#prev').innerText = $('#prev').innerText.slice(0, -1);
// const getFormula = () => $('#prev').innerText;
// const hasOperator = () => $('#prev').innerText.endsWith('+') || $('#prev').innerText.endsWith('-') || $('#prev').innerText.endsWith('*') || $('#prev').innerText.endsWith('/');
// const isOperator = (i) => ['+', '-', '*', '/'].indexOf(i) !== -1;
// const hasMinus = () => $('#prev').innerText.endsWith('-');

// const updateDisplay = (input) => {
//   if($('#display').innerText.includes('.') && input === '.') {
//     return;
//   }
//   operation.num1 === '' ? operation.num1 += input : operation.num2 += input;
//   showPrev(input);
//   $('#display').innerText.startsWith('0') ? show(input) : showIncremental(input);
// }

// const addOperator = (input) => {
//   if (operation.num1 === '') {
//     if(input !== '-') {
//       return;
//     }
//   } else {
//     if(operation.operator === null) {
//       operation.operator = input;
//       return;
//     }
//   } 

//   const currentFormula = $('#prev').innerText;
//   if (hasOperator() && isOperator(input)) {
//     if(input !== '-' || hasMinus()) {
//       while(hasOperator()) {
//         deleteLastPrev();
//       }
//     }
//   }
//   showPrev(input);
//   show(input);
// }

// const calc = () => {
//   if (operation.num1 == '' || operation.num2 == '' || operation.operator === null) return;

//   const result = eval(getFormula()).toString();
//   show(result);
//   $('#prev').innerText = result;
//   currentOperation = {
//     num1: 0,
//     num2: 0,
//     operator: null
//   }
// }

// const clearDisplay = () => {
//   show(0);
//   $('#prev').innerHTML = `&nbsp`;
//   currentOperation = {
//     num1: null,
//     num2: null,
//     operator: null
//   }
// }

// const deleteDigit = () => {
//   show($('#display').innerText.slice(0, -1));
//   $('#prev').innerText = $('#prev').innerText.slice(0, -1);
//   if($('#display').innerText.length <= 0) {
//     show(0);
//     $('#prev').innerHTML = '&nbsp;';
//   }
// }

// $('#clear').addEventListener('click', () => clearDisplay());
// $('#clearLine').addEventListener('click', () => $('#display').innerText = '0');
// $_('.digit').forEach((d) => d.addEventListener('click', (e) => updateDisplay(e.target.innerText)));
// $_("[data-operation]").forEach( o => o.addEventListener('click', (e) => addOperator(e.target.innerText)));
// $('#equals').addEventListener('click', () => calc());
// $('#backspace').addEventListener('click', () => deleteDigit());
// Function that display value
function dis(val) {
    document.getElementById("result").value += val
}

function myFunction(event) {
    if (event.key == '0' || event.key == '1'
        || event.key == '2' || event.key == '3'
        || event.key == '4' || event.key == '5'
        || event.key == '6' || event.key == '7'
        || event.key == '8' || event.key == '9'
        || event.key == '+' || event.key == '-'
        || event.key == '*' || event.key == '/')
        document.getElementById("result").value += event.key;
}

var cal = document.getElementById("calcu");
cal.onkeyup = function (event) {
    if (event.keyCode === 13) {
        console.log("Enter");
        let x = document.getElementById("result").value
        console.log(x);
        solve();
    }
}

// Function that evaluates the digit and return result
function solve() {
    let x = document.getElementById("result").value
    let y = math.evaluate(x)
    document.getElementById("result").value = y
}

// Function that clear the display
function clr() {
    document.getElementById("result").value = ""
}