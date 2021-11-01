// // a partir do ES7 - Async / Await  =  é uma voce de criar promise de maneira mais simples e lhe dar com promise dentro de promise
// // const simpleFunction = async ( ) => {
// //     return 12345;
// // };

// // console.log(simpleFunction());

// const asysncTimer = () => 
//     new Promise((resolv,reject) =>{
//         setTimeout(() => {
//             resolve(12345);
//         }, 1000);
//     });
    
//     const simpleFunc = async () => {
//         const data = await asynctimer ();
    
//         return data;
//     }
 
//     simpleFunc()
//     .then(data =>{
//         console.log(data);
//     })
//     .catch(err => {
//         console.log(err);
//     });


    //EventEmitter

    // const EventEmitter = require('events');

    // const emitter = new EventEmitter();

    // emitter.on('User logged', data => {
    //     console.log(data);
    // });

    // emitter.emit('User Logged' . { user: 'Gabriel Jonatas'});
