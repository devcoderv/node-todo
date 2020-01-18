const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción del todo'
}

const completado = {
    default: true,
    alias: 'c',
    desc: 'Marcar como completado ó pendiente la tarea'
}

const argv = require('yargs')
                .command( 'crear', 'Crear un elemento', {
                    descripcion
                })
                .command( 'actualizar', 'Actualizar un elemento', {
                    descripcion,
                    completado
                })
                .command( 'borrar', 'borrar un elemento', {
                    descripcion
                })
                .help()
                .argv;
                

module.exports = {
    argv
}


