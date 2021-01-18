import { promesaLenta, promesaMedia, promesaRapida } from './js/promesas.js'
import { buscarHeroe, buscarHeroeAsync } from './js/promesas.js'
import { obtenerHeroesArr, obtenerHeroeAwait, heroesCiclo, heroeIfAwait } from './js/await.js'

import './styles.css';


// Formato largo de la funcion flecha
// promesaLenta.then( ( arg ) => {
//     console.log( arg );
// });

// Uso básico de las 3 promesas usando el formato corto de la funcion flecha
// promesaLenta.then( console.log );
// promesaMedia.then( console.log );
// promesaRapida.then( console.log );

// Ejemplo del Promise.race. Solo se ejecutará la promesa más rapida que se hay incluido en el array de promesas.
// Promise.race( [ promesaLenta, promesaMedia, promesaRapida ] )
//     .then( mensaje => console.log( mensaje ) )   // Esto se podría haber puesto en formato corto .then( console.log );
//     .catch( err => console.error( err ) );


// Formato corto
// buscarHeroe( 'capi' ).then( console.log );
// Formato largo
// buscarHeroe( 'capi' ).then( heroe => console.log( heroe ) );


// Ejemplo de uso de Async y diferncia con la llamada a una funcion no-async que también devuelve promesa
// buscarHeroe( 'capi' )
//         .then( heroe => console.log( heroe ) )
//         .catch( console.error );

// buscarHeroeAsync( 'iron' )
//         .then( heroe => console.log( heroe ) )
//         .catch( console.error );




//console.time( 'await' );

// obtenerHeroesArr().then( heroes => {
//     console.table( heroes );
    
//     console.timeEnd( 'await' );
// });

// obtenerHeroeAwait( 'capi2' )
//     .then( heroe => {

//         console.log( heroe );
//         console.timeEnd( 'await' );

//     }).catch( console.warn );


heroesCiclo();

heroeIfAwait( 'iron' );