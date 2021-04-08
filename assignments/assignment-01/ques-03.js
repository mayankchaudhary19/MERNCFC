let num1= 60;
let num2= 36;

let divident = num1;
let divisor = num2;
if(num1<num2){
    divisor = num2;
    divident = num1;
}
while(divident%divisor!=0){
    let remainder = divident %divisor;
    divident= divisor;
    divisor = remainder;
}

console.log(divisor);