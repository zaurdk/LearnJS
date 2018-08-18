var arr = [];
var sum = 0;



    while (true) {        
        var elem = prompt('Введите число', '0')
        if (elem === "" || elem === null || isNaN(elem)) break;
        arr.push(+elem);
    };

    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];        
    }
    


console.log(sum);