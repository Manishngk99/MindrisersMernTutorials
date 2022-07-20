//Synchronous

//callback
    //functions which are passed as variable to another function.
    //

// console.log(1);

// for(let i=0; i<10; i++){
//     console.log(i);
// }

// console.log("finish");

//Asynchronous function
    //runs in background
    
// setTimeout(): macroTask
    
//Promise: microTask
//syntax: callback function
    //- Pending
    //- resolve
    //- reject

//complex operations
    //try catch

    // try{
    //     a=b+c
    // }catch(error){
    //     console.log(error);
    // }

    // console.log("hello");

    //event loop: to manage callstack, callbackqueue, jobqueue.
//callStack: last in last out

    //queue: first in first out
//callbackqueue //
//


//Assignment 3
api_res = [
    {
        id:1,
        name: "manish",
        address: "ktm"
    }
    ,
    {
        id:2,
        name: "shiva",
        address: "dhading"
    }
]

// function getValue(input, field){
//     var arr = [];
//     for(i=0; i < input.length; i++){
//         arr.push(input[i][field])
//     }
//     return arr;
// }

// result = getValue(api_res, "name")
// console.log(result)

//.map
let DisplayName = api_res.map(el => el.name);
console.log(DisplayName);

//async-await
    //- to make asynchronous function to synchronous
// async function calculate(){}
