var obj =  {                                                                            //maneira clássica de escrever objetos literais   dentro das chaves pode declarar propriedades e métodos
    prop1: 'Digital Innovation One'
};
console.log(obj);

//ou

var prop2  = "Digital Innovation One" ;

var obj = {
    prop2 : prop2
}
console.log(obj);

// com o surgimento do ECMA6 foi introdusido um shorthand com isso pode omitir o lado direito, com isso definir valores para propriedades e metodos sem repitir a palavra

var prop3 = "Digital Innovation One";
var obj = {
    prop3
}
console.log(obj);

// exemplo com função Metodo

function method1 ( ) {
    console.log(" Method called")
}
var obj = {
    method1
}
obj.method1( );

// com soma

var obj = {
    sum: function sum(a, b) {
        return a + b;
    }
}
console.log(obj.sum(1, 5));

// outra forma de encurtar 

var obj ={
sum (a, b) {
return  a + b 
}
}
console.log(obj.sum(2, 12));

var propName = "test" ;

var obj = {
    [propName + 'concat'] : 'prop value'
};
console.log(obj);

