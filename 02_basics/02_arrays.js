const marval_heros=["thor","Ironman","spiderman"]
const dc_heros=["superman","flash","batman"]
// marval_heros.push(dc_heros) // not a method to combine two arrays
// console.log(marval_heros)
// marval_heros.concat(dc_heros)
//console.log(marval_heros)
//  const newarr=marval_heros.concat(dc_heros)//this is still not a good method better approch to solve is spread method
//  console.log(newarr)
 const spreadArray=[...marval_heros,...dc_heros]
 //console.log(spreadArray)
 console.log(Array.isArray("DEEPSHIKHA"))
 console.log(Array.from("DEEPSHIKHA"))
 console.log(Array.from({name : "DEEPSHIKHA"})) //intresting case
 
 



