var speech = "I am a good person. I don't snore at night";
var count = 0;
for (let i = 0; i < speech.length; i++) {
    var char = speech[i];
    if (char == " " && speech[i - 1] != " ") {
        count++;
    }
}
console.log(count);