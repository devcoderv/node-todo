

const fs = require('fs');


let listadoPorHacer = [];

const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);
    fs.writeFileSync('db/data.json', data, (error) =>{
        if(error) throw new Error('No se puedo guardar')
    })
}

const cargarDB = () => {
    try {
        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        
        listadoPorHacer = [];
    }
}

const crear = ( descripcion ) => {
    cargarDB();

    let todo = {
        descripcion,
        completado: false
    }

    listadoPorHacer.push( todo );
    guardarDB();
    return todo;
}

const getListado = () => {

    cargarDB();
    return listadoPorHacer;

}

const actualizar = (descripcion, completado = true) => {
    cargarDB();
    let index = listadoPorHacer.findIndex( tarea => tarea.descripcion === descripcion );
    if(index >= 0){
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }
}

const borrar = (descripcion) => {
    cargarDB();
    let nuevoListado = listadoPorHacer.filter( tarea => tarea.descripcion !== descripcion );
    if(listadoPorHacer === nuevoListado){
        return false;
    } else {
        listadoPorHacer = nuevoListado
        guardarDB();
        return true;
    }
}

module.exports = {
    crear,
    getListado, 
    actualizar,
    borrar
}