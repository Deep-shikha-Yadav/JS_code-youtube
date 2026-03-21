const array=[0,1,3,6,8]
const array1=["deep","shikha","yadav"]
const array11= new Array(0,1,3,6,8)
// console.log(array11[2])
// console.log(array11)
// array11.push(5)
// array11.push(9)
// array11.pop()
// console.log(array11)
// array11.unshift(2)// adding element at the starting o array methd is not good bcz taking time
// array11.shift()// This is working like pop
// console.log(array11)
// console.log(array11.includes(9))//give boolean output that array is present or not 
// console.log(array11.indexOf(9))//give position at which array present 

// const newArray= array11.join() //convert array into string 
// console.log(array11)
// console.log( newArray)
// console.log( typeof newArray)
  
//++++++++++++++++++++++++++++++++++SLICE,SPLICE+++++++++++++++++++++++++++++++++++++++++++
console.log("A",array11) //A [ 0, 1, 3, 6, 8 ]
const myn1= array11.slice(1,3)
console.log(myn1)  //[ 1, 3 ]
console.log("B",array11) //  B [ 0, 1, 3, 6, 8 ]
const myn2= array11.splice(1,3)
console.log(myn2) //[ 1, 3, 6 ]
console.log("C",array11) //  C [ 0, 8 ]



