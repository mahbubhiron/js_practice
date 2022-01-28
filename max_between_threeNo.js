//largest numbers between thre
var a = 35, b = 60, c = 50;
if (a > b && c) {
    console.log("A IS greater then B & C");
} else if (b > c && a) {
    console.log("B Is greater then the A & C");
} else if (c > a && b) {
    console.log("C Is greater then the A & C");
}
// second largest numbers between three
var x = 90, y = 70, z = 80;
if (x > y && x < z || x < y && x > z) {
    console.log(x, " X is seacond largset number between :", x, y, z);
} else if (y > x && y < z || y < x && y > z) {
    console.log(y, " Y is seacond largset number between :", x, y, z);
} else if (z > x && z < y || z < x && z > y) {
    console.log(z, " Z is seacond largset number between :", x, y, z);
}

// largest numbers between three in an array
var arr = [90, 80, 84, 88, 89];
var index = 0;
var max = arr[0];
var secondLargestNumber = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
        index = i;
    }
}

for (let j = 0; j < arr.length; j++) {
    if (j == index) {//avoid larest nmber
    }
    else {
        if (arr[j] > secondLargestNumber) {
            secondLargestNumber = arr[j];
        }
    }
}
console.log("largest Number", max);
console.log("Second largest Number", secondLargestNumber);

// second largest number between thres in an array
function second() {
    var arr = [2, 28, 29, 50, 40];
    var max = Math.max.apply(null, arr);
    arr.splice(arr.indexOf(max), 1);
    var sMax = Math.max.apply(null, arr);
    return sMax;
}
console.log("second largest number using library function", second());
