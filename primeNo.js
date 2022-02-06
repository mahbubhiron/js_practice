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
primesNo(2, 20);


function random() {
    var random = Math.random() * 10000;
    var result = Math.round(random);
    return result;
}
function match() {
    console.log('r = ', random());
}
match();
//match(random()); thi is called "call by reference" when i take a parameter in match function this will work
