//trabalhando com JavaScript em varios cenarios acabamos pegando partes de variaveis e atruibuindo a outras variaveis  
//ex; antes

var arr = ['Apple', 'Banana', 'Orange', ['Tomato']];
var apple = arr[0];
var banana = arr [1];
var orange = arr[2];
var tomato = arr[3] [0]

//console.log(apple);

//com o surgimento do Destucturing Assignment

var  [apple2, banana2, orange2,[tomato]] = ['Apple', 'Banana', 'Orange', [' Tomato']] ;

console.log(apple, apple2)

//podemos fazer a mesma coisa com objeto

var obj = {
    nome : 'Gabriel'
};
var {nome} = obj;

console.log(nome);  
 
var arr = ['Apple', 'Orange'];
var obj = {
    nome: 'Gabriel' ,
    props: {
        age: 25,
        favoriteColors: ['black', 'blue']
    }
};
var age = obj.props.age;
var [apple2] = arr;
var { 
    props:  {age: age2, favoriteColors: [color1, color2] }
    } = obj; 

console.log(color1);

//functions

function sum(arr) {
    return arr[0] + arr [1]
}

console.log(sum([5, 5])); 

//

function sum([a, b] = [ ]) {
    return a + b;
}

console.log(sum([5, 5])); 


