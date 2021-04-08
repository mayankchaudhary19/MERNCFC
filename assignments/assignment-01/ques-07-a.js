let n= 5, i = 0;
while(i<n){
    let j = 0;
    while(j<=i){
        process.stdout.write("* ");
        j++;
    }
    process.stdout.write("\n");
    i++;
}