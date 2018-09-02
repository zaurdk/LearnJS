// вариант для последовательных кликов

var counter = 0; // переменная для определения, крестик или нолик, по умолчанию первый крестик
var winner; // имя победителя
var field = document.getElementById('field');
var rows = field.rows;
field.addEventListener('click', win);

for (var i = 0; i < rows.length; i++) {
  rows[i].cells[0].onclick = turn;
  rows[i].cells[1].onclick = turn;
  rows[i].cells[2].onclick = turn;
}

//присвоение класса
function turn(event) {
    if (event.currentTarget.className) return;
  
    if (counter % 2 === 0) {event.currentTarget.classList.add('cross');
    } else event.currentTarget.classList.add('zero');
    winner = event.currentTarget.className;
    counter++;
  }

//проверка победы
function win() {
  if (winCheck()) {
      alert(winner + ' Wins!');
      clear();
    } 

  if (winCheck() === false && counter > 7) {
      alert('Ничья!');
      clear();
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

// проверка по вертикали
if (mas[0] + mas[1] + mas[2] === 'zerozerozero') return true;
if (mas[3] + mas[4] + mas[5] === 'zerozerozero') return true;
if (mas[6] + mas[7] + mas[8] === 'zerozerozero') return true;
if (mas[0] + mas[1] + mas[2] === 'crosscrosscross') return true;
if (mas[3] + mas[4] + mas[5] === 'crosscrosscross') return true;
if (mas[6] + mas[7] + mas[8] === 'crosscrosscross') return true;
// проверка по горизонтали
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
    for (var i = 0; i < rows.length; i++) {
        rows[i].cells[0].removeAttribute('class');
        rows[i].cells[1].removeAttribute('class');
        rows[i].cells[2].removeAttribute('class');
    }
    counter = 0;
}
