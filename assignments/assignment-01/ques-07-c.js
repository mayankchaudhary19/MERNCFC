let n = 8, i=0;
while(i<n){
    let j = n-i;
    let k = 0;
    let val = 1;
    while(j>0){
        process.stdout.write("  ");
        j--;
    }

    while(k<2*(i+1)-1){
        process.stdout.write(val+" ");
        if(k<i){
            val++;
        }else{
            val--;
        }
        k++;
    }
    console.log();
    i++;
}
