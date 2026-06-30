// // // // Hoisting
// // // // var 
// // // // console.log("The a value is:",a);
// // // // var a=10
// // // // console.log("The a value is:",a);
// // // //sep-> 
// // // // console.log("Apple","banana");

// // // // var a =20 //redeclaration
// // // // a =50 //re-assign
// // // // console.log("The a value is:",a);
// // // // // let 
// // // // console.log("The a value is:",a);
// // // // let a =50
// // // // a =60
// // // // console.log("The a value is:",a);


// // // // const
// // // // const a = 50
// // // // a=80
// // // // console.log(a);
// // // // let a =60 
// // // // {
// // // //     //local scope->let and const
// // // //     console.log(a);
// // // // }
// // // // scope 
// // // // global ->{outside of the block or else var is also called as global scope}
// // // // local scope ->{ inside the block}



// // // // data types
// // // // // pretime data types
// // // //     //string
// // // // let name = "ajay"
// // // // console.log(typeof(name));

// // // //     //Number
// // // // let num1 = 10.5
// // // // console.log(typeof(num1));

// // // //     //boolean
// // // // let fanIsRunning = true
// // // // console.log(typeof(fanIsRunning));

// // // //     //undefined
// // // // let x = undefined;
// // // // console.log(typeof(x));

// // // //     // null
// // // // let newValue = null
// // // // console.log(typeof(newValue));

// // // //     // NAN->not an number
// // // // console.log("The value is:"*x);


// // // // non premitive
// // //     // array
// // // // let arr = [20,30,57,58,21,"raja",undefined,null,true]
// // // // 20 ->arr[0]
// // // // 30 ->arr[1]
// // // // 57 ->arr[2]
// // // // 58 -> arr[3]
// // // // 21 -> arr[4]
// // // // raja -> arr[5]
// // // // undefined -> arr[6]
// // // // // null -> arr[7]
// // // // // true -> arr[8]
// // // // console.log(arr[8]);

// // // // console.log(arr);

// // //     // object
// // //     // key value pair
// // // // const students = {
// // // //     studentName:"Bala",
// // // //     stundentCourse:"MERN",
// // // //     stundentCity:"CBE",
// // // //     studentFamily:{
// // // //         dad:"Muthu",
// // // //         mom:"mani",
// // // //         siblings:{
// // // //             bro:"Parthi",
// // // //             sis:"Keerthi"
// // // //         }
// // // //     }
// // // // }
// // // // // console.log(students.studentFamily.siblings.bro);
// // // // // Object.Keys
// // // // // const keyValue = Object.keys(students)
// // // // // console.log(keyValue);

// // // // // Object.Values
// // // // // const keyValue = Object.values(students)
// // // // // console.log(keyValue);
// // // // // Object.entries
// // // // const keyValue = Object.entries(students)
// // // // console.log(keyValue);

// // // // const students = [
// // // //     {
// // // //     studentName:"Bala",
// // // //     stundentCourse:"MERN",
// // // //     stundentCity:"CBE",
// // // //     studentFamily:{
// // // //         dad:"Muthu",
// // // //         mom:"mani",
// // // //         siblings:{
// // // //             bro:"Parthi",
// // // //             sis:"Keerthi"
// // // //         }
// // // //     }
// // // // },
// // // // {
// // // //     studentName:"Arun",
// // // //     stundentCourse:"Java",
// // // //     stundentCity:"Erode",
// // // //     studentFamily:{
// // // //         dad:"Mani",
// // // //         mom:"Muthu",
// // // //         siblings:{
// // // //             bro:["Vetri","Karthi"],
// // // //             sis:"Divya"
// // // //         }
// // // //     }
// // // // },
// // // // ]

// // // // console.log(students[1].studentFamily.siblings.bro[0]);


// // // // operators
// // // // Arithmetic
// // // // +,-,*,/,%,++,--
// // // let a =10
// // // a++;
// // // console.log(a);


// // // // assigment
// // // // =,+=,-=,*=,/=,%=
// // // a+=10 
// // // // a = a+10
// // // console.log(a);

// // // // logical
// // // // &&, ||,!
// // // console.log(!(a==10));

// // // // comparison
// // // // >,<,>=,>=,==,===
// // // console.log(a==="21");

// // // // ternary operator
// // // let age = 17

// // // // condition?"correct":"false"

// // // console.log(age>=18?"Eligble":"not eligible");



// // // functions

// // // function functionName(){

// // // }

// // // function greet(){
// // //     console.log("Hello World");
// // // }

// // // greet()
// // // greet()
// // // greet()
// // // greet()
// // // greet()

// // // function add(a,b){
// // //     sum = a+b
// // //     return sum    
// // // }

// // // console.log(add(20,30));
// // // console.log(add(40,60));
// // // console.log(add(80,60));
// // // console.log(add(90,92));

// // // arrow
// // // let welcome = ()=>console.log("Arrow functions")
// // // welcome()

// // // IIFI
// // // const newIfi = (function(){
    
// // // })
// // // // ananoums
// // // const ana = function(){
    
// // // }

// // // // callback
// // // const Avg = (total)=>{
// // //     // total = 401/5 =80.5
// // //     avg = total/5
// // //     return avg
// // // }
// // // const total = (t,e,m,s,ss)=>{
// // //     sum = t+e+m+s+ss
// // //     // 90+80+77+67+87 = 401
// // //     return Avg(sum)
// // // }

// // // console.log(total(90,80,77,67,87));



// // // condtional Statements
// // // let age = 20
// // // if(age<13){
// // //     console.log("They Are Kids");    
// // // }
// // // else if(age>19){
// // //     console.log("They Are adult");
    
// // // }
// // // else{
// // //     console.log("They are Teenager");
    
// // // }

// // // switch


// // // let arr = [10,20,30,40,50]

// // // let total = 0

// // // for(let i=0;i<arr.length;i++){ 
// // //     total+=arr[i]  //10+20   
// // // }
// // // console.log(total);


// // // do{
// // //     console.log("While is working");    
// // // }while(10>15)

// // // for
// // // //for of
// // // for(let x of arr){
// // //     console.log(x);    
// // // }
// // // // for in 
// // // for(let x in arr){
// //     // console.log(arr[x]);    
// // // }
// // // foreach

// // //shift
// // let arr = [60,80,77,99,61]
// // arr.shift()
// // console.log(arr);
// // // unshift
// // arr.unshift(100)
// // console.log(arr);
// // // slice
// // const newArr = arr.slice(1,4)
// // console.log(newArr);
// // // splice
// // arr.splice(2,2,205)
// // console.log(arr);

// // // split
// // let text = "Hello Js"
// // var newtext = text.split(" ")
// // console.log(newtext);
// // // join
// // console.log(newtext.join(" "));


// // // sort
// // let array = [30,44,55,12,88,42]
// // array.sort()
// // console.log(array);

// // // map
// // array.map((item)=>console.log(item))
// // //reduce
// // let total = array.reduce((x,y)=>x+y) //44,30
// // console.log(total);

// // // filter
// // let even =array.filter((item)=>item%2==0)
// // console.log(even);

// // // includes
// // console.log(array.includes(31));

// // // indexof
// // console.log(array.indexOf(88));
// // // set
// // // let abc = new Set()

// // // abc.add(100)
// // // abc.add(80)
// // // abc.add(80)
// // // abc.add(100)
// // // abc.add(110)
// // // abc.add(110)
// // // abc.add(120)
// // // console.log(abc);


// // // destructuring
// // const arr = [100,200,80]
// // const arr1 = [50,60,70]

// // // spread
// // const arr2 = [...arr,...arr1]
// // // console.log(arr2);
// // // rest
// // const [a,b,...c] = arr2
// // console.log(a);
// // console.log(b);
// // console.log(c);

// // // object
// // const user = {
// //     names:"murugan",
// //     age:20,
// //     language:"python"
// // }

// // const {names,language} = user
// // console.log(names);
// // console.log(language);

// // // templateLiterals
// // var g =10
// // console.log(`The value is:${g}`);

// // setTimeout
// // setTimeout(()=>{
// //     console.log("Hello Welcome");
// // },5000)
// // // setInterval
// // setInterval(()=>{
// //     console.log("Hello Welcome");
// // },5000)
// // events
// // const add = (a,b)=>{
// //     console.log(a+b);
    
// // }

// //promise

// let ticket = new Promise((resolved,reject)=>{
//     let success = true;
//     if(success){
//         resolved("Ticked Booked sucessfully")
//     }
//     else{
//         reject("Unable to Book the ticket")
//     }
// })

// // ticket.then((res)=>console.log(res)).catch((er)=>console.log(err))
// // any
// // race
// // all
// // allSettled
// // race
// let ticketS1 = new Promise((resolved,reject)=>{
//     let success1 = true;
//     if(success1){
//         resolved("Ticked Booked sucessfully by S1")
//     }
//     else{
//         reject("Unable to Book the ticket by S1")
//     }
// })
// let ticketS2 = new Promise((resolved,reject)=>{
//     let success2 = true;
//     if(success2){
//         resolved("Ticked Booked sucessfully by S2")
//     }
//     else{
//         reject("Unable to Book the ticket by S2")
//     }
// })
// let ticketS3 = new Promise((resolved,reject)=>{
//     setTimeout(()=>{
//         let success3 = false;
//     if(success3){
//         resolved("Ticked Booked sucessfully by S3")
//     }
//     else{
//         reject("Unable to Book the ticket by S3")
//     }
//     },5000)
// })
// // Promise.race([ticketS1,ticketS2,ticketS3]).then((res)=>console.log(res)).catch((err)=>console.log(err))
// // 1 st information 
// // any -> success message
// // Promise.any([ticketS1,ticketS2,ticketS3]).then((res)=>console.log(res)).catch((err)=>console.log(err))
// // all ->failure message
// // Promise.all([ticketS1,ticketS2,ticketS3]).then((res)=>console.log(res)).catch((err)=>console.log(err))
// // allsettled ->
// Promise.allSettled([ticketS1,ticketS2,ticketS3]).then((res)=>console.log(res)).catch((err)=>console.log(err))

// const fetchData = new Promise((resolved,reject)=>{
//     fetch("https://fakestoreapi.com/products").then((res)=>{
//         if(res.ok){
//             resolved(res.json())
//         }
//         else{
//             reject("Unable to connect the API")
//         }
//     })
// })

// fetchData.then((data)=>{console.log(data)}).catch((err)=>{console.log(err)})

// async
// const fetchData = async()=>{
//     try {
//         const res = await fetch("https://fakestoreapi.com/products")
//         if(!res.ok){
//             throw Error("Unable to get API")
//         }
//         else{
//             const data = await res.json()
//             console.log(data);
            
//         }
//     } catch (error) {
//         console.log(error);        
//     }
// }

// fetchData()

// DOM
let btn = document.createElement("button")
btn.innerHTML ="Click"
document.body.append(btn)


// let title = document.getElementById("title")
const fetchData = async()=>{
    try {
        const res = await fetch("https://fakestoreapi.com/products")
        if(!res.ok){
            throw Error("Unable to get API")
        }
        else{
            const data = await res.json()
           for(let  x of data){
            let title = document.createElement("h1")
            title.innerHTML = x.title;
            document.body.append(title)
           }
            console.log(data);
            
        }
    } catch (error) {
        console.log(error);        
    }
}

fetchData()