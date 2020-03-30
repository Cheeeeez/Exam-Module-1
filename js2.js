let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arr);

function tryRemoteFromArray(array, number) {
    for (let i = 0; i < array.length; i++) {
        if (number === array[i]) {
            array.splice(i, 1);
        }
    }
}

let x = +prompt();
tryRemoteFromArray(arr, x);
console.log(arr);