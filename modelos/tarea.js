import {validacionString} from "../validaciones/validacionTareas.js";

export default class Tarea{
    #id;
    #nombre;
    #descripcion;
    #acciones;
    constructor(id, nombre, descripcion, acciones){
        //validaciones
        if(!validacionString(id)) throw new Error("id no valido, debe ser un string");
        if(!validacionString(nombre)) throw new Error("nombre no valido, debe ser un string");
        if(!validacionString(descripcion)) throw new Error("descripcion no valida, debe ser un string");
        if(!validacionString(acciones)) throw new Error("accion no valida, debe ser un string");
        //asignacion de datos
        this.#id = id;
        this.#nombre = nombre;
        this.#descripcion = descripcion;
        this.#acciones = acciones;
    }
    get id(){
        return this.#id;
    }
    get nombre(){
        return this.#nombre;
    }
    get descripcion(){
        return this.#descripcion;
    }
    get acciones(){
        return this.#acciones;
    }

    todosLosDatosJSON = ()=>{
        return {
            id: this.#id,
            nombre: this.#nombre,
            descripcion: this.#descripcion,
            acciones: this.#acciones
        }
    }
}

