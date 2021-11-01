function sum (a, b) {
    return a + b;                                           // a função dessa função é receber dois parametros e somar os dois 
}
console.log(sum (12, 3));


// mas se quisermos que ele funcionasse com um numero ilimitado de argumentos e ele realizasse a soma de todos os valores de maneira simples

///// REST OPERATOR (...)

function sum(...args) {
    return args.reduce ((acc, value) => acc + value, 0);
}
console.log(sum(5,5,5,2,3));

// const sum = (a,b, ...rest) => {             //podemos atribuir  argumentos na junto com o rest operator 
//     console.log(a,b, rest);
// }
// console.log(sum(5,5,5,2,3));


// Rest operator. Spread Operator ( ele tem a função de quebrar os itens e repassar para algun lugar)


const multiply = (... args) => args.reduce((acc, value) => acc * value, 1);
const sum = (...rest) => {
    return multiply(...rest);   //o spread operator vai pegar todos os itens do array e transformar em parametros 
}
console.log(sum(5,5,5,2,3,));

//// ele funciona para strings, arrays, objetos e objetos iteraveis

//ex strings

const str = 'Digital innovation One' ;

function logArgs(...args) {
    console.log(args);
}
logArgs(...str);

//ex array

const arr = [1,2,3,4];
function logArgs(...args) {
    console.log(args);   
}
logArgs(...arr);

// tambem serve para construir arrays

const arr2 = [...arr, 5, 6, 7]

logArgs(...arr2);

//ex obj

const obj = {
    test: 123
};

const obj2 = {
    ...obj,
    test2: 'hello'
};
console.log(obj2);

