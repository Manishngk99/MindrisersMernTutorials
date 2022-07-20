//Pass by value and pass by reference
//pass by value: copy data, pass by reference: position

//Reference data type

//Spread operator: to copy data from variables.
//rest operator.
//object destructuring => ... rest operators.


//Pass by value
// let a = 1; 
// let b = a; // b is primitive value and a is copy of primitive value 
// console.log(a);
// a = 2;
// console.log({a})

// let x = "first"
// let y = x;
// // console.log(y)
// x = "changed"
// console.log(x);

let arr = [1, 2, 3]
let arr1 = arr
// console.log(arr1)
arr1.push(4);
console.log(arr);
console.log(arr1);




