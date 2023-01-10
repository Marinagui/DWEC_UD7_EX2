let submit = document.getElementById("submit");
let nuevaTarea = document.getElementById("textarea");
let tareaAnadida = document.getElementById("tareaAnadida");
let lista = [];
let arrayGuardado = JSON.parse(localStorage.getItem("tareaAnadida"));

if(arrayGuardado) {
    lista = arrayGuardado;
    for (const item of arrayGuardado) {
        tareaAnadida.innerHTML += item + "<br>";
    }
}

submit.addEventListener('click', anadirTarea);

function anadirTarea() {
    tareaAnadida.innerHTML += nuevaTarea.value + "<br>";
    lista.push(nuevaTarea.value);
    localStorage.setItem("tareaAnadida", JSON.stringify(lista));
    nuevaTarea.value = "";
}