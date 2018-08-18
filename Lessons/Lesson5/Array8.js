var mBorder = +prompt('Давайте найдем сумму всех простые числа до ', '100');
var arr = [];

for (i = 2; i < mBorder; i++) {
    arr.push(i);
};

console.log(arr);

let p = arr[0];

console.log(p);

do {
    for (i = 2 * p; i < 100; i += p) {
      arr[i] = false;
    }
  
    for (i = p + 1; i < 100; i++) {
      if (arr[i]) break;
    }
  
    p = i;
  } while (p * p < 100); 
  
  var sum = 0;
  for (i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  
  alert( 'Она равна ' + sum );