



function getMaxSubSum(arr) {

    var maxSum = 0;
    var localSum = 0;

  for (var i = 0; i < arr.length; i++) {

    localSum += arr[i];  //считает сумму массива по порядку начиная с итого элемента
    
    maxSum = Math.max(maxSum, localSum); //записывает в maxSum наибольшее число 
    console.log(maxSum);

    if (localSum  < 0) localSum = 0; //зануляет сумму по порядку, если она меньше нуля
  }                                  //т.е. следующая итерация начнется с пустой суммой по порядку, но сохраненной макссум 
  return maxSum;
}



console.log(getMaxSubSum([-1, 2, 3, -9]));
console.log(getMaxSubSum([2, -1, 2, 3, -9]));
console.log(getMaxSubSum([-1, 2, 3, -9, 11]));
console.log(getMaxSubSum([-2, -1, 1, 2]));
console.log(getMaxSubSum([100, -9, 2, -3, 5]));
console.log(getMaxSubSum([1, 2, 3])); 