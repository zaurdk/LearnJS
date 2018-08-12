function getDecimal(num) {
    if (num < 0) {
        num = -1 * +num;
    } else {
        num = +num;
    };
    let a = num - Math.round(num);
    return a;
    }

var num = +prompt('Введите дробное число', '0');
alert( 'Дробная часть числа равна' + getDecimal(num) );