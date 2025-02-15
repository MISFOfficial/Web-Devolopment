// Task-1
// Access the golden rod color value in output.

// const colors = {
//     red: "#ff0000",
//     green: "#00ff00",
//     blue: "#0000ff",
//     "golden rod": '#daa520'
// }

// console.log(colors["golden rod"])


// Task-2
// For this object below add a property named passenger capacity with value 5

// const car = {
//     make: "Toyota",
//     model: "Corolla",
//     year: 2020
// };

// const cars = Object.assign(car,{"passenger capacity":5});
// console.log(cars)


// Task-3
// Display the physics marks as output.
// const student = {
//     name: "Hamim Sakep",
//     id: 5421,
//     physics: {
//         subject: "HSC Physics",
//         author: "Shahjahan Tapan",
//         marks: 30
//     }
// };

// console.log(student.physics.marks)


// Task-4
// Count the number of properties.

// let student = {
//     name: 'Ariana Grande',
//     age: 21,
//     city: 'Gaibandha',
//     isStudent: true
// };

// const length=Object.keys(student).length;
// console.log(length)

// Task-5 (Hard)
// Loop through an object and print the key-value pairs with their types

let myObject={
    name: 'John Doe',
    age: 25,
    city: 'Example City',
    isStudent: true
}
for(const i in myObject){
    console.log("Key:",i,"|","type:", typeof myObject[i])
}