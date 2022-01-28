function checkLeapYear(year){
    if(0 == year % 4 && 0 != year % 100 || 0 == year % 400){
        return true;
    }else{
        return false;
    }
}

 if(checkLeapYear(1700)){
     console.log('Your year is leap year');
 }else{
     console.log('Your year is not leap year');
 }

 function factorial(n){
     var factorial = 1;
    for(let i = 1; i <= n; i++){
        factorial = factorial * i;
        console.log('factorial of ',i,' =',factorial);
    }
 }
 factorial(10);
 