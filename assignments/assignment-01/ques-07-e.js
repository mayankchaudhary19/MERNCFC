// Pascals Triangle
//            1                 1
//          1    1              1x11
//        1    2    1           11x11
//      1   3     3   1         121x11
//    1   4    6    4    1      1331x11
// 1    5   10   10    5    1   14641x11 

// nCr n = i ; r = j
// i-> 0 to n
// j-> 0 to i (included)

let n = 5, i = 0;
while(i<n){
    let j = 0;
    while(j<=i){
        let nCr = fact(i)/(fact(j)*fact(i-j));
        process.stdout.write(nCr+"");
        j++;
    }
    process.stdout.write("\n");
    i++;
}

function fact(num){
    if(num==0){
        return 1;
    }
    return num*fact(num-1);
}