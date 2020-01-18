const argv = require('./config/yargs').argv
const todo = require('./todo/todo')
const colors = require('colors')



let comando = argv._[0];
switch (comando) {
    case 'crear':
        let tarea = todo.crear(argv.descripcion)
        console.log(tarea);
    break;

    case 'lista':
        let listado = todo.getListado()
        console.log(listado);
        
        for( let tarea of listado ) {
            console.log('============ToDO========='.green);
            console.log('Descripcion:', tarea.descripcion);
            console.log('Estado:', tarea.completado);
            console.log('========================='.green);
        }
    break;

    case 'actualizar':
        let actualizado = todo.actualizar(argv.descripcion, argv.completado)
        console.log(actualizado);
    break;
    
    case 'borrar':
        let borrado = todo.borrar(argv.descripcion);
        console.log(borrado);
    break;

    default:
        console.log('Comando no reconocido');
    break;
}

