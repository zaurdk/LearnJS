'use strict';

let a = {
  name: 'John',
  order: {
    price: 30,
  },
  age: 10,
};

let b = {
  name: 'John',
  order: {
    price: 30,
  },
  age: 10,
};


function deepEqual(a, b) {
  if (a === b) {
    return true;
  }

  if (typeof b !== 'object' 
    || typeof a !== 'object' 
    || a === null
    || b === null
    ) {
    return false;
  }

  if (Object.keys(a).length !== Object.keys(b).length) {
    return false;
  }

  for (let prop in a) {
    if (b.hasOwnProperty(prop)) {
      if (!deepEqual(a[prop], b[prop])) return false;
    } else {
      return false;
    }
  }  
  
  return true;
}


console.log(deepEqual(a, b));