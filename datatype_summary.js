// ? use ( Better comments ) extension for better comment view highlights
// * primitive datatypes -- 7 catagory

// * 7 types : string, number, boolean, null, undefined, symbol, BigInt

const score = 100

const scoreValue = 100.2
const isLoggedIn = true
const outSideTemp = null
let userEmail;

const Id = Symbol('1234')
const anotherId = Symbol('1234')

// console.log(Id != anotherId)

// const bigNumber = 21847354812845217412n

// * Reference (Non primitive)

// * Array, Object, Functions

// ! javascript is dynamicaly typed language


// const heros = ["shaktiman", "flying Jatt", "naagraj"];
let myObj={
    name: "vaibhav",
    age: 22,
}

// const myFunction = function(){
//     console.log("Hello World");
// }
// console.table([typeof scoreValue, outSideTemp, myObj]);
// console.log("data fetch completed")


// myFunction;

// function reverseString(str){
//     return str.split('').reverse().join('');
// }

// console.log(reverseString('nhsirk erah'));

let Operator1={
    Type_of_Value : ["undefined"],
    Result : ["undefined"],
}
let Operator2={
    Type_of_Value : ["Null"],
    Result : ["object"],
}
let Operator3={
    Type_of_Value : ["Boolean"],
    Result : ["boolean"],
}
let Operator4={
    Type_of_Value : ["Number"],
    Result : ["number"],
}
let Operator5={
    Type_of_Value : ["String"],
    Result : ["string"],
}
let Operator6={
    Type_of_Value : ["Object (native and does not implement [[Call]])"],
    Result : ["object"],
}
let Operator7={
    Type_of_Value : ["Object (native or host and does implement [[Call]])"],
    Result : ["function"],
}
let Operator8={
    Type_of_Value : ["Object (host and does not implement [[Call]])"],
    Result : ["Implementation-defined except may not be 'undefined', 'boolean', 'number', or 'string'"],
}

// console.table([Operator1,Operator2,Operator3,Operator4,Operator5,Operator6,Operator7,Operator8]);

// ? this is just only for fun


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// * Stack ( primitive ), heap ( Non-Primitive )

let myYoutubename = "Scopcodedotcom"

let anothername = myYoutubename

anothername = "codesdotcom"

console.log(myYoutubename);
console.log(anothername);

// ? 👆 this is example of primitive means -> stack (it changes only in copy value - not in real given value)

let userOne = {
    email: "user@example.com",
    upi: "user@sbi"
}

let userTwo = userOne

userTwo.email = "BC@google.com"
console.log(userOne.email);
console.log(userTwo.email);

// ? 👆 this is example of Non-primitive means -> Heap (it changes reference value -> change in original value)