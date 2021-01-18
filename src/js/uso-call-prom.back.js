import { buscarHeroe as buscarHeroeCallback } from './js/callbacks.js'
import { buscarHeroe } from './js/promesas.js'
import './styles.css';

// const heroeId1 = 'spider';
// const heroeId2 = 'iron';
const heroeId3 = 'spider';

// Para provocar el catch descomentar una de estas dos lineas o las dos
// const heroeId1 = 'he-man';
// const heroeId2 = 'hulk';

// Bloque con ejemplo de callback hell
// buscarHeroe( heroeId1, ( err, heroe1 ) => {
    
//     if ( err ) { console.error( err ); }

//     buscarHeroe( heroeId2, ( err, heroe2 ) => {

//         if ( err ) { console.error( err ); } 

//         buscarHeroe( heroeId3, ( err, heroe3 ) => {
        
//             if ( err ) { 
//                 console.error( err ); 
//             } else {
//                 console.info( `Embarcando a los herores ${ heroe1.nombre }, ${ heroe2.nombre } y ${ heroe3.nombre }`);
//             }

//         } );
//     } );
// }); 


// Ejemeplo de promise hell (un mal uso de las promesas)
// buscarHeroe( heroeId1 ).then( heroe1 => {

//         // console.log( `Enviando a ${ heroe1.nombre } a la mision` );

//         buscarHeroe( heroeId2 ).then( heroe2 => {

//             console.log( `Enviando a ${ heroe1.nombre } y ${ heroe2.nombre } a la mision` );
//         });
//     });


// Solucion al promise hell (usando el array sin más)
// Promise.all( [ buscarHeroe( heroeId1 ), buscarHeroe( heroeId2 ) ] ).then( heroes => {

//     console.log ( heroes ); // comprobamos que esto es un array de heroes
//     console.info( `Embarcando a los herores ${ heroes[0].nombre } y ${ heroes[1].nombre }`);
// });


// Solucion al promise hell (desesctructurando el array)
Promise.all( [ buscarHeroe( heroeId1 ), buscarHeroe( heroeId2 ) ] ).then( ( [ heroe1, heroe2 ] ) => {
    console.log ( heroe1, heroe2 ); // comprobamos que la desestructuracion del array se ha hecho correctamente imprimiendo las dos variables
    console.info( `Embarcando a los herores ${ heroe1.nombre } y ${ heroe2.nombre }`);
}).catch( err => {
    console.error( err );
}).finally( () => {
    console.log( "Se temrminó el Promise.all" );
}); 

console.log( 'Fin del programa' );
