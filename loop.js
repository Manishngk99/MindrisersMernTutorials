//Loop
//Starting point
//End point

//template literals research: are enclosed by backtick (`)

//For loop
//if we know the number of iteration

// for(<starting point>; <condition>; <increment>){}

// for(i=0; i<10; i++){
//     console.log(i);
// }

//While loop
    //used while we dont know iteration, 
    //rather the condition

// status = true;
// count = 0;
// while(status){
//     console.log("print", count);
//     count++
//     if (count > 10) {
//         status=false        
//     }
// }

//Do while
    //prints single time even if condition is not true.

//Assignment 7/14/2022
//Question 1: time table=7, 
//Question 2:
//output=
//  *
//  **
//  ***
//  ****

//Manish
//Question 1 Ans----------------------
var multi_number = 7;
var result;

for(num=1; num <= 10; num++){
    result = multi_number  * num
    console.log(multi_number + `*` + num + `=` + result) 
}

//Question2 Ans-----------------

var star = ``
for(i=0; i<5; i++){
    star += `*`;
    console.log(star)
}

//template literal
//Escape character








