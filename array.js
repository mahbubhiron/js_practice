var arr = [15, 20, 25, 30, 35];
console.log('array = '+arr);
console.log('position of array = '+arr[0]);
var position = arr.indexOf(25);
console.log('index no '+position+' = '+arr[2]);

arr[1] = 26;
console.log('update array '+arr);

// count length of an array
console.log('length of an array '+arr.length);

// add item end of an array
arr.push(36);
console.log('add item end of an array '+arr);

// remove item end of an array
arr.pop();
console.log('remove item end of an array '+arr);

// add item beginning of an array
arr.unshift(10);
console.log('add item beginning of an array '+arr);

// remove item beginning of an array
arr.shift();
console.log('remove item beginning of an array '+arr);

var part = arr.slice(1,3);
console.log(part);