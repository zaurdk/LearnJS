var hideNumber = String(prompt('Первый игрок вводит число', '0000'));
var tryNumber = String(prompt('Второй игрок угадывает введенное число', '0000'));

var bulls = 0;
var cows = 0;

function bullsAndCows(num) {
    for(var i = 0; i < 4; i++) {
        if(num[i] == hideNumber[i]) {
            bulls += 1;
        } else if (hideNumber.indexOf(num[i]) >= 0) { 
            cows += 1;
        };
    };
};

bullsAndCows(tryNumber);

alert('Коров:' + cows + 'Быков:' + bulls);