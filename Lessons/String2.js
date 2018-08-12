function truncate(str, maxlength) {
    if (str.length <= +maxlength) {
        return str;
    } else {
        let cuttedPhrase = str.slice(0, (maxlength - 3)) + '...';
        return cuttedPhrase;
    };
};

let str = prompt('Введите фразу', '');
let maxlength = prompt('Длина отрывка', '');

alert(truncate(str, maxlength));