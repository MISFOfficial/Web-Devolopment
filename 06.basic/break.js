/* 
Write a loop 1 to 200. Use break to exit the loop once you find 100.
*/

// for(let i=0; i<=200; i++){
//     console.log(i);
//     if(i>=100){
//         break
//     }
// }

/* 
Write a while loop that adds numbers starting from 1, but stops (using break) as soon as the sum reaches or exceeds 100
*/

let i=1;
let sum=0;
while(i<=100){
    sum=sum+i;
    console.log(i);
    i++
    if(sum>=100){
        break
    }
}

/* 
Write a loop that goes from 1 to 100, but stops (using break) when it encounters the first square number (like 4, 9, 16, etc.)
*/

// let i=0;
// while(i<=100){
//     sq=i**2;
//     console.log(i);
//     i++
//     if(sq==4){
//         break
//     }
//     continue
// }