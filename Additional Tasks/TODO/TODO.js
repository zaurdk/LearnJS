'use strict';

let idCounter = 0;
document.querySelector('tbody').addEventListener('click', doOnClick);

//проверка установленных напоминаний
var timerId = setTimeout(function tick() {
    doOnTimer();
    timerId = setTimeout(tick, 10000);
  }, 10000);


//создаем заметку
function createNote () {
    let newDiv = document.createElement('div');
    newDiv.classList.add('note');
    newDiv.setAttribute('id', `${idCounter}`);
    getStartCoords(newDiv);
    createCloseButton(newDiv);
    createPinButton(newDiv);
    createLockButton(newDiv);
    createTimerButton(newDiv);
    createRemindTime(newDiv, createTime());
    createText(newDiv);    
    document.getElementById('field').appendChild(newDiv);
    attachMover(idCounter);
    idCounter++;
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

//сортировать сперва последние
function sortNotesLast () {
    Array.from(document.querySelectorAll('.note')).forEach((elem) =>{elem.style.zIndex = elem.id});
}
//сортировать сперва ранние
function sortNotesFirst () {
    let notes = Array.from(document.querySelectorAll('.note'));
    let indexes = notes.map((elem)=>{return elem.id});
    indexes.reverse();
    for (var i = 0; i < notes.length; i++) {
        notes[i].style.zIndex = indexes[i];
    }
}

//создаем кнопку удаления
function createCloseButton (element) {
    var button = document.createElement('input');
    button.classList.add('closeNote');
    button.type = 'button';
    button.value = 'X';
    button.title = 'Удалить заметку';
    element.appendChild(button);
}

//функция удаления
function closeNote (element) {
    element.parentElement.remove();
}

//создаем кнопку закрепления заметки
function createPinButton (element) {
    var button = document.createElement('input');
    button.classList.add('pinNote');
    button.type = 'button';
    button.value = '<';
    button.title = 'Закрепить';
    element.appendChild(button);
}

//функция закрепления заметки
function pinNote (element) {
    element.parentElement.classList.toggle('pinned');
    element.classList.toggle('pinned');
}

//создаем кнопку фиксации текста
function createLockButton (element) {
    var button = document.createElement('input');
    button.classList.add('lockNote');
    button.type = 'button';
    button.value = 'L';
    button.title = 'Запретить редактирование';
    element.appendChild(button);
}

//функция фиксации текста
function lockNote (element) {
    element.classList.toggle('lock');
    if (element.classList.contains('lock')) {
        element.parentElement.querySelector('textarea').setAttribute('readonly', '');
    } else { 
        element.parentElement.querySelector('textarea').removeAttribute('readonly');
    }        
}


//создаем кнопку напоминания
function createTimerButton (element) {
    var button = document.createElement('input');
    button.classList.add('timerNote');
    button.type = 'button';
    button.value = 'T';
    button.title = 'Установить время напоминания';
    element.appendChild(button);
}

//функция включения/выключения напоминания
function noteTimerToggle (element) {
    let dateField = element.parentElement.querySelector('.dataString');
    element.classList.toggle('tOn');
    element.parentElement.classList.toggle('timerOn');
    if (element.classList.contains('tOn')) {
        dateField.setAttribute('readonly', '');
    } else {
        dateField.removeAttribute('readonly');
    }
} 


//создаем текстовое поле заметки
function createText (element) {
    var text = document.createElement('textarea');
    text.classList.add('textarea');
    text.placeholder = 'Ваш текст...';
    text.rows = 11;
    text.cols = 20;
    text.maxLength = 200;
    element.appendChild(text); 
}

//создаем текущую дату/время
function createTime () {    
    var date = new Date();
    var options = {
        day: 'numeric',
        year: 'numeric',
        month: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
    };
    return date.toLocaleString("ru", options);
}

//создаем поле ввода даты
function createRemindTime (element, date) {
    var fullDate = date;
    var dateField = document.createElement('input');
    dateField.classList.add('dataString');
    dateField.placeholder = '00.00.0000, 00:00';
    dateField.value = fullDate;
    if (!element) {
        return dateField;
    } else element.appendChild(dateField);
}

//функция перемещения заметки
function attachMover (elemId) {

    var note = document.getElementById(`${elemId}`);

    note.onmousedown = function (e) {
        if (!e.target.classList.contains('note')) return;
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


//сработка таймера
function doOnTimer () {
    var notesToRemind = document.querySelectorAll('.timerOn');
    for (let i = 0; i < notesToRemind.length; i++) {
        if (checkTimerEquial(notesToRemind[i])) {
            notesToRemind[i].classList.add('alert');
        };
    }
} 

//сравнение текущего времени с временем заметки
function checkTimerEquial(element) {
    let presentTime = createTime();
    let chekedTime = element.querySelector('.dataString').value;
    console.log(chekedTime );
    if (chekedTime !== null) return (presentTime === chekedTime);
}

//делегирующая функция

function doOnClick (event) {
    let element = event.target;
    if (element.classList.contains('noteCreate')) createNote();
    if (element.classList.contains('noteDelete')) deleteAllNotes();
    if (element.classList.contains('noteSortUp'))sortNotesLast();
    if (element.classList.contains('noteSortDown'))sortNotesFirst();
    if (element.classList.contains('closeNote')) closeNote(element);
    if (element.classList.contains('timerNote')) noteTimerToggle(element);
    if (element.classList.contains('pinNote')) pinNote(element);
    if (element.classList.contains('lockNote')) lockNote(element);
}