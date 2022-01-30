// Arguments ekta library function jeta array er moto ekta object return kore ,arguments sudu matro kono function er vitore e kaj korte pare function bayre dile kaj korbena....!

function addNumbers(num1, num2) {
    var sum = 0;
    for (var i = 0; i < arguments.length; i++) {
        var object = arguments[i];
        sum = sum + object;
    }
    return sum;
}
console.log('Total sum = ', addNumbers(5, 3, 2, 10));