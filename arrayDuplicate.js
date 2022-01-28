
var arr = [2, 5, 3, 2, 10, 6, 3, 8, 2, 6, 22, 8];
var uniqeArray = [];
for (let i = 0; i < arr.length; i++) {
    var index = uniqeArray.indexOf(arr[i]);
    if (index == -1) {
        uniqeArray.push(arr[i]);
    }
}
console.log(uniqeArray);