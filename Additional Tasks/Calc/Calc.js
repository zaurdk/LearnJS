'use strict'

//переменные
var fValue;
var sValue;
var calcFunction;
var result;
var memory;
var display = document.getElementById('display');

//вешаем событие
document.getElementById('table').onclick = onClick;


//выбор действия для функции вычисления
function addAction (elment) {
    switch (elment.value) {
      case '+': return doPlus;
      case '-': return doMinus;
      case '/': return doDivision;
      case '*': return doMulti;
      case '^': return doPow;
      case '%': return doPercent;
      default: return;
    } 
  }

//операции с памятью
function memoryOps (event) {
  
  switch (event.target.value) {
    case 'MC':
        memory = 0;
        break;
    case 'MR':
        display.innerHTML = memory;
        break;
    case 'MS':
        memory = +display.innerHTML;
        break;
    case 'M+':
        memory += +display.innerHTML; 
        break;
    case 'M-':
        memory -= +display.innerHTML;
        break;
    
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
//событие делегирования
    function onClick (event) {
      if (event.target.tagName != 'INPUT') return;
      
      let buttonClass = event.target.className;
      
      switch (buttonClass)  {
        case 'number': addNum(event);
        break;
        case 'action': calcIt(event);
        break;
        case 'memory': memoryOps(event);
        break;
        case 'result': doResult();
        break;
        case 'sqrt': doSqrt();
        break;
        case 'del': delPrevious();
        break;
        case 'mRev': pmReverse();
        break;
        case 'CE': clearAll();
        break;
        default: return;
      }
    }


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
    let checkVar = display.innerHTML;
    if (checkVar.length === 0) return;

    if (checkVar.indexOf('-') === 0) {
        display.innerHTML = checkVar.slice(1);
        return;
    }
    
    display.insertAdjacentHTML('afterBegin', '-');
}

//удаления предыдущего элемента
function delPrevious () {
    let checkVar = display.innerHTML;
    display.innerHTML = checkVar.slice(0, checkVar.length - 1);
    if (checkVar.length === 1 && checkVar.indexOf('-') === 0) display.innerHTML = '';
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

//добавление цифры/точки при нажатии кнопки
function addNum (event) {
  let checkVar = display.innerHTML;
  
    if (display.className === 'result') {
        display.innerHTML = '';
        display.classList.remove('result');
        display.classList.add('inProgress');
    }
   
    if (event.target.value === '.') {
      addDot(); 
      return;
    }
    if (event.target.value === '0') {
      addZero(); 
      return;
    }

    if (checkVar.indexOf('0') === 0 && checkVar.length === 1) {
     display.innerHTML = checkVar.slice(1);
    }
    display.insertAdjacentHTML('beforeEnd', event.target.value);
}
//добавление точки с проверками
function addDot () {
    let checkVar = display.innerHTML;
    if (checkVar.indexOf('.') >= 0) return;
    if (checkVar === '') {
        display.insertAdjacentHTML('beforeEnd', '0');
        }
    display.insertAdjacentHTML('beforeEnd', '.');
}
//добавление нуля с проверками 
function addZero () {
    let checkVar = display.innerHTML;
    if (checkVar.indexOf('0') === 0 && checkVar.length === 1) return;
    if (checkVar.indexOf('0') === 0 && checkVar.indexOf('.') < 0) return;
    display.insertAdjacentHTML('beforeEnd', '0');
  }


/*
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


document.getElementById('result').onclick = doResult; 
document.getElementById('sqrt').onclick = doSqrt; 
document.getElementById('del').onclick = delPrevious;
document.getElementById('mRev').onclick = pmReverse;
document.getElementById('CE').onclick = clearAll;
*/

