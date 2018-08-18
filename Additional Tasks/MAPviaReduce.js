var arr = [];

function callback(value) {
    return value.slice(0, value.indexOf(' ')) + ' по батюшке ' + value.slice(value.indexOf(' ') + 1);
} 

function map(array, callback) {
    var filteredArr = [];
    
    array.reduce(function(sum, elem) {
      filteredArr.push(callback(elem));  
    },0); 

    return filteredArr;
    
}


console.log(map(['Петр Алексеевич', 'Елена Викторовна', 'Максим Александрович', 'Татьяна Олеговна'], callback));