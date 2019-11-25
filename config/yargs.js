const argv = require('yargs')
const descripcion = {
    demand: true,
    alias: 'd',
    desc: "Descripción de la tarea por hacer"
}
const completado = {
    default: true,
    alias: 'c',
    desc: 'Marca como completado o pendiente una tarea'
}

.command('crear', 'Crear tareas pendientes', {
        descripcion
    })
    .command('actualizar', 'Actualiza el estado completado de la tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'Borrar una tarea', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}

// let crear = (descripcion) => {

// }