const mobile ={
    brand: 'sm',
    price: '25660',
    color: 'Black'
}

for(const i in mobile){
    // console.log(i)
    // console.log(mobile[i])
    console.log(i,':', mobile[i])
    // console.log(mobile[i].length)

}

const key = Object.keys(mobile)

console.log(key)

for(const j of key){
    console.log(j, ':', mobile[j])
}

const myObject = {
 a: 1,
 b: 2,
 c: 3
};

for (let prop in myObject) {
 console.log(myObject[prop]);
}