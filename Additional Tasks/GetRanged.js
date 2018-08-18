//function getRange(1, 2, 3)
//1 аргумент – количество элементов
//2 аргумент – значение первого элемента
//3 аргумент – шаг 

//console.log(getRange(3)); // [1, 2, 3] — первый элемент по умолчанию 1, шаг по умолчанию 1
//console.log(getRange(2, 2)) // [2, 3]
//console.log(getRange(3, 2, 2)) // [2, 4, 6]



function getRange(elementScore, firstElementValue, elementStep) {

    var arr = [];

    if (firstElementValue === undefined && elementStep === undefined) {
        for (i = 0; i < elementScore; i++) {
            arr.push(i); 
        }
    } else if (elementStep == undefined) {
        for (i = 0; i < elementScore; i++) {
            arr.push(firstElementValue);
            firstElementValue++
        }
    } else {
        for (i = 0; i < elementScore; i++) {
            arr.push(firstElementValue);
            firstElementValue += elementStep; 
        }
    }

    return arr;
}



console.log(getRange(3)); // [1, 2, 3]
console.log(getRange(2, 2)) // [2, 3]
console.log(getRange(3, 2, 2)) // [2, 4, 6]

