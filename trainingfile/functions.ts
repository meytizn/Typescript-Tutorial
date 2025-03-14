
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