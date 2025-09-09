//# Primitive data  type
//7 categories:String ,Number,Boolean,null,undefined,Symbol,BigInt

const score = 100
const scoreValue=100.3

const isLoggedIn=false
const outsideTemp=null
let userEmail=undefined//or let useremail; same meaning
const id=Symbol('123')
const anotherId=Symbol('123')
//agr tum symbol m same value bhi pass karoge fir bhi different result milga

console.log(id===anotherId)//false

const bigNumber =23478777219912779989n

//Reference type (Non primitive)
 //Array,Objects,Functions //datatype object hai function ka function object

 const heores=["Sonia","xys","avb"]
  let myobj={
    name:"hitesh",
    age:22,
 }

 const myfunction=function(){
     console.log("Hello world")
 }
