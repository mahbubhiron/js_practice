// swap 1
var x = 5;
var y = 7;
x = x + y;
y = x - y;
x = x - y;
console.log('X = ', x, " Y =", y);

// swap 2
var a = 5;
var b = 7;
var temp = 0;
temp = a;
a = b;
b = temp;
console.log('A =', a, "B =", b);

// swap 3 way of javaScript special
var p = 5;
var q = 7;
[p, q] = [q, p];
console.log('p =: ', p, 'q =: ', q);