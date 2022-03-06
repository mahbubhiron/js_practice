let ar = [1,2,1,5,4,8,10];
let num=0;
let temp=0;
while(num<ar.length){
for (let i = 0; i < ar.length; i++) {

    for(let j=1;j<ar.length;j++){
        temp= ar[i];
        ar[i]= ar[j];
        ar[j] = temp;
    }
}
num++;
console.log(ar);
}


