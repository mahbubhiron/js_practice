
// check its unit matrix or not
var arr = [
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1]
];
var f = 0;
// console.log(arr[0][0],arr[0][1]);
for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
        // console.log(arr[i][j]);
        if (i == j && arr[i][j] != 1 || i != j && arr[i][j] != 0) {
            f = 1;
            break;
        }
    }
}
if (f == 0) {
    console.log("unit matrix");
} else {
    console.log("not  unit matrix");
}