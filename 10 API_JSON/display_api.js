const disUser=()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res=>res.json())
    .then(data=>show(data))
}
const show=(users)=>{
    // console.log(users)
    // for(let i=0; i<users.length; i++){
    //     const user=users[i]
    //     console.log(user.name)
    // }
    const elemntlist=document.getElementById('userList')
    for(let user of users){
        const li=document.createElement("li");
        li.innerText=user.name;
        elemntlist.appendChild(li);
    }
    // //   Alternatively, use forEach:
    // users.forEach(user => {
    //     const li = document.createElement("li");
    //     li.innerText = user.name;
    //     elemntlist.appendChild(li);
    // });
}