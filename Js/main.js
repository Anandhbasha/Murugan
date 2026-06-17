// Hoisting
// var 
// console.log("The a value is:",a);
// var a=10
// console.log("The a value is:",a);
//sep-> 
// console.log("Apple","banana");

// var a =20 //redeclaration
// a =50 //re-assign
// console.log("The a value is:",a);
// // let 
// console.log("The a value is:",a);
// let a =50
// a =60
// console.log("The a value is:",a);


// const
// const a = 50
// a=80
// console.log(a);
// let a =60 
// {
//     //local scope->let and const
//     console.log(a);
// }
// scope 
// global ->{outside of the block or else var is also called as global scope}
// local scope ->{ inside the block}



// data types
// // pretime data types
//     //string
// let name = "ajay"
// console.log(typeof(name));

//     //Number
// let num1 = 10.5
// console.log(typeof(num1));

//     //boolean
// let fanIsRunning = true
// console.log(typeof(fanIsRunning));

//     //undefined
// let x = undefined;
// console.log(typeof(x));

//     // null
// let newValue = null
// console.log(typeof(newValue));

//     // NAN->not an number
// console.log("The value is:"*x);


// non premitive
    // array
// let arr = [20,30,57,58,21,"raja",undefined,null,true]
// 20 ->arr[0]
// 30 ->arr[1]
// 57 ->arr[2]
// 58 -> arr[3]
// 21 -> arr[4]
// raja -> arr[5]
// undefined -> arr[6]
// // null -> arr[7]
// // true -> arr[8]
// console.log(arr[8]);

// console.log(arr);

    // object
    // key value pair
// const students = {
//     studentName:"Bala",
//     stundentCourse:"MERN",
//     stundentCity:"CBE",
//     studentFamily:{
//         dad:"Muthu",
//         mom:"mani",
//         siblings:{
//             bro:"Parthi",
//             sis:"Keerthi"
//         }
//     }
// }
// // console.log(students.studentFamily.siblings.bro);
// // Object.Keys
// // const keyValue = Object.keys(students)
// // console.log(keyValue);

// // Object.Values
// // const keyValue = Object.values(students)
// // console.log(keyValue);
// // Object.entries
// const keyValue = Object.entries(students)
// console.log(keyValue);

// const students = [
//     {
//     studentName:"Bala",
//     stundentCourse:"MERN",
//     stundentCity:"CBE",
//     studentFamily:{
//         dad:"Muthu",
//         mom:"mani",
//         siblings:{
//             bro:"Parthi",
//             sis:"Keerthi"
//         }
//     }
// },
// {
//     studentName:"Arun",
//     stundentCourse:"Java",
//     stundentCity:"Erode",
//     studentFamily:{
//         dad:"Mani",
//         mom:"Muthu",
//         siblings:{
//             bro:["Vetri","Karthi"],
//             sis:"Divya"
//         }
//     }
// },
// ]

// console.log(students[1].studentFamily.siblings.bro[0]);


// operators
// Arithmetic
// +,-,*,/,%,++,--
let a =10
a++;
console.log(a);


// assigment
// =,+=,-=,*=,/=,%=
a+=10 
// a = a+10
console.log(a);

// logical
// &&, ||,!
console.log(!(a==10));

// comparison
// >,<,>=,>=,==,===
console.log(a==="21");

// ternary operator
let age = 17

// condition?"correct":"false"

console.log(age>=18?"Eligble":"not eligible");

