// против компьютера


var winner; // имя победителя
var emptyCells = []; 
var field = document.getElementById('field');
var rows = field.rows;

var button = document.createElement('input');
    button.classList.add('button');
    button.setAttribute('value', 'СТАРТ');
    button.onclick = startGame;

rows[1].cells[1].appendChild(button);


function startGame() {
field.addEventListener('click', turn);
field.addEventListener('click', win);
button.style.display = 'none';
}


//присвоение класса
function turn(event) {
    if (event.target.className) return;
    
    event.target.classList.add('cross');
    var tds = Array.from(field.getElementsByTagName('td'));
    for (var i = 0; i < tds.length; i++) {
      if (!tds[i].hasAttribute('class')) emptyCells.push(tds[i]);
    }
    var randomEmpty = Math.round(Math.random()*(emptyCells.length - 1));

    emptyCells[randomEmpty].classList.add('zero');

    emptyCells = [];      
}


  
//проверка победы
function win() {
  if (rowCheck()) {
    (winner === 'cross') ? alert('Крестики выиграли!') : alert('Нолики выиграли!');
    clear();
  } 

  var tds = Array.from(field.getElementsByTagName('td'));
  var fTds = [];
  for (i=0; i<tds.length; i++) {
    if (tds[i].hasAttribute('class')) fTds.push(tds[i]);
  }
  if (rowCheck() === false && fTds.length > 8) {
    alert(' Ничья!');
    clear();
  }

}

//проверка выигрышных комбинаций
function rowCheck() {
  var mas = [];
  for (var i = 0; i < 3; i++) {
    mas.push(rows[i].cells[0].className);
    mas.push(rows[i].cells[1].className);
    mas.push(rows[i].cells[2].className);  
  }
  
  // проверка по горизонтали
  if (mas[0] + mas[1] + mas[2] === 'zerozerozero')  { 
    winner = mas[0];
    return true;
  }
  if (mas[3] + mas[4] + mas[5] === 'zerozerozero')  { 
    winner = mas[3];
    return true;
  }
  if (mas[6] + mas[7] + mas[8] === 'zerozerozero')  { 
    winner = mas[6];
    return true;
  }
  if (mas[0] + mas[1] + mas[2] === 'crosscrosscross')  { 
    winner = mas[0];
    return true;
  }
  if (mas[3] + mas[4] + mas[5] === 'crosscrosscross')  { 
    winner = mas[3];
    return true;
  }
  if (mas[6] + mas[7] + mas[8] === 'crosscrosscross')  { 
    winner = mas[6];
    return true;
  }
  // проверка по вертикали
  if (mas[0] + mas[3] + mas[6] === 'zerozerozero')  { 
    winner = mas[0];
    return true;
  }
  if (mas[1] + mas[4] + mas[7] === 'zerozerozero')  { 
    winner = mas[1];
    return true;
  }
  if (mas[2] + mas[5] + mas[8] === 'zerozerozero')  { 
    winner = mas[2];
    return true;
  }
  if (mas[0] + mas[3] + mas[6] === 'crosscrosscross')  { 
    winner = mas[0];
    return true;
  }
  if (mas[1] + mas[4] + mas[7] === 'crosscrosscross')  { 
    winner = mas[1];
    return true;
  }
  if (mas[2] + mas[5] + mas[8] === 'crosscrosscross')  { 
    winner = mas[2];
    return true;
  }
  // проверка по диагонали
  if (mas[0] + mas[4] + mas[8] === 'zerozerozero')  { 
    winner = mas[0];
    return true;
  }
  if (mas[2] + mas[4] + mas[6] === 'zerozerozero')  { 
    winner = mas[2];
    return true;
  }
  if (mas[0] + mas[4] + mas[8] === 'crosscrosscross')  { 
    winner = mas[0];
    return true;
  }
  if (mas[2] + mas[4] + mas[6] === 'crosscrosscross')  { 
    winner = mas[2];
    return true;
  }
  
  return false;
  }

function clear() {
  Array.from(field.getElementsByTagName('td')).forEach((item) => {
    item.removeAttribute('class');
  });
  field.removeEventListener('click', turn);
  field.removeEventListener('click', win);
  button.style.display = '';
}



/* Array.prototype.multiget = function(){
  var args = Array.apply(null, arguments);
  var result = [];
  for(var i = 0; i < args.length; i++){
      result.push(this[args[i]]);
  }       

  return result;
}

Потом вызывать так:

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(arr.multiget(5,2,0)); // выведет массив [6, 3, 1]
console.log(arr.multiget(5,2,0).join(",")); // выведет строку "6,3,1" */