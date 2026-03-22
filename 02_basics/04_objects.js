//const tinderUser=new Object()   =>this is singleton 
const tinderUser = {
    id:"fr67uyg";
    email;"ftrygftrdtrygyu"

} // this is non singleton both are same bt different method to declear 

 //console.log(tinderUser)

 const regularUser={
    email:"yadavieueiwdj@gimail.com",
    fullname:{
        userFullname:{ 
            firstName:"DEEPSHIKHA",
            lastName:"YADAV,"

        }
    }

 }
//  console.log(regularUser)
//  console.log(regularUser.fullname)
//  console.log(regularUser.fullname.userFullname)


//combine two objects is same as combine two arrays by using Object.assign
const obj1={1:"A",2:"B"}
const obj2={3:"C",4:"D"}
//const obj3= Object.assign({},obj1,obj2)   
//another method
const obj3= {...obj1,...obj2}//this is spread method
//console.log(obj3)



