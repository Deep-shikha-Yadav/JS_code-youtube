// const userEmail=[]
// if(userEmail){
//     console.log(`Got user email`)
// }
// else{
//      console.log(` Don't have user email`)
// }


//FALSY VALUES => FALSE, 0, -0,"", null ,undefined, NaN, BigInt 0n
//TRUTHY VALUES =>except this all are truthy values  
//TRUTHY VALUES =>"0","false"," ",[],{},function(){}

const emptyObj = {}
if (Object.keys(emptyObj).length===0){
    //console.log("Object is empty");
}



 //Nullish coalescing operator (??) : (null,undefined => work around these two keyword)
//   let val1;
//   val1 = 5 ?? 10
//   console.log(val1)  //OUTPUT will come 5 then why we need this ?? opeator  
//    val1 = null ?? 10
//   console.log(val1)  //OUTPUT 10
//    val1 = undefined?? 10
//   console.log(val1)  //OutPUT 10

  //TERNIARY OPERATOR => both above and this are different
  //condition ? true : false 
  const val2=100
  val2>=80 ? console.log("less than 80") : console.log("Greater  than 80")
 
