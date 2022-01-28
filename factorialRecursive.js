function factorial(n) {
    if (n == 0) {
        return 1;
    }  else {
        return n * factorial(n - 1);
    }
}

var result = factorial(0);

console.log('Factorial ', result);

//
// function fibonacci(n) {
//     var fibo = [0, 1];

//     for (var i = 2; i <= n; i++) {3
//         fibo[i] = fibo[i - 1] + fibo[i - 2];
//         console.log(fibo[i], fibo[i - 1], fibo[i -2]);
//     }
//     return fibo;
// }
// console.log(fibonacci(10));

function fibonacci(n){
    if(n == 0){
        return 0;
    }
    if(n == 1){
        return 1;
    }else{
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

let fn = 5;
for(let i = 0; i <= fn; i++){
    console.log(fibonacci(i));
}