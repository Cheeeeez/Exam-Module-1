let arrayLength = parseInt(prompt('Nhập vào số lượng phần tử của mảng: '));
let array = [];
for (let i = 0; i < arrayLength; i++) {
    array.push(Math.round(Math.random() * 10));
}
console.log(array);

let x = parseInt(prompt("Nhập giá trị của số nguyên x"));

function tryRemoveFromArray(arr, value) {
    for (let i = 0; i < arr.length; i++) {
        if (value === arr[i]) {
            arr.splice(i,1);
            i--;
        }
    }
    return arr;
}

tryRemoveFromArray(array,x);
console.log(array);