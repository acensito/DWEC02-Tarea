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
 * Método que devuelve un número aleatorio entre 12 y 24 usando para ello un número
 * aleatorio generado entre 0 y 5
 */
function aleatorio() {
    // Calculamos un número aleatorio entre 0 y 5
    var al1 = Math.random() * 5;
    
    // Si nos sale diferente que cero (nunca nos saldrá menor por el calculo anterior, generamos una 
    // cantidad de números aleatorios entre 12 y 24
    if (al1 != 0) {
        // Abrimos el ciclo de calculos. Tantos cálculos como haya dado el número aleatorio
        for (var i = 0; i < al1; i++) {
            // Generamos el número aleatorio en el intervalo de 12 a 24.
            var al2 = Math.trunc(Math.random()*(24-12) + 12);
            // Escribimos el número
            document.write(al2 + " ");
        }
        
    // Otra opción viable seria usar el ciclo for y el primer numero aleatorio como un "dado" y el número
    // resultante fuera el número de tiradas. Ello se consigue sacando el document.write fuera del ciclo,
    // por lo que recibirá el último valor del ciclo.
    } else {
        // Mensaje de feeedback
        document.write("¡Vaya punteria, ha salido un 0!, no se genera número aleatorio, refresque la página de nuevo");
    }
}