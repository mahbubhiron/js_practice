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

for(var i =0;i<10;i++){
    var random = Math.random()*6;
    var result = Math.round(random);
    console.log("random",result);
}
