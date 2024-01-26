let tareas = [];

function agregarTarea(){
    let nuevaTareaUsuario = document.getElementById("nuevaTarea").value;
    tareas.push(nuevaTareaUsuario);
    mostrarLista(tareas,"listaTareas");
    limpiarTexto();
};

function mostrarLista(tareas,posci){
    let pos = document.getElementById(posci);
    pos.innerHTML = "";
    for(let i = 0; i <= tareas.length-1; i++){
        pos.innerHTML += `
        <div class="card">
            <div class="card-body">
            <p class="card-text">${tareas[i]}</p>
            <button onclick="eliminarTarea(${i})" class="btn btn-danger" type="submit">Eliminar</button>
        </div>`;
    }
};

function eliminarTarea(arg){
    tareas = tareas.filter(tarea => tarea != tareas[arg]);
    mostrarLista(tareas,"listaTareas");
};

function limpiarTexto(){
    document.getElementById("nuevaTarea").value = "";
};