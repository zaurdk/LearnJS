
function callback(value) {
    return value > 0;
} 

function filter(array, callback) {    
    return array.reduce(function(result, elem) {
        if (callback(elem) === true)
            return result = [].concat(result,elem);
        },[]); 
}

console.log(filter([1, -1, 2, -2, 3], callback));