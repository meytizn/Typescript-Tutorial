
function first_greeting () :void {
  console.log("welcome to codding ")
}
first_greeting()




function second_greeting ( name:string , age:number ) :string {
  return `${name} is  ${age}  years old `
}
console.log(second_greeting("mahdizamanian" ,24))




function third_greeting (   name:string, age?:number, status:boolean=false ) :string {
  return age?` dear  you can have drinig license`
          :`you faild `
}
console.log(third_greeting("ali",18))





//never function has no return and used for errors and infint loop

function first_never():never{
  throw new Error("error happend ")
}

function second_never(message:string):never{
  while(true){
    console.log(message)
  }
}
second_never("errrorrr from never func")


//overloading function

function combiner(a:string,b:string):string
function combiner(a:number,b:number):number
function combiner(a:any,b:any):any{
  return a+b
}