import Tarea from "../modelos/tarea.js";
let baseDatos = [];

export const crear = (id, nombre, descripcion, acciones)=>{
    const tarea = new Tarea(id, nombre, descripcion, acciones);
    baseDatos.push(tarea);
}
export const actualizar = (id, nombre, descripcion, acciones)=>{
     baseDatos = baseDatos.map(item=>{
        if(item.id.toLowerCase() === id.toLowerCase()){
            return new Tarea(id, nombre, descripcion, acciones);
        }else{
            return item;
        }
    });
}
export const buscar = (nombre)=>{
    return baseDatos.filter(item=> item.nombre.toLowerCase().startsWith(nombre.toLowerCase()));
}
export const todoLaData = ()=>{
    return baseDatos;
}
export const eliminar = (id)=>{
    baseDatos = baseDatos.filter(item=> item.id.toLowerCase() !== id.toLowerCase());
}
