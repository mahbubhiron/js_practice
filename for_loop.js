var arr = [15, 20, 25, 30, 35, 40, 45, 50];

for(var i = 0; i <= arr.length; i++){
    console.log(arr[i]);
    if(arr[1] == arr[i]){
        console.log(arr[i]);
        break;
    } 
}