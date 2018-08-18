var arr = [5, 4, 3, 8, 0];

function filterRange(arr, a, b) {
    if (arr.indexOf(a) < 0 || arr.indexOf(b) < 0) return 'не найден элемент в массиве';

    let i1 = arr.indexOf(a);
    let i2 = arr.indexOf(b);
    let fArr = []; 
    if (i1 < i2) {fArr = arr.slice(i1, i2 + 1)
    } else fArr = arr.slice(i2, i1 + 1)
    return fArr;
}

;
console.log(filterRange(arr, 3, 5));
console.log(arr);
// теперь filtered = [5, 4, 3]
// arr не изменился