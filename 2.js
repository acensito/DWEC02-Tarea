/*
 * CODIGO CREADO BAJO LICENCIA CREATIVE COMMONS
 * Reconocimiento - NoComercial - CompartirIgual (by-nc-sa): 
 * No se permite un uso comercial de la obra original ni de las posibles obras 
 * derivadas, la distribución de las cuales se debe hacer con una licencia igual
 * a la que regula la obra original.
 */


function coincidencias() {
    var frase = prompt("Introduzca una palabra o una frase:");
    var repeticion = prompt("Introduzca cadena a buscar:");

    // Version 2 trampeando con array, posiblemente más eficiente, menor uso de memoria
    // var resultado = frase.split(repeticion).length-1;
    // document.write(resultado);

    contador = 0;
    pos = frase.indexOf(repeticion);

    while (pos > -1) {
        ++contador;
        pos = frase.indexOf(repeticion, ++pos);
    }

    document.write("Número de repeticiones de la cadena: " + contador);
}




