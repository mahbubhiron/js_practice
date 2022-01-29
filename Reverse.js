function reverseString(str){
    var reverse = "";
    for(var i =0;i<str.length;i++){
        var char = str[i];
        reverse = char + reverse;
    }
    return reverse;
}
var saySomtething = "ki khawa jai.... khida lagce";
console.log(reverseString(saySomtething));