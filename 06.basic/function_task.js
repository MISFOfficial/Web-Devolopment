// // Task-1
// // Take four parameters. Multiply the four numbers and then return the result
// function Multiply(a,b,c,d){
//     const multiply=a*b*c*d;
//     return multiply;
// }

// const multiply=Multiply(2, 3, 4, 5)
// console.log("Multiply the four numbers are :", multiply)


// // Task-2
// // Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.
// function mynumber(number){
//     // console.log(number)
//     if(number%2==0){
//         const mul=number*2;
//         // console.log(mul)
//         return mul;
//     }
//     else{
//         const div=number/2;
//         // console.log(div)
//         return div;
//     }
// }
// const result = mynumber(10);
// console.log('Result is :', result)

// // Task-3
// // Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.

// function make_avg(array){
//     let arr=[];
//     let sum=0;
//     for(let i=0; i<array.length; i++){
//         arr.push(array[i]);
//         // array=i;
//         sum=sum+array[i];
//     }
//     console.log("Array :", arr)
//     const av=sum/array.length;
//     return av;
// }
// const array=[10,20,30,40,50,60];
// const result=make_avg(array)
// console.log("Avg :", result)


// // Task-4
// // Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.

// function count_zero(string){
//     let count=0;
//     for(let i=0; i<string.length; i++){
//         // console.log(string[i])
//         if(string[i]==='0'){
//             count++;
//         }
//     }
//     return count;
// }

// const string='100000'
// const result=count_zero(string)
// console.log(result)


// // Task-5
// // Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return Even. If odd return Odd

// function odd_even(number){
//     if(number%2===0){
//         return "even";
//     }
//     else{
//         return "odd";
//     }
// }
// const num=110;
// const result=odd_even(num)
// console.log("The", num, "is an:", result,"number.")