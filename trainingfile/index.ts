// let message:string = "hello world !"
// console.log(message)


let student_fullname : string ="Mahdi"
let student_age : number =24
let student_status : boolean = true

// List
let school_list1 : string[] = ["a","b","c"]
let school_list2 : Array<number> = [1,2,3]
let school_list3 :[string,number] = ["a",1] //known as touple


// objects
let school_rooms :{floor:string , rooms:number , status: boolean }= {floor:"first floor " ,rooms:30 , status:true  }


// customtype that has a default value
enum Color{
  Red="red",
  Blue="blue",
  Green="green"
}

let favcolor : Color = Color.Green
alert(favcolor)



