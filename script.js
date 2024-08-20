import {crear, actualizar, buscar, todoLaData, eliminar} from "./controlador/controladorTarea.js";
const form = document.getElementById("crud-form");
const tableItems = document.getElementsByClassName("crud-table-items")[0];
const search = document.getElementById("search");
const itemNombre = document.getElementById("item-name");
const itemDescripcion = document.getElementById("item-description");

//grud
const renderTareas = ()=>{
    tableItems.innerHTML = "";
   const fragment = new DocumentFragment();
    todoLaData().forEach(item=>{
        const tr = document.createElement("tr");
        const td1 = document.createElement("td");
        const td2 = document.createElement("td");
        const td3 = document.createElement("td");
        const buttonDelete = document.createElement("button");
        const buttonUpdate = document.createElement("button");
        buttonDelete.textContent = "del";
        buttonUpdate.textContent = "up";
        buttonDelete.dataset.id = item.id;
        buttonUpdate.dataset.id = item.id;
        buttonDelete.addEventListener("click", eliminarTarea);
        buttonUpdate.addEventListener("click", actualizarTarea);
        td1.textContent = item.nombre;
        td2.textContent = item.descripcion;
        td3.textContent = item.acciones;
        td3.append(buttonUpdate, buttonDelete);
        tr.append(td1, td2, td3);
        fragment.appendChild(tr);
    });
    tableItems.appendChild(fragment);
}

const crearTarea = (event)=>{
    event.preventDefault();
    const nombre = itemNombre.value.trim();
    const descripcion = itemDescripcion.value.trim();
    const id = Date.now().toString();
    crear(id, nombre, descripcion, "por defecto");
    renderTareas();
}

const actualizarTarea = (event)=>{
    const nombre = itemNombre.value.trim();
    const descripcion = itemDescripcion.value.trim();
    const id = event.target.dataset.id;
    actualizar(id, nombre, descripcion, "actualizado");
    renderTareas();
}
const buscarTarea = (event)=>{
    tableItems.innerHTML = "";
    const nombre = event.target.value.trim();
    const arrayTarea = buscar(nombre);
    const fragment = new DocumentFragment();
    arrayTarea.forEach(item=>{
        const tr = document.createElement("tr");
        const td1 = document.createElement("td");
        const td2 = document.createElement("td");
        const td3 = document.createElement("td");
        const buttonDelete = document.createElement("button");
        const buttonUpdate = document.createElement("button");
        buttonDelete.textContent = "del";
        buttonUpdate.textContent = "up";
        buttonDelete.dataset.id = item.id;
        buttonUpdate.dataset.id = item.id;
        buttonDelete.addEventListener("click", eliminarTarea);
        buttonUpdate.addEventListener("click",actualizarTarea);
        td1.textContent = item.nombre;
        td2.textContent = item.descripcion;
        td3.textContent = item.acciones;
        td3.append(buttonUpdate, buttonDelete);
        tr.append(td1, td2, td3);
        fragment.appendChild(tr);
    });
    tableItems.appendChild(fragment);
}
const eliminarTarea = (event)=>{
    const id = event.target.dataset.id;
    eliminar(id);
    renderTareas();
}
renderTareas();

//Eventos
form.addEventListener("submit",crearTarea);
search.addEventListener("input", buscarTarea)
