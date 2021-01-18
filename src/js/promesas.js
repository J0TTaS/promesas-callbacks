// Nuestra pequeña BBDD de heroes
const heroes = {
    capi: {
        nombre: 'Capitán América',
        poder: 'Aguantar inyecciones sin morir'
    },
    iron: {
        nombre: 'Ironman',
        poder: 'Absurda cantidad de dinero'
    },
    spider: {
        nombre: 'Spiderman',
        poder: 'La mejor reacción a la picadura de araña'
    }
}

// Ejemplo de promesa sin Async. Es decir, con una función que explicitamente retorna una promesa
export const buscarHeroe = ( id ) => {

    const heroe = heroes[id];

    return new Promise( ( resolve, reject ) => {

        if( heroe ) {
            // Este setTimeout es para demostrar que poner el await dentro 
            // de un ciclo for no es buena idea porque las promesas se resuelven
            // secuencialmente por lo que, si tenemos tres heroes, las promesas 
            // sumarán un total de 3 segundos en resolverse
            setTimeout( () => resolve( heroe ), 1000 );
        } else {
            reject( `No existe un heroe con el id ${ id }` );
        }
    });
}

// Ejemplo de promesa con Async
export const buscarHeroeAsync = async ( id ) => {

    const heroe = heroes[id];

    if( heroe ) {
        return heroe;
    } else {
        throw Error ( `No existe un heroe con el id ${ id }` );
    }
}

// Ejemplo para Promise.race
const promesaLenta = new Promise( ( resolve, reject ) => {
    setTimeout( () => resolve( 'Promesa lenta' ), 2000)
});

const promesaMedia = new Promise( ( resolve, reject ) => {
    setTimeout( () => resolve( 'Promesa media' ), 1500)  
});

const promesaRapida = new Promise( ( resolve, reject ) => {
    setTimeout( () => resolve( 'Promesa rapida' ), 1000) 
    // setTimeout( () => reject( 'Promesa rapida' ), 1000) // Solo podriamos forzar el reject si lo incluimos en esta promesa puesto que es la primera en ejecutarse
});

// Otra manera de exportar funciones
export {
    promesaLenta,
    promesaMedia,
    promesaRapida
}