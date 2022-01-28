function primesNo(l_n, h_n) {
    let flag = 0;
    for (let i = l_n; i < h_n; i++) {
        let flag = 0;
        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                flag = 1;
                break;
            }
        }
        if (i > 1 && flag == 0) {
            console.log(i);
        }
    }
}
primesNo(2,20);

// swap 1
var x = 5;
var y = 7;
x = x + y;
console.log('x = ',x);
y = x - y;
console.log('y = ',y);
x = x - y;
console.log('x = ',x);

// swap 2
var a = 5;
var b = 7;
var temp = 0;
temp = a;
console.log('temp = ',temp);
a = b;
console.log('a = ',a);
b = temp;
console.log('b = ',b);

// swap 3 way of javaScript special
var p = 5;
var q = 7;
[p, q] = [q, p];
console.log('p =: ',p,'q =: ',q);