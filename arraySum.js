
function arraySum(numbers) {
    var sum = 0;
    for (let i = 0; i < arr.length; i++) {
        var sum= sum + arr[i];
    }
    return sum;
}
var arr = [2, 10, 5, 20, 8];
var sum = arraySum(arr);
console.log("Total Sum =", sum);