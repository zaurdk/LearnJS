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
        button.parentElement.classList.toggle('locked');
        button.classList.toggle('lock');
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
    element.appendChild(button);
}
//создаем текстовое поле заметки
function createText (element) {
    var text = document.createElement('textarea');
    text.classList.add('textarea');
    text.placeholder = 'Закрепите заметку, чтобы написать нужное...';
    text.rows = 10;
    text.cols = 22;
    element.appendChild(text); 
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

