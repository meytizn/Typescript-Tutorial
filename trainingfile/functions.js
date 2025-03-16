function first_greeting() {
    console.log("welcome to codding ");
}
first_greeting();
function second_greeting(name, age) {
    return "".concat(name, " is  ").concat(age, "  years old ");
}
console.log(second_greeting("mahdizamanian", 24));
function third_greeting(name, age, status) {
    if (status === void 0) { status = false; }
    return age ? " dear  you can have drinig license"
        : "you faild ";
}
console.log(third_greeting("ali", 18));
//never function has no return and used for errors and infint loop
function first_never() {
    throw new Error("error happend ");
}
function second_never(message) {
    while (true) {
        console.log(message);
    }
}
second_never("errrorrr from never func");
