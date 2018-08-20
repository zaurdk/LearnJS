
function callback(value) {
    return value.slice(0, value.indexOf(' ')) + ' по батюшке ' + value.slice(value.indexOf(' ') + 1);
} 

function map(array, callback) {
        
    return array.reduce(function(result, elem) {        
        result.push(callback(elem));
        return result;
            
    },[]); 

    
}


console.log(map(['Петр Алексеевич', 'Елена Викторовна', 'Максим Александрович', 'Татьяна Олеговна'], callback));