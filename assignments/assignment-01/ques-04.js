let n = 200; 
let odd = 1;
let even = 2;
//O(n)
while(even<n){
    process.stdout.write(even+",");
    even=even+(4*odd);
    odd++;
}

// O(n^2)
// odd=1;
// even= 2;
// while(even<n){
//     process.stdout.write(even+",");
//     let jump = odd;
//     while(jump>0){
//         even+=2;
//         jump--;
//     }
//     even+=2;
//     odd+=2;
// }
