let n = 5;
let nst = 1;
let nsp = 2*n-2;
let i = 0;
while(i<2*n){
    let j = 0;
    let l = 0;
    while(j<nst){
        process.stdout.write("*\t");
        j++;
    }
    
    let k = 0;
    while(k<nsp){
        process.stdout.write(" \t");
        k++;
    }
  

    while(l<nst){
        process.stdout.write("*\t");
        l++;
    }

    if(i<n-1){
        nst++;
        nsp-=2;
    }else{
        nst--;
        nsp+=2;
    }
    process.stdout.write("\n");
    i++;
}