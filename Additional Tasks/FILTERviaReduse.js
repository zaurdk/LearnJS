
function callback(value) {
    return value > 0;
} 

function filter(array, callback) {    
    return array.reduce(function(result, elem) {
        if (callback(elem) === true) {
            result.push(elem);
            return result;
        }

        return result
        },[]); 

    
}

console.log(filter([1, -1, 2, -2, 3], callback));