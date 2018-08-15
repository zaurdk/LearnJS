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

function keysScore(obj1, obj2) {
    var count = 0;
    var count1 = 0;

    for (var key in obj1) if (a.hasOwnProperty(key)) count++;
    for (var key1 in obj2) if (a.hasOwnProperty(key1)) count1++;

    return (count === count1);
};


function deepEqual(obj1, obj2) {
    if (keysScore(obj1, obj2) === false) {
        return false;
    } else {    
        for (var propName in obj1, obj2) {
            if (typeof (obj1[propName]) === 'object') {
                let result = (deepEqual(obj1[propName], obj2[propName]));
                return result;
             } else {
                (obj1[propName] === obj2[propName]) ? true : false;
             }
        }
    }
}



console.log(keysScore(a, b));

console.log(deepEqual(a, b));
