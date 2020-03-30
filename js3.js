let fibonacci = [];
fibonacci.push(1, 1);
console.log(fibonacci);
for (let i = 2; i < 100; i++) {
    fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
}

function isFibonacci(arr, value) {
    if (value < arr[arr.length - 1]) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === value) {
                return true;
            }
        }
        return false;
    } else {
        alert("Số quá lớn không thể kiểm tra");
    }
}

let number = +prompt("Nhập số nguyên");
console.log(fibonacci);
console.log(isFibonacci(fibonacci, number));
