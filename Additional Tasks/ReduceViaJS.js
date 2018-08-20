function callback(sum, elem) {
    return sum + elem;
}

function reduceVia(arr, callback) {
    
    let sum;
    

    for (i = 0; i < arr.lenght; i++) {
        sum += callback(sum, arr[i]);
    }

    return sum;

}


console.log(reduceVia([1, -1, 2, -2, 3], callback));