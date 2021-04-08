let num = 1234783;
let count = 0;
while(num/10>=1){
    count += 1;
    num = num/10;
}
console.log(count+1);