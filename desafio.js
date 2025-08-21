// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let nombresAmigos = [];

///funcion para agregar amigo///
function agregarAmigo(){
    let ingreso = document.getElementById("amigo");
    let nombre = ingreso.value;

    if (nombre == "") {
        alert("CAMPO DE TEXTO VACIO, INGRESE UN NOMBRE VALIDO");
        return;
    }

    nombresAmigos.push(nombre)

    let lista_visible = document.getElementById("listaAmigos")
    lista_visible.innerHTML = "";
    let i = 0;
    while (i < nombresAmigos.length){
        lista_visible.innerHTML += "<li>" + nombresAmigos[i] + "</li>";
        i++;
    }
    ingreso.value = ""
}

function sortearAmigo(){
    if (nombresAmigos.length == 0){
        alert("NO HAY NOMBRES PARA SORTEAR")
        return;}
    
    let random = Math.floor(Math.random()*nombresAmigos.length);

    let sorteado = nombresAmigos[random]

    let resultado = document.getElementById("resultado")
    resultado.innerHTML = "<li> EL AMIGO SORTEADO ES: " + sorteado + "</li>";
}

function reiniciar(){
    nombresAmigos = [];
    document.getElementById("resultado").innerHTML = "";
    document.getElementById("listaAmigos").innerHTML = "";
    document.getElementById("amigo").value = "";
}