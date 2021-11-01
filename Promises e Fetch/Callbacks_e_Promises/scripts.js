// //Promises  com ECMA6

// const doSomethingPromise= new Promise ((resolve, reject) => {  
//     setTimeout(function() {
//         // did something
//         resolve ('First data') ;
//     }, 1000);
// });

// const doOtherSomethingPromise= new Promise ((resolve, reject) => {  
//     setTimeout(function() {
//         // did something
//         resolve ('Second date') ;
//     }, 1000);
// });

// doSomethingPromise.then(data =>console.log(data));

//uma promise pode ter tres status
//Pending         >> quando ela esta pendente, em execução 
//FullFilled        >> quando ela terminou de executar
//Rejected        >> caso aconteça algum erro

//como fica enxuto 
const doSomethingPromise =  ( ) => 
    new Promise((resolve, reject) => {
    setTimeout(function() {
        // did something
        resolve ('First data') ;
    }, 1000);
});

const doOtherSomethingPromise =  ( ) => 
    new Promise((resolve, reject) => {
        // did something
        setTimeout(function() {
        resolve ('Second date') ;
    }, 1000);
});

doSomethingPromise( )
    .then(data => {
        console.log(data.split(' '));
        return doOtherSomethingPromise( );
    })
    .then(data2 => console.log(data2.split('')))
    .catch(error => console.log('Ops', error));

//Calbacks
function doSomething (callback) {
    setTimeout(function() {
        // did something
        callback ('Fist date') ;
    }, 1000);
}

function doOtherSomething (callback) {
    setTimeout(function() {
        //did other something
        callback('Second data') ;
    }, 1000);
}

function doAll( ) {
    try {
        doSomething(function(data)  {
            var processedData = data.split(' ');
            try {
                doOtherSomething(function(data2) {
                    var processedData2 = data2.split(' ');

                    try {
                        setTimeout(function() {
                            console.log(processedData, processedData2);
                        }, 1000);
                    } catch (err) {
                        //handle error
                    }
                } );
            } catch (err) {
                //handle error
            }
        });
    } catch (err) {
        //handle error
    }
}

doAll();
