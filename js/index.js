$(document).ready(function(){
    $("button").click(function(){
        if (!isNaN($(this).text())){
            paintDisplay(addToDisplay($(this).text()));
            operation.numberPresed = true;
        } else {
            comprubeOperator($(this).attr('data-action'));
        } 
    });
});

const operation = {
    num1: 0,
    num2: 0,
    operator: 'add'
}

const resetOperation = {
    num1: 0,
    num2: 0,
    operator: 'add'
}

function decimal(display) {
    if (!display.includes('.'))
        return display + '.';
}

const actions = {
    add: function () { operation.operator = 'add'; saveOldNumber(); },
    subtract: function () { operation.operator = 'subtract'; saveOldNumber(); },
    multiply: function () { operation.operator = 'multiply'; saveOldNumber(); },
    divide: function () { operation.operator = 'divide'; saveOldNumber(); },
    decimal: function () { paintDisplay(decimal($('.calculator__display').text())); },
    clear: function () { clear(); },
    calculate: function () { calculate(); }
  };

function calculate() {
    operation.numberPresed = false;
    operation.num1 = parseFloat($('.calculator__display').text());
    operations[operation.operator](operation);
    operation.num2 = resetOperation.num2;
}

const operations = {
    add: function (operation) { paintDisplay(add(operation)); },
    subtract: function (operation) { paintDisplay(subtract(operation)); },
    multiply: function (operation) { paintDisplay(multiply(operation)); },
    divide: function (operation) { paintDisplay(divide(operation)); }
};  

function saveOldNumber() {
    num = parseFloat($('.calculator__display').text());
            
    if (0 != num){
        operation.num2 = num;
        paintDisplay(0);
    }
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

    return (newNumber);
}


function clear() {
    operation.num1 = resetOperation.num1;
    operation.num2 = resetOperation.num2;
    operation.operator = resetOperation.operator;
    paintDisplay(operation.num1);
};

function add(operation) {
    return (operation.num1 + operation.num2);
}

function subtract(operation) {
    return (operation.num1 - operation.num2);
}

function multiply(operation) {
    return (operation.num1 * operation.num2);
}

function divide(operation) {
    return (operation.num1 / operation.num2);
}
