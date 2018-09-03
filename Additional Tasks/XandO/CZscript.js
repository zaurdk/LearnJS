// вариант для последовательных кликов

var counter = 0; // переменная для определения, крестик или нолик, по умолчанию первый крестик
var winner; // имя победителя
var field = document.getElementById('field');
var rows = field.rows;
var button = document.createElement('input');
button.classList.add('button');
button.setAttribute('value', 'СТАРТ');
button.onclick = startGame;
rows[1].cells[1].appendChild(button);


function startGame() {
var choice = +prompt('Выберите, кто первый ходит: n/ 0 — Крестики,  1 — Нолики', '');
counter = choice;
field.addEventListener('click', turn);
field.addEventListener('click', win);
button.style.display = 'none';
}

//присвоение класса
function turn(event) {
    if (event.target.className) return;
  
    if (counter % 2 === 0) {event.target.classList.add('cross');
    } else event.target.classList.add('zero');
    winner = event.target.className;
    counter++;
  }

//проверка победы
function win() {
  if (winCheck()) {
      (winner === 'cross') ? alert('Крестики выиграли!') : alert('Нолики выиграли!');
      clear();
      button.style.display = '';
    } 

  if (winCheck() === false && counter > 8) {
      alert('Ничья!');
      clear();
      button.style.display = '';
    }
}

//проверка выигрышных комбинаций
function winCheck() {
var mas = [];
for (var i = 0; i < 3; i++) {
  mas.push(rows[i].cells[0].className);
  mas.push(rows[i].cells[1].className);
  mas.push(rows[i].cells[2].className);  
}

    // проверка по горизонтали
    if (mas[0] + mas[1] + mas[2] === 'zerozerozero') return true;
    if (mas[3] + mas[4] + mas[5] === 'zerozerozero') return true;
    if (mas[6] + mas[7] + mas[8] === 'zerozerozero') return true;
    if (mas[0] + mas[1] + mas[2] === 'crosscrosscross') return true;
    if (mas[3] + mas[4] + mas[5] === 'crosscrosscross') return true;
    if (mas[6] + mas[7] + mas[8] === 'crosscrosscross') return true;
    // проверка по вертикали
    if (mas[0] + mas[3] + mas[6] === 'zerozerozero') return true;
    if (mas[1] + mas[4] + mas[7] === 'zerozerozero') return true;
    if (mas[2] + mas[5] + mas[8] === 'zerozerozero') return true;
    if (mas[0] + mas[3] + mas[6] === 'crosscrosscross') return true;
    if (mas[1] + mas[4] + mas[7] === 'crosscrosscross') return true;
    if (mas[2] + mas[5] + mas[8] === 'crosscrosscross') return true;
    // проверка по диагонали
    if (mas[0] + mas[4] + mas[8] === 'zerozerozero') return true;
    if (mas[2] + mas[4] + mas[6] === 'zerozerozero') return true;
    if (mas[0] + mas[4] + mas[8] === 'crosscrosscross') return true;
    if (mas[2] + mas[4] + mas[6] === 'crosscrosscross') return true;

return false;
}

function clear() {
  var array = Array.from(field.getElementsByTagName('td'));
  array.forEach(function(item) {
    item.removeAttribute('class');
  });
  counter = 0;
}
