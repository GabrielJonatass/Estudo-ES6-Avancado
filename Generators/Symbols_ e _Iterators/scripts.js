/// symbols é uma maneira de gerar um indentificador único, a forma de gerar esse identificador é invocando um symbol

const uniqueId = Symbol('Hello' );                     // um symbol numca é igual ao outro, o valor do symbol não é uma string e não é um numero, ele é simplesmente um identificador unico

// const obj = {
//     [uniqueId]: 'Hello'
;

//console.log(obj);

//well Know symbols

// Symbol.iterator                         // esses tipos podem ser udados para add propriedades ao obj
// Symbol.split
// Symbol.toStringTag

// // ex

// const arr =[1 ,2, 3, 4];

// const it =arr [Symbol.iterator]( );                 // o array iterador nada mais é que uma interface para voce consumir passo a passo de uma lista, estrutura de dados
          
// console.log(it.next( ));
// console.log(it.next( ));
// console.log(it.next( ));
// console.log(it.next( ));
// console.log(it.next( ));
       
//EC6

for (let value of arr) {
   console.log(value)
}


// iteradores são ima interface

//Generators são funções com pausas, e elas despausam e retornam valores atraves da interface de interação (value,done)

function hello ( ) {
    
console.log("Hello");
console.log("From");
console.log("Function");
}
    

