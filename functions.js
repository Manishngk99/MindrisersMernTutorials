//Scope
//global scope
    //Var is global scope variable, it can be redeclared and initilized. 
    //let and const are block scoped variable, it can not be redeclared or initilized.
//Block scope
//Functional Scope
    //when keyword are not assigned, it creates global scope.


// var name = "john"
// let surname = "doe"

// if(true){
//     console.log({name})
//     console.log({surname});
// }

// if(true){
//     var name = "john"
//     // let surname = "doe"  //let and const variable are block scoped variable
// }

// console.log(name);
// console.log(surname);

// Functions----------------------------
//note: functions name writen in Camelcase
//Variable in snakecase
//function functionName(parameter){}

// function calculateSum(num1, num2) {
//     return num1 + num2;
// }

// console.log(calculateSum(10, 2));

//Call, execute, invoke the function
// functionsname(Argument1, argument2)

//Arrow Functions, fat arrrow functions//
// let sum = (num1, num2) => num1 + num2

// let result= sum(10,2)
// console.log(result);

// function CalculateMultiply(num1, num2){
//         return num1 * num2
// }

// result = CalculateMultiply(2,3);
// console.log(result);

CalculateMultiply = (num1, num2) => num1 * num2;
resultMultiply = CalculateMultiply(2,3)
console.log(resultMultiply) 



