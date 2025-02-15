const arry=['Moin', 'Jahin', 'Mahin', 'Yeakin'];

// console.log(arry)
// for(const i of arry){
//     console.log(i)
// }
// for(let j=0; j<arry.length; j++){
//     // console.log(j, ":", arry[j]);
//     console.log(arry[j]);
// }
// const revers = arry.reverse();
// console.log(revers)

const re_arry=[];

for(let i=arry.length -1; i>=0; i--){
    // console.log(arry[i]);
    re_arry.push(arry[i]);
}
console.log(re_arry)
