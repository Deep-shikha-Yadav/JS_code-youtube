// function Twonumbers(num1,num2){
//     console.log(num1+num2)
// }
//  const result=Twonumbers(4,5)
//  console.log(result)

 function Twonumbers(num1,num2){
  let result=num1+num2
  return result
}
const result=Twonumbers(4,5)
//console.log("result:",result)

const user={
  username :"DEEPSHIKHA",
  price:199

} ;
function handleobject(anyObject){
  console.log(`anyname is ${anyObject.username} and price is ${anyObject.price}`)
}
handleobject(user);


const newArray=[200,500,315,106]
 function returnValue(getArray){
  return getArray[1]
 }
console.log(returnValue(newArray));

