'use strict';
document.getElementById('noteCreate').addEventListener('click', createNote());
document.getElementById('noteDelete').addEventListener('click', deleteAllNotes);


//создаем заметку
function createNote () {
    let idCounter = 0;
    
    return function createDiv() {
        let newDiv = document.createElement('div');
        let divId = '#' + idCounter;
        newDiv.classList.add('note');
        newDiv.setAttribute('id', `#${idCounter}`);
        getStartCoords(newDiv);
        createCloseButton(newDiv);
        createPinButton(newDiv);
        createLockButton(newDiv);
        createTimerButton(newDiv);
        createRemindTime(newDiv);
        createText(newDiv);
        idCounter++;
        document.getElementById('field').appendChild(newDiv);
        attachMover(divId);        
    }   
}

//случайные координаты для создания заметки
function getStartCoords(element) {
    var box = document.getElementById('field');
    var startX = box.clientHeight / 4;
    var startY = box.clientWidth / 4;
    function coinToss () {
        return (Math.floor(Math.random() * 2) == 0) ? '1' : '-1';
    };
    var randPosition = Math.floor(Math.random() * 150);

    element.style.top = startX + (randPosition * +coinToss()) + 'px';
    element.style.left = startY + (randPosition * +coinToss()) + 'px';

    
}
//удалить все заметки
function deleteAllNotes () {
    let notes = document.getElementsByClassName('note');
    while (notes[0]) {
        notes[0].remove();
    } 
}
//создаем кнопку удаления
function createCloseButton (element) {
    var button = document.createElement('input');
    button.classList.add('closeNote');
    button.type = 'button';
    button.value = 'X';
    button.title = 'Удалить заметку';
    button.onclick = function () {
        button.parentElement.remove();
    }
    element.appendChild(button);
}
//создаем кнопку закрепления заметки
function createPinButton (element) {
    var button = document.createElement('input');
    button.classList.add('pinNote');
    button.type = 'button';
    button.value = '<';
    button.title = 'Закрепить';
    button.onclick = function () {
        button.parentElement.classList.toggle('pinned');
        button.classList.toggle('pinned');
    }
    element.appendChild(button);
}
//создаем кнопку фиксации текста
function createLockButton (element) {
    var button = document.createElement('input');
    button.classList.add('lockNote');
    button.type = 'button';
    button.value = 'L';
    button.title = 'Запретить редактирование';
    button.onclick = function () {
        button.classList.toggle('lock');
        if (button.classList.contains('lock')) {
            button.parentElement.querySelector('textarea').setAttribute('readonly', '');
        } else { 
            button.parentElement.querySelector('textarea').removeAttribute('readonly');
        }        
    }
    element.appendChild(button);
}
//создаем кнопку напоминания
function createTimerButton (element) {
    var button = document.createElement('input');
    button.classList.add('timerNote');
    button.type = 'button';
    button.value = 'T';
    button.title = 'Установить время напоминания';
    button.onclick = function () {
        let dateFields = button.parentElement.querySelectorAll('.keyDate');
        button.classList.toggle('tOn');
        button.parentElement.classList.toggle('timerOn');
        if (button.classList.contains('tOn')) {
            for (let i = 0; i < dateFields.length; i++) {
                dateFields[i].setAttribute('readonly', '');
            }
        } else { 
            for (let i = 0; i < dateFields.length; i++) {
                dateFields[i].removeAttribute('readonly');
            }
        }        
    }
    element.appendChild(button);
}
//создаем текстовое поле заметки
function createText (element) {
    var text = document.createElement('textarea');
    text.classList.add('textarea');
    text.placeholder = 'Закрепите заметку, чтобы написать нужное...';
    text.rows = 11;
    text.cols = 20;
    text.maxLength = 200;
    element.appendChild(text); 
}

function createRemindTime (element) {
    var date = new Date();
    var stringDiv = document.createElement('div');
        stringDiv.classList.add('dataString');
    var dayField = document.createElement('input');
        dayField.classList.add('keyDate');
        dayField.value = date.getDate();
        stringDiv.appendChild(dayField);
    var monthField = document.createElement('input');
        monthField.classList.add('keyDate');
        monthField.classList.add('month');
        monthField.value = getMonthName(date);
        stringDiv.appendChild(monthField);
    var yearField = document.createElement('input');
        yearField.classList.add('keyDate');
        yearField.classList.add('year');
        yearField.value = date.getFullYear();
        stringDiv.appendChild(yearField);
        stringDiv.insertAdjacentText('beforeEnd', ' — ');
    var hourField = document.createElement('input');
        hourField.classList.add('keyDate');
        hourField.value = date.getHours();
        stringDiv.appendChild(hourField);
        stringDiv.insertAdjacentText('beforeEnd', ':');
    var minuteField = document.createElement('input');
        minuteField.classList.add('keyDate');
        minuteField.value = date.getMinutes();
        stringDiv.appendChild(minuteField);

    
    if (!element) {
        return stringDiv;
    } else element.appendChild(stringDiv);
}

//функция перемещения заметки
function attachMover (elemId) {

    var note = document.getElementById(`${elemId}`);
    note.onmousedown = function (e) {
        if (note.classList.contains('pinned')) return;

        var coords = getCoords(note);
        var shiftX = e.pageX - coords.left;
        var shiftY = e.pageY - coords.top;

        note.style.position = 'absolute';
        moveAt(e);
        document.body.appendChild(note);

        note.style.zIndex = 1000; 

        function moveAt(e) {
            note.style.left = e.pageX - shiftX + 'px';
            note.style.top = e.pageY - shiftY + 'px';
        }

        document.onmousemove = function(e) {
            moveAt(e);
            }

        note.onmouseup = function() {
            document.onmousemove = null;
            note.onmouseup = null;
            document.getElementById('field').appendChild(note);
        }

        note.ondragstart = function() {
            return false;
          };
          
        function getCoords(elem) { 
            var box = elem.getBoundingClientRect();
            return {
              top: box.top + pageYOffset,
              left: box.left + pageXOffset
            };
        }
    }
    
}

//получаем трехбуквенное значение месяца
function getMonthName(date) {
    let m = date.getMonth();
    let name;
    switch (m) {
        case 0 : name = 'янв'; break;
        case 1: name = 'фев'; break;
        case 2: name = 'мар'; break;
        case 3: name = 'апр'; break;
        case 4: name = 'май'; break;
        case 5: name = 'июн'; break;
        case 6: name = 'июл'; break;
        case 7: name = 'авг'; break;
        case 8: name = 'сен'; break;
        case 9: name = 'окт'; break;
        case 10: name = 'ноя'; break;
        case 11: name = 'дек'; break;
        default: break;
    }
    return name;
}

/* function doOnTimer () {
    var notesToRemind = document.querySelectorAll('.timerOn');
    console.log(notesToRemind);
    for (let i = 0; i < notesToRemind.length; i++) {
        console.log(notesToRemind[i]);
        console.log(checkTimerEquial(notesToRemind[i]))
    }
} 

//сравнение текущего времени с временем заметки
function checkTimerEquial(element) {
    let presentTime = createRemindTime();
    let chekedTime = element.querySelector('.dataString');
    if (chekedTime !== null) return (presentTime.innerHTML === chekedTime.innerHTML);
}

var timerId = setTimeout(function tick() {
    doOnTimer();
    timerId = setTimeout(tick, 10000);
  }, 10000);
 */