// // Hoisting
// // var 
// // console.log("The a value is:",a);
// // var a=10
// // console.log("The a value is:",a);
// //sep-> 
// // console.log("Apple","banana");

// // var a =20 //redeclaration
// // a =50 //re-assign
// // console.log("The a value is:",a);
// // // let 
// // console.log("The a value is:",a);
// // let a =50
// // a =60
// // console.log("The a value is:",a);


// // const
// // const a = 50
// // a=80
// // console.log(a);
// // let a =60 
// // {
// //     //local scope->let and const
// //     console.log(a);
// // }
// // scope 
// // global ->{outside of the block or else var is also called as global scope}
// // local scope ->{ inside the block}



// // data types
// // // pretime data types
// //     //string
// // let name = "ajay"
// // console.log(typeof(name));

// //     //Number
// // let num1 = 10.5
// // console.log(typeof(num1));

// //     //boolean
// // let fanIsRunning = true
// // console.log(typeof(fanIsRunning));

// //     //undefined
// // let x = undefined;
// // console.log(typeof(x));

// //     // null
// // let newValue = null
// // console.log(typeof(newValue));

// //     // NAN->not an number
// // console.log("The value is:"*x);


// // non premitive
//     // array
// // let arr = [20,30,57,58,21,"raja",undefined,null,true]
// // 20 ->arr[0]
// // 30 ->arr[1]
// // 57 ->arr[2]
// // 58 -> arr[3]
// // 21 -> arr[4]
// // raja -> arr[5]
// // undefined -> arr[6]
// // // null -> arr[7]
// // // true -> arr[8]
// // console.log(arr[8]);

// // console.log(arr);

//     // object
//     // key value pair
// // const students = {
// //     studentName:"Bala",
// //     stundentCourse:"MERN",
// //     stundentCity:"CBE",
// //     studentFamily:{
// //         dad:"Muthu",
// //         mom:"mani",
// //         siblings:{
// //             bro:"Parthi",
// //             sis:"Keerthi"
// //         }
// //     }
// // }
// // // console.log(students.studentFamily.siblings.bro);
// // // Object.Keys
// // // const keyValue = Object.keys(students)
// // // console.log(keyValue);

// // // Object.Values
// // // const keyValue = Object.values(students)
// // // console.log(keyValue);
// // // Object.entries
// // const keyValue = Object.entries(students)
// // console.log(keyValue);

// // const students = [
// //     {
// //     studentName:"Bala",
// //     stundentCourse:"MERN",
// //     stundentCity:"CBE",
// //     studentFamily:{
// //         dad:"Muthu",
// //         mom:"mani",
// //         siblings:{
// //             bro:"Parthi",
// //             sis:"Keerthi"
// //         }
// //     }
// // },
// // {
// //     studentName:"Arun",
// //     stundentCourse:"Java",
// //     stundentCity:"Erode",
// //     studentFamily:{
// //         dad:"Mani",
// //         mom:"Muthu",
// //         siblings:{
// //             bro:["Vetri","Karthi"],
// //             sis:"Divya"
// //         }
// //     }
// // },
// // ]

// // console.log(students[1].studentFamily.siblings.bro[0]);


// // operators
// // Arithmetic
// // +,-,*,/,%,++,--
// let a =10
// a++;
// console.log(a);


// // assigment
// // =,+=,-=,*=,/=,%=
// a+=10 
// // a = a+10
// console.log(a);

// // logical
// // &&, ||,!
// console.log(!(a==10));

// // comparison
// // >,<,>=,>=,==,===
// console.log(a==="21");

// // ternary operator
// let age = 17

// // condition?"correct":"false"

// console.log(age>=18?"Eligble":"not eligible");



// functions

// function functionName(){

// }

// function greet(){
//     console.log("Hello World");
// }

// greet()
// greet()
// greet()
// greet()
// greet()

// function add(a,b){
//     sum = a+b
//     return sum    
// }

// console.log(add(20,30));
// console.log(add(40,60));
// console.log(add(80,60));
// console.log(add(90,92));

// arrow
// let welcome = ()=>console.log("Arrow functions")
// welcome()

// IIFI
// const newIfi = (function(){
    
// })
// // ananoums
// const ana = function(){
    
// }

// // callback
// const Avg = (total)=>{
//     // total = 401/5 =80.5
//     avg = total/5
//     return avg
// }
// const total = (t,e,m,s,ss)=>{
//     sum = t+e+m+s+ss
//     // 90+80+77+67+87 = 401
//     return Avg(sum)
// }

// console.log(total(90,80,77,67,87));



// condtional Statements
// let age = 20
// if(age<13){
//     console.log("They Are Kids");    
// }
// else if(age>19){
//     console.log("They Are adult");
    
// }
// else{
//     console.log("They are Teenager");
    
// }

// switch


let arr = [10,20,30,40,50]

// let total = 0

// for(let i=0;i<arr.length;i++){ 
//     total+=arr[i]  //10+20   
// }
// console.log(total);


// do{
//     console.log("While is working");    
// }while(10>15)

// for
//for of
for(let x of arr){
    console.log(x);    
}
// for in 
for(let x in arr){
    console.log(arr[x]);    
}
// foreach