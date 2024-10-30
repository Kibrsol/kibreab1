//my first js code
console.log('hello world 2');

let firstName = 'Kibreab';
let lastName = 'menjew';
console.log(firstName);

let name = "kibreab"; // string Literal
let age = 20; // Number Literal
let isAccepted = true // Boolean Literal
let fisrtName = undefined;
let selectedColor = null;


let person = {
    name: 'Kibreab',
    age: 25
};
console.log(person);

let selectedColors = ['yellow', 'green'];
console.log(selectedColors);

function greet(name, lastName) {
    console.log('hello'  + name + '' + lastName);
}
greet('KB', 'Lulu');


//performing a task
function square(number){
    return number * number;
}
let number = square(9);
console.log(number);