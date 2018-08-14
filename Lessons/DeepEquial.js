'use strict';

let a = {
  name: 'John',
  order: {
    price: 20
  },
  age: 10
};

let b = {
  name: 'John',
  order: {
    price: 20,
  },
  age: 10
};

var objectString;
var objectString1;

function includeObjectCheck(obj) {
    var includeObject;
    for (var key in obj) {
        if (typeof obj[key] == 'object') {
            return includeObject = true;
        } else {
            return includeObject = false;
        };
    };
};

function deepEqual(a, b) {
 for (var key in a) {
     if (includeObjectCheck(a[key]) === true) {
        var iObj = a[key];
        for (var iKey in iObj) {
            objectString += String(iObj[iKey]);
        };
     } else {
        objectString += String(a[key]);
        };
    };
for (var key in a) {
    if (includeObjectCheck(b[key]) === true) {
        var iObj = b[key];
        for (var iKey in iObj) {
            objectString1 += String(iObj[iKey]);
        };
    } else {
        objectString1 += String(b[key]);
        };
    };    

    return (objectString === objectString1);    

}

console.log(objectString);
console.log(objectString1);
console.log(deepEqual(a, b));
