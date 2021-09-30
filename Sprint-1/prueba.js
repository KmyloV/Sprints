
const formulario = document.getElementById(`form_nuevo_usuario`);

const inputs = document.querySelectorAll(`#form_nuevo_usuario input`);

const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^[a-zA-Z0-9]{6,32}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	edad: /^[1-13-90-0]{2,3}$/ // 7 a 14 numeros.
}
const validarFormulario =(e)=>{
    switch (e.target.name){
        case "dato_nombre_usuario":
            if (expresiones.nombre.test(e.target.value)){
                console.log("verdadero");
            } else{
                console.log("falso");
            }
            break;
        
        case "dato_edad_usuario":
            if (expresiones.edad.test(e.target.value)){
                console.log("verdadero");
            } else{
                console.log("falso");
            }
            break;

        case "dato_contrasena":
            if (expresiones.password.test(e.target.value)){
                console.log("verdadero");
            } else{
                console.log("falso");
            }
            break;
        
    }
}
*/
/*inputs.forEach((input)=>{
    input.addEventListener(`keyup`, validarFormulario);
    input.addEventListener(`blur`, validarFormulario);

})
*/
alert("danie");

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    
});



var Nombre = document.getElementById("dato_nombre_usuario").value;

function validar_nombre_usuario(string){
    
    switch (e.target.name){
        case "dato_nombre_usuario":
            if (expresiones.nombre.test(e.target.value)){
                console.log("verdadero");
            } else{
                console.log("falso");
            }
            break;
    }
}function validar_edad_usuario(edad){
    
}function validar_contraseña(string){
    
}
/*
module.exports.validar_nombre_usuario = validar_nombre_usuario;

module.exports.validar_contrasena = validar_contrasena;

module.exports.validar_edad_usuario = validar_edad_usuario;
*/
