// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
   
// readline.question('Who are you?', credits => {
//     console.log(`Hey there ${credits}!`);
//     readline.close();
// });

// const prompt = require('prompt-sync')();

// const credits = prompt('credits?');
// console.log('hey ${credits}');

let credits = 8000;

if(7500<=credits){
    console.log("Tera leader");
}else if(6000<=credits && credits<7500){
    console.log("Gega leader");
}else if(4500<=credits && credits<6000){
    console.log("Mega leader");
}else{
    console.log("Rising Star");
}