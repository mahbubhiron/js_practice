
function callBack(name, age, task) {
    console.log('Hello ', name, 'Your age is ', age);
    task();
}
function bibahoSomoyHoiNai() {
    console.log("Tomar bibaho korar somoy hoi nai......!");
}
function bibahoSomoyColce() {
    console.log("Tomar bibaho korar somoy hoia gece......!");
}
callBack('Mahbub', 26, bibahoSomoyHoiNai);
callBack("Tomal", 26, bibahoSomoyColce);