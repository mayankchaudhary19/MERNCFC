let n = 7; let i = 0;
let nst = n;
let nsp = 1; 
while(i<2*n-1){
    let j = 0,k =0, l=0;
    while(j<nst){
        process.stdout.write("* ");
        j++;
    }
    while(k<nsp&& i>0){
        process.stdout.write("  ");
        k++;
    }
    while(l<nst){
        process.stdout.write("* ");
        l++;
        if((i==0||i==2*n-2)&& l ==nst-1){
            l++;
        }
    }
    if(i<n-1){
        nst--;
    }else{
        nst++;
    }
    if(i>0){
        if(i<n-1){
            nsp+=2;
        }else{
            nsp-=2;
        }
    }
    process.stdout.write("\n");
    i++;
}