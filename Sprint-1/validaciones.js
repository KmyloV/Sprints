const expresiones = {
	nombre: /^[a-zA-Z\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	edad: /^[1-13-90-0]{2,3}$/, // 13 a 110
    // edad: /^(13[7-9][0-9][0-9]|20[0-9][0-9]|2100)$/,
	contrasena: /^[a-zA-Z0-9]{6,32}$/,// 6 o mas.
};
function validar_nombre_usuario(){
    const name = document.getElementById('dato_nombre_usuario').value;
    // comparar el value del input con la expresion regular
    const result = expresiones.nombre.test(name);
    console.log(result);
    // si toda la validacion funciona responde

    // !!!!!!! !!!!
    // pendiente validacion de mayusculas iniciales despues del espacio
    // !!!!!!!!!!!!!!!
    const stringlength = name.split(' ');
    console.log(stringlength);
    let cumpleCondicion = false;
    stringlength.forEach((element) => {
        let letra = element.substring(0, 1);
        if (letra === letra.toUpperCase()) {
            cumpleCondicion = true;
        } else {
            cumpleCondicion = false; 
        }
    });

    if (result && cumpleCondicion) {
        console.log('todo en orden');
        return true;
    }
    return false;
}
function validar_edad_usuario(){
    let number = document.getElementById('dato_edad_usuario').value;
    // comparar el value del input con la expresion regular
    //const result = expresiones.edad.test(number);
    //console.log(result);
    // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    // resolver expresion regular de edad ya que incluye el 111
    // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    number = Number(number);
    if (typeof number === 'number' && number >= 13 && number <= 110 ){
        console.log(true);
        return true;
    } else {
        console.log(false);
    }
    return false;
    
}
function validar_contrasena(){
    const clave = document.getElementById('dato_contrasena').value;
    // comparar el value del input con la expresion regular
    const result = expresiones.contrasena.test(clave);
    console.log(result);
    if (result) {
        console.log('todo en orden');
        return true;
    }
    return false;
}

module.exports.validar_nombre_usuario = validar_nombre_usuario;

module.exports.validar_contrasena = validar_contrasena;

module.exports.validar_edad_usuario = validar_edad_usuario;

