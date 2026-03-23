//FOROF LOOP
// const arr = [1,2,3,4,5]
// for (const val of arr) {
   // console.log(val);
//}

const greeting="HELLO WORLD"
for (const greet of greeting) {
    console.log(`Each char is ${greet}`);
}

//MAPS
const map= new Map()
map.set('IN',"INDIA")
map.set('Fr',"FRANCE")
console.log(map);

 //can we use forof loop for this =>Yes 

// for (const key of map) {
   //console.log(map)}

  // this print whole in a array bt we want in single line so we use 
//   for (const [key,value] of map) {
//     console.log(key,':-',value);
  //}
   
//can we use forof for object 
//=> we can not use forof to iterate object we willuse other methods forin for object

const myObject ={
    js:'JAVASCRIPT',
    cpp:'C++',
    rb:'RUBY'
}
for (const key in myObject) {
    
    console.log(key);
    console.log(myObject[key])
    console.log(`${key} shortcut is for ${myObject[key]}`) ;

}

///FOREACH LOOP
const coding=["js","ruby","java","python","cpp"]
coding.forEach(function (val){
    console.log(val);
})