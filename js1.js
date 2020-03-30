let score = [5, 6, 10, 9, 8, 7, 3, 1, 2];

function findMax(array) {
    let maxValue = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] > maxValue) {
            maxValue = array[i];
        }
    }
    return maxValue;

}

findMax(score);
console.log("Điểm số cao nhất là: " + findMax(score));