// function multiply ( a, b) {                        // função de multiplicação
//     return a * b;
// }
// console.log(multiply(5, 2));


function multiply(a, b = 1) {                   //apors o ECMA6 adicionando o sinal de = apos um  parametro consegimos atribuir um valor padão caso ele seja esquecido de ser atribuido no console.log ou ele for passado com valor de  undefined
    return a * b;
}
console.log(multiply(5,0));                  //ex: console.log(multiply(5)); ou console.log(multiply(5,undefined));

// isso funciona para todos os parametros


 