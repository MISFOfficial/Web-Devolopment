//  function myName(){
//     console.log("Muksitul Islam")
//  }
//  myName()

//  function myName(jahin){
//     console.log(jahin)
//  }
//  myName("Muksitul Islam")

// // Addition
// function myNumber(a,b){
//   sum=a+b;
//   console.log("Sum of a+b is :", sum)
// }

// myNumber(10,20);
// console.log("---------------")

// function tenTime(number){
//   const result=number*10;
//   return result;
// }

// const output= tenTime(5);
// console.log(output)

// arry sum

function sum(arry) {
  // console.log(arry)
  let sum = 0;
  for (let i = 0; i < arry.length; i++) {
    console.log(arry[i])
    sum = sum + arry[i];
    // console.log(sum)
  }
  return sum;
}
const arry = [10, 20, 30];
const result = sum(arry);
console.log("Final Result is :", result);
