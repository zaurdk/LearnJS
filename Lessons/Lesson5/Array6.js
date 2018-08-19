arr = ["test", 2, 1.5, false];

function find(arr, value) {

    if (arr.indexOf(value) >= 0) return console.log(arr.indexOf(value));

    return console.log(arr.indexOf(value));
}



find(arr, "test"); // 0
find(arr, 2); // 1
find(arr, 1.5); // 2
find(arr, 0); // -1