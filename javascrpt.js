function validar(form){


let nombre=form.nombre.value.trim()

if (nombre==""){
    alert("Por favor, introduzca un nombre");
    return false
}

let edad =form.edad.value.trim()

if (edad===""|| isNaN(edad) || edad<0){

    alert("Por favor, introduzca su edad u edad valida")

    return false

}

let sexo=form.sexo.value
if(sexo==""){
    alert("Por favor, selecciona un sexo")
    return falses;
}

let deporte=form.deporte.value
if(deporte==="ninguno"){
    alert("Por favor, seleccione un deporte")
}

//Si todo es valido

return true;




}