'use strict'

//функции вычислений
function doPlus (a) {
  return function (b) {
    return a + b;
  };
}

function doMinus (a) {
  return function (b) {
    return a - b;
  };
}

function doMulti (a) {
  return function (b) {
    return a * b;
  };
}

function doDivision (a) {
  return function (b) {
    return a / b;
  };
}

function doPercent (a) {
    return function (b) {
      return a * (b / 100);
    };
}

function doPow (a) {
    return function (b) {
      return a ** b;
    };
}
//сразу возвращает результат из значений в памяти
function doResult () {
    sValue = +display.innerHTML;
    result = calcFunction(fValue)(sValue);
    display.innerHTML = result;
    display.classList.remove('inProgress');
    display.classList.add('result');
    fValue = result;
}

//корень, извлекается из значения на экране
function doSqrt () {
    sValue = +display.innerHTML;
    result = Math.sqrt(sValue);
    display.innerHTML = result;
    display.classList.remove('inProgress');
    display.classList.add('result');
    fValue = result;
}

//добавление/удаление минуса
function pmReverse () {
    if (display.innerHTML.length === 0) return;

    if (display.innerHTML.indexOf('-') === 0) {
        display.innerHTML = display.innerHTML.slice(1);
        return;
    }
    
    display.insertAdjacentHTML('afterBegin', '-');
}

//удаления предыдущего элемента
function delPrevious () {
    display.innerHTML = display.innerHTML.slice(0, display.innerHTML.length - 1);
    if (display.innerHTML.length === 1 && display.innerHTML.indexOf('-') === 0) display.innerHTML = '';
}

//очистка всего
function clearAll () {
    display.innerHTML = ''
    fValue = undefined;
    sValue = undefined;
    calcFunction = undefined;
    result = undefined;
    display.classList.remove('inProgress');
    display.classList.remove('result');
}

//переменные
var fValue;
var sValue;
var calcFunction;
var result;
var memory;

//переменная экрана
var display = document.getElementById('display');
    
//добавление цифры/точки при нажатии кнопки
function addNum (event) {
    if (display.className === 'result') {
        display.innerHTML = '';
        display.classList.remove('result');
        display.classList.add('inProgress');
    }
   
    if (event.target.value === '.') {addDot(); return;};
    if (event.target.value === '0') {addZero(); return;};

    if (display.innerHTML.indexOf('0') === 0 && display.innerHTML.length === 1) {
     display.innerHTML = display.innerHTML.slice(1);
    }
    display.insertAdjacentHTML('beforeEnd', event.target.value);
}
//добавление точки с проверками
function addDot () {
    if (display.innerHTML.indexOf('.') >= 0) return;
    if (display.innerHTML === '') {
        display.insertAdjacentHTML('beforeEnd', '0');
        }
    display.insertAdjacentHTML('beforeEnd', '.');
}
//добавление нуля с проверками 
function addZero () {
    if (display.innerHTML.indexOf('0') === 0 && display.innerHTML.length === 1) return;
    if (display.innerHTML.indexOf('0') === 0 && display.innerHTML.indexOf('.') < 0) return;
    display.insertAdjacentHTML('beforeEnd', '0');
}

//выбор действия для функции вычисления
function addAction (elment) {
    if (elment.value === '+') return doPlus;
    if (elment.value === '-') return doMinus;
    if (elment.value === '/') return doDivision;
    if (elment.value === '*') return doMulti;
    if (elment.value === '^') return doPow;
    if (elment.value === '%') return doPercent;
}

//операции с памятью
function memoryOps (event) {
    if (event.target.value === 'MC') {
        memory = 0;
        return;
    }
    if (event.target.value === 'MR') {
        display.innerHTML = memory;
        return;}
    if (event.target.value === 'MS') {
        memory = +display.innerHTML;
        return;
    }
    if (event.target.value === 'M+') {
        memory += +display.innerHTML; 
        return;
    }
    if (event.target.value === 'M-') {
        memory -= +display.innerHTML;
        return;
    }
}

//функция вычисления
function calcIt (event) {
    if (display.className === 'inProgress') {
        sValue = +display.innerHTML;
        result = calcFunction(fValue)(sValue);
        calcFunction = addAction(event.target);
        display.innerHTML = result;
        display.classList.remove('inProgress');
        display.classList.add('result');
        fValue = result;
        return;
    } 

    if (display.className === 'result') {
        fValue = +display.innerHTML;
        display.innerHTML = '';
        calcFunction = addAction(event.target);
        display.classList.remove('result');
        display.classList.add('inProgress');
        return;
    } 

    fValue = +display.innerHTML;
    calcFunction = addAction(event.target);
    display.innerHTML = '';
    display.classList.add('inProgress');


}



//бинды
//цифры
Array.from(document.getElementsByClassName('number')).forEach(function(item) {
    item.onclick = addNum;
});
//действия для общего алгоритма
Array.from(document.getElementsByClassName('action')).forEach(function(item) {
    item.onclick = calcIt;
});
//операции с памятью
Array.from(document.getElementsByClassName('memory')).forEach(function(item) {
    item.onclick = memoryOps;
});

//можно не выносить отдельно, но тогда надо добавлять проверку в основную функцию
document.getElementById('result').onclick = doResult; 
//прямая операция с значением с экрана, не по шаблону
document.getElementById('sqrt').onclick = doSqrt; 
document.getElementById('del').onclick = delPrevious;
document.getElementById('mRev').onclick = pmReverse;
document.getElementById('CE').onclick = clearAll;

