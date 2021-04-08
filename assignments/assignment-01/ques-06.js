let num = 9735;
let revNum = 0;
while(num >0){
    revNum = (revNum*10)+(num%10);
    num = Math.floor(num/10);
}

console.log(revNum);

// converting to string
// num = num+"";
// num = num.split("").reverse().join("");

// for negative nos. with no leading zeroes after reversing
// num = parseFloat(num.toString().split('').reverse().join(''))*Math.sign(num);
// console.log(num);