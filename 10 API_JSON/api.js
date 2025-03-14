// first method ***
const demodata=()=>{
    fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((res) => res.json())
    .then(json => {
        console.log(json)
    });
}

// 2nd mathod *****
const userButton=()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res=>res.json())
    .then(data=>{
        display(data)
    })
}

const display=(users)=>{
    console.log(users[0]) //[0] count user
}