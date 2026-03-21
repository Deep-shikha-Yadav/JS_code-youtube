//object litrals
const mysym=Symbol("key1")

const jsUser={
    name:"DEEPSHIKHA",
    "fullname":"DEEPSHIKHA YADAV",
    [mysym]:"mykey1",
    age: "20",
    location:"UTTAR PRADESH",
    email:"yadav119988@gmail.com"

    
}
//console.log(jsUser)
//Object.freeze(jsUser)
//  jsUser.email="yadavhxjskchu@gmqil.com"
// console.log(jsUser)

jsUser.greeting = function(){
    console.log("HELLO JS USER");
}
jsUser.greeting2=function(){
    console.log(`Hello jsUser ${this.name}`)
}
console.log(jsUser.greeting())
console.log(jsUser.greeting2())


