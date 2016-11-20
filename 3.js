/* 
 * CODIGO CREADO BAJO LICENCIA CREATIVE COMMONS
 * Reconocimiento - NoComercial - CompartirIgual (by-nc-sa): 
 * No se permite un uso comercial de la obra original ni de las posibles obras
 * derivadas, la distribución de las cuales se debe hacer con una licencia igual
 * a la que regula la obra original.
 */

function inversion() {
    //Mandamos un mensaje de bienvenida para recoger la frase a modificar
    var frase = prompt("Introduzca una palabra o una frase:");
    //Recorremos la frase letra a letra mediante un ciclo.
    for (var i = 0; i < frase.length; i++) {
        //Obtenemos la letra en ese momento
        var letra = frase.charAt(i);
        //Si la letra es la misma que en mayusculas
        if (letra === letra.toUpperCase()) {
            //Escribimos esa letra, pero en minusculas
            document.write(letra.toLowerCase());
        //Si la letra es la misma que en minusculas
        } else if (letra === letra.toLowerCase()) {
            //Escribimos esa letra, pero en mayusculas
            document.write(letra.toUpperCase());
        }
        //Para el resto de casos, se mantiene como está (por ejemplo, un número)
    }
}
