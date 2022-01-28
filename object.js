var obj1 = {id:69, name:"mahbub", phn:1914679736};
var obj2 = {id:72, name:"kazol", phn:735989595};

// two way to see specific objects element
var obj1_phnNo = obj1.phn;
console.log(obj1_phnNo);
var obj1_phnNo1 = obj1["phn"];
console.log(obj1_phnNo1);
//
console.log(obj1);

// tow way to pdate objects element
obj1.phn = 2222222222;
console.log("After Update phnNo = ",obj1);
obj1["phn"] = 33333333333;
console.log("After Update phnNo = ",obj1);

// add object element
obj1.degicnation = "GM";
//another way to add new object element
obj1["designation"] = "PM";
console.log("After add new object = ",obj1);