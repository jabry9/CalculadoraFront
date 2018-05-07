let operator = 'add';
let oldDisplay = 0;

$(document).ready(function(){
    $("button").click(function(){
        if (!isNaN($(this).text()))
            addToDisplay($(this).text());
        else 
            comprubeOperator($(this).attr('data-action'));
    });

});

function decimal() {
    var display = $('.calculator__display').text();
    if (comprobeDecimal(display))
        paintDisplay(display + '.');
}

function comprobeDecimal(display) {
    var arrayDisplay = display.split("");
    var dontHaveDot = false;
    if (-1 == arrayDisplay.indexOf("."))
        dontHaveDot = true;
    return dontHaveDot;
}
const actions = {
    add: function () { operator = 'add'; saveOldNumber(); },
    subtract: function () { operator = 'subtract'; saveOldNumber(); },
    multiply: function () { operator = 'multiply'; saveOldNumber(); },
    divide: function () { operator = 'divide'; saveOldNumber(); },
    decimal: function () { decimal(); },
    clear: function () { clear(); },
    calculate: function () { calculate(); }
  };

function calculate() {
    num1 = parseFloat($('.calculator__display').text());
    num2 = parseFloat(oldDisplay);
    operations[operator](num1, num2);
}

const operations = {
    add: function (num1, num2) { add(num1, num2); },
    subtract: function (num1, num2) { subtract(num1, num2); },
    multiply: function (num1, num2) { multiply(num1, num2); },
    divide: function (num1, num2) { divide(num1, num2); }
};  

function saveOldNumber() {
    oldDisplay = $('.calculator__display').text();
    paintDisplay(0);
}

function comprubeOperator(operator1) {
    actions[operator1]();
}

function paintDisplay(num) {
    $('.calculator__display').text(num);
}

function addToDisplay(number) {
    let oldNumber = $('.calculator__display').text();

    if (oldNumber == 0)
        oldNumber = '';

    let newNumber = oldNumber + number;

    if (oldNumber.length > 10)
            newNumber = oldNumber;

    paintDisplay(newNumber);
    
}


function clear() {
    oldDisplay = 0;
    paintDisplay(0);
};

function add(num1, num2) {
    paintDisplay(num1 + num2);
}

function subtract(num1, num2) {
    paintDisplay(num1 - num2);
}

function multiply(num1, num2) {
    paintDisplay(num1 * num2);
}

function divide(num1, num2) {
    paintDisplay(num1 / num2);
}
