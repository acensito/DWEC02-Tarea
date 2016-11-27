/*
 * CODIGO CREADO BAJO LICENCIA CREATIVE COMMONS
 * 
 * Reconocimiento - NoComercial - CompartirIgual (by-nc-sa): 
 * 
 * No se permite un uso comercial de la obra original ni de las posibles obras 
 * derivadas, la distribución de las cuales se debe hacer con una licencia igual
 * a la que regula la obra original.
 */

/**
 * Metodo que busca el número de coincidencias en una cadena de texto dada
 */
function coincidencias() {
    //Solicitamos mediante prompt el texto con el que vamos a trabajar y el texto a buscar. Volcamos ambas en variables.
    var frase = prompt("Introduzca una palabra o una frase:");
    var repeticion = prompt("Introduzca cadena a buscar:");

    // Método alternativo. Curiosamente pese a ser más sencilla la linea, el coste de calculo CPU es mayor que el método 
    // principal de calculo. Trampeamos contando el numero de arrays en el que dividimos la frase menos uno y asi tenemos
    // el número de ocurrencias.

    // var resultado = frase.split(repeticion).length - 1;
    // document.write(resultado);

    // Forma principal. Usamos un contador iniciado a cero.
    contador = 0;
    // Buscamos la primera coincidencia y volcamos su posición
    pos = frase.indexOf(repeticion);

    // Si existe al menos una coincidencia, empezamos a contar
    while (pos > -1) {
        // Sumanos una coincidencia al contador
        ++contador;
        // Buscamos la siguiente coincidencia desde la posición en el que hemos encontrado una coincidencia
        pos = frase.indexOf(repeticion, ++pos);
    }

    // Devolvemos el número de repeticiones de la cadena
    document.write("Número de repeticiones de la cadena: " + contador);

}