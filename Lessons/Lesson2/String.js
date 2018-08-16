var str = prompt('Введите слово', '');

function ucFirst(str) {
        let ucResult = str[0].toUpperCase() + str.slice(1);
    return ucResult;
};

alert(ucFirst(str));