let i = 0 , n = 5;
let j, k; 
while(i < n){
    j= n-i-1;
    k= 0;
    let val =i+1;
    while(j >0){
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
    process.stdout.write("\n");
    i++;
}