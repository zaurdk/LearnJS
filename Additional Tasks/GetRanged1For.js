function getRange(elementScore, firstElementValue, elementStep) {

    var arr = [];

    for (i = 1; i <= elementScore; i++) {
        if (firstElementValue === undefined && elementStep === undefined) {
            arr.push(i); 
        } else if (elementStep === undefined) {
            arr.push(firstElementValue);
            firstElementValue++        
        } else {
            arr.push(firstElementValue);
            firstElementValue += elementStep;        
        }    
    }
    return arr;
}




console.log(getRange(3)); // [1, 2, 3]
console.log(getRange(2, 2)) // [2, 3]
console.log(getRange(3, 2, 2)) // [2, 4, 6]