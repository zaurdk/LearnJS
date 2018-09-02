// вариант для последовательных кликов


var winner; // имя победителя
var field = document.getElementById('field');
var rows = field.rows;
var emptyCells = []
field.addEventListener('click', win);


for (var i = 0; i < rows.length; i++) {
  rows[i].cells[0].onclick = turn;
  rows[i].cells[1].onclick = turn;
  rows[i].cells[2].onclick = turn;
}

//присвоение класса
function turn(event) {
    if (event.currentTarget.className) return;
    
    event.currentTarget.classList.add('cross');
    var tds = document.getElementsByTagName('td');
/*     for (var i = 0; i < tds.length; i++) {
      if (!tds[i].hasAttribute('class')) emptyCells.push(tds[i]);
    } */
    console.log(tds);
    emptyCells[aiTurn(emptyCells)].classList.add('zero');

    emptyCells = [];
    
    winner = event.currentTarget.className;
}

console.log(emptyCells)

function aiTurn(arr) {
  return Math.round(Math.random()*(arr[arr.length - 1]));
}
  
//проверка победы
function win() {
  if (winCheck()) {
      alert(winner + ' Wins!');
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
}
