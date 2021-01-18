import { buscarHeroeAsync, buscarHeroe } from "./promesas";

const heroesIds = ['capi','iron','spider']
// const heroesPromesas = heroesIds.map( id => buscarHeroe(id) );  // Formato largo
const heroesPromesas = heroesIds.map( buscarHeroe ); // Formato corto de la instruccion anterior
// Ahora mismo, en heroesPromesas, tenemos un array de Promises sin resolver


// Para utilizar el await dentro de esta funcion también hay que declararla como async
export const obtenerHeroesArr = async () => {

    // Formato corto en una sola linea
    return await Promise.all( heroesIds.map( buscarHeroe ) );


    // Formato largo
    // const heroesArr = [];

    // for( const id of heroesIds ){
    //     heroesArr.push( buscarHeroe( id ) );
    // }

    // return await Promise.all( heroesArr );
}


// Formato muy corto
// export const obtenerHeroesArr = async () => await Promise.all( heroesIds.map( buscarHeroe ) );


// Manejo de errores en el await
export const obtenerHeroeAwait = async( id ) => {
    
    try {
        const heroe = await buscarHeroeAsync( id );
        return heroe;
    } catch ( err ){
        console.log( 'CATCH!!!' );
        // console.log( err ); // Descomentar esto para pintar el err en caso de que se quiera tratar dicho error en el .then() en el index.js
        // throw err; // Si no pusieramos el throw err, el error lo tendriamos que tratar en el .then() donde se llama a obtenerHeroeAwait en el fichero index.js
        // Con ese return en lugar de mostrar el error mostramos valores por defecto del heroe. OJO: al salir de la funcion con un return (no es un throw) esto se ejecutará en el .then()
        return {
            nombre: 'Sin nombre',
            poder: 'Sin poder'
        };
    }
}


// Uso de for await
export const heroesCiclo = async () => {

    console.time( 'HeroesCiclo' );

    // Version usando 'for await'.
    for await ( const heroe of heroesPromesas ) { // si no ponemos el await, el console.log( heroe ), imprime en cada ciclo una promesa sin resolver correspondiente a un heroe.
        console.log( heroe );
    }

    // Version sin uso de 'for await': Usando primero await Promise.all para resolver las promesas del array 'heroes' y seguidamente, con ciclo forEach, imprimir la info de cada heroe
    // const heroes = await Promise.all( heroesPromesas );
    // heroes.forEach( heroe => console.log( heroe ) );

    // Otra opcion pero INCORRECTA: esto está mal porque una vez que la funcion heroesCiclo lea el async( p ) saldrá del forEach() y seguirá su ejecución.
    // Por tanto, veremos que 1o se imprime el console.timeEnd() y luego la información de los diferentes heroes.
    // heroesPromesas.forEach( async ( p ) => console.log( await p ) );

    console.timeEnd( 'HeroesCiclo' );
}

// Uso de if await
export const heroeIfAwait = async( id ) => {

    if( ( await buscarHeroeAsync( id ) ).nombre === 'Ironman' ) {
        console.log( 'Es el mejor de todos' );
    } else {
        console.log( 'Naaaaah' );
    }

}
