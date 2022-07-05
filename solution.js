let introSentence = "hello, my name is Fran and I am";
let age = 25;
console.log(introSentence + ` ` + age);

/* The + operator combaine the string and the number as one string as result */

let integer = `1005`;
const number = +integer;
console.log(number);
console.log(parseInt(integer, 0));
console.log(Number(integer));

let float = `10.05`;
console.log(+float);
console.log(parseFloat(float));;
console.log(Number(float));
console.log(parseInt(float,0));