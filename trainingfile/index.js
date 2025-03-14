// let message:string = "hello world !"
// console.log(message)
var student_fullname = "Mahdi";
var student_age = 24;
var student_status = true;
// List
var school_list1 = ["a", "b", "c"];
var school_list2 = [1, 2, 3];
var school_list3 = ["a", 1]; //known as touple
// objects
var school_rooms = { floor: "first floor ", rooms: 30, status: true };
// customtype that has a default value
var Color;
(function (Color) {
    Color["Red"] = "red";
    Color["Blue"] = "blue";
    Color["Green"] = "green";
})(Color || (Color = {}));
var favcolor = Color.Green;
alert(favcolor);
