/* 
Write a loop to print even numbers from 1 to 40. Use continue to skip odd numbers.
*/

let i=0;

while(i<=40){
    even=i*2;
    console.log(even);
    i++;
    if(i==even){
        continue
    }
}


/*
display odd number from 55 to 85 and skip the numbers divisible by 5.
*/