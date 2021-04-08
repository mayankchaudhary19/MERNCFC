let n = 7, i = 0;
while(i<2*n-1){
    let num = n;
    let j= 0;
    while(j<2*n-1){
        process.stdout.write(num+" ");
        if(i<(2*n)/2){
            if(j<(2*n)/2-1){
                if(i>j){
                    num--;
                }
            }else{
                if(2*n-3-i<j){
                    num++;
                }
            }
        }else{
            if(j<(2*n)/2-1){
                if(2*n-2-i>j){
                    num--;
                }
            }else{
                if(j>=i){
                    num++;
                }
            }
        }
        j++;
    }
    process.stdout.write("\n"); 
    i++;
}