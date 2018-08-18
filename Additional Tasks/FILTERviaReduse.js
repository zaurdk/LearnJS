var arr = [];

function callback(value) {
    return value > 0;
} 

function filter(array, callback) {
    var filteredArr = [];
    
    array.reduce(function(sum, elem) {
        if (callback(elem) === true)
        filteredArr.push(elem);
    },0); 

    return filteredArr;
    
}


console.log(filter([1, -1, 2, -2, 3], callback));