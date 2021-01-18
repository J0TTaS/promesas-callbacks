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

export const buscarHeroe = ( id, callback ) => {

    const heroe = heroes[id];

    if ( heroe ) {
        // No error, por lo que el error lo pongo como un Null
        callback( null, heroe);
    } else {
        // Un error
        callback( `No existe un héroe con el id ${ id }` );
    }

    // callback( heroe );
};