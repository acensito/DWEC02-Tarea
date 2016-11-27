/* 
 * CODIGO CREADO BAJO LICENCIA CREATIVE COMMONS
 * 
 * Reconocimiento - NoComercial - CompartirIgual (by-nc-sa): 
 * 
 * No se permite un uso comercial de la obra original ni de las posibles obras
 * derivadas, la distribución de las cuales se debe hacer con una licencia igual
 * a la que regula la obra original.
 */


function obtenerFecha(){
    // Pedimos y volcamos en variables los datos del cumpleaños por separado
    // Parseamos a entero para poder trabajar con estos datos
    var dia = parseInt(prompt("Indique el dia de nacimiento:"));
    var mes = parseInt(prompt("Indique el mes de nacimiento (en número):"));
    var anio = parseInt(prompt("Indique el año de nacimiento:"));
    
    // Trasnformarmos los datos a forma de fecha dd/mm/yyyy
    // En realidad no era necesario este paso, pero realizarlo nos permite usarlo posteriormente como filtro de errores
    var cumple = new Date(mes + "/" + dia + "/" + anio);
    
    // Filtramos si existe error en la introducción de datos de la fecha. Ahorrariamos lineas usando un try-catch, pero
    // de momento no esta permitido en estas alturas del ejercicio. Si alguno de los datos da false, es incorrecto y no pasara
    // la sentencia condicional.
    if ((dia) === cumple.getDate() && (mes - 1) === cumple.getMonth() && (anio) === cumple.getFullYear()) {
        
        // Calculamos el signo zodiacal chino. El cálculo es en base al numero de ciclos de 12 años que existen (tantos como 
        // signos zodiacales existen). Se le suma 1 para que la cuenta sea de 1 a 12.
        var signoOpc = parseInt(((anio - 4) % 12) + 1);
        
        // Calculamos el elemento zodiacal chino. Son un elemento por pareja de año, por lo que se calcula el elemento dependiendo
        // al año.
        var elementoOpc = parseInt(anio % 10);
        
        
        // Hacemos la corrección si perteneciera al tramo anual anterior. Para ello comprobamos si la fecha es correspondiente
        // al mes de enero.
        if (mes === 1) {
            // Si el signo resultante es de la posición 1
            if (signoOpc === 1) {
                // Pasaria a ser el 12 (número anterior del ciclo).
                signoOpc = 12;
            } else {
                // En caso contrario, le restamos uno para corregirlo y pertenezca al tramo anual anterior.
                signoOpc = signo - 1;
            } 
            
            //Si el elemento resultante es de la posición 0
            if (elementoOpc === 0) {
                // Pasaría a ser el 9 (número anterior del ciclo)
                elementoOpc = 9;
            } else {
                // En caso contrario, le restamos uno para corregirlo y pertenezca al tramo anual anterior.
                elementoOpc = elementoOpc - 1;
            }
        }
        
        // Definimos una serie de variables que utilizaremos para volcar los resultados y luego podeer escribirlos
        var resultadoSigno, enlaceSigno, resultadoElemento, enlaceElemento;
        
        // En base al resultado del calculo del signo, volcamos en su variable el signo y el enlace del iframe
        switch (signoOpc){
            case 1:
                resultadoSigno = "RATA";
                enlaceSigno = "https://www.euroresidentes.com/horoscopo-chino/horoscopo-chino-rata.htm";
                break;
            case 2:
                resultadoSigno = "BUEY";
                enlaceSigno = "https://www.euroresidentes.com/horoscopo-chino/horoscopo-chino-buey-bufalo.htm";
                break;
            case 3:
                resultadoSigno = "TIGRE";
                enlaceSigno = "https://www.euroresidentes.com/horoscopo-chino/horoscopo-chino-tigre.html";
                break;
            case 4:
                resultadoSigno = "CONEJO";
                enlaceSigno = "https://www.euroresidentes.com/horoscopo-chino/horoscopo-chino-liebre-gato-conejo.htm";
                break;
            case 5:
                resultadoSigno = "DRAGON";
                enlaceSigno = "https://www.euroresidentes.com/horoscopo-chino/horoscopo-chino-dragon.htm";
                break;
            case 6:
                resultadoSigno = "SERPIENTE";
                enlaceSigno = "https://www.euroresidentes.com/horoscopo-chino/horoscopo-chino-serpiente.htm";
                break;
            case 7:
                resultadoSigno = "CABALLO";
                enlaceSigno = "https://www.euroresidentes.com/horoscopo-chino/horoscopo-chino-caballo.htm";
                break;
            case 8:
                resultadoSigno = "CABRA";
                enlaceSigno = "https://www.euroresidentes.com/horoscopo-chino/horoscopo-chino-cabra-oveja.htm";
                break;
            case 9:
                resultadoSigno = "MONO";
                enlaceSigno = "https://www.euroresidentes.com/horoscopo-chino/horoscopo-chino-mono.htm";
                break;
            case 10:
                resultadoSigno = "GALLO";
                enlaceSigno = "https://www.euroresidentes.com/horoscopo-chino/horoscopo-chino-gallo.htm";
                break;
            case 11:
                resultadoSigno = "PERRO";
                enlaceSigno = "https://www.euroresidentes.com/horoscopo-chino/horoscopo-chino-perro.htm";
                break;
            case 12:
                resultadoSigno = "CERDO";
                enlaceSigno = "https://www.euroresidentes.com/horoscopo-chino/horoscopo-chino-cerdo-jabali.htm";
                break;
                
            //En el caso de existir algún error no comprobado
            default:
                resultadoSigno = "¡CARLOS JESÚS, AYUDA! NO DAMOS CON LA TECLA";
                enlaceSigno = "http://www.lamentiraestaahifuera.com/wp-content/uploads/2012/02/200pxCarloJesu_thumb.jpg";
                break;
        }
        
        // En base al resultado obtenido del calculo del elemento, elegimos y volcamos el resultado en la variable
        switch (elementoOpc){
            case 0:
            case 1:
                resultadoElemento = "METAL";
                break;
            case 2:
            case 3:
                resultadoElemento = "AGUA";
                break;
            case 4:
            case 5:
                resultadoElemento = "MADERA";
                break;
            case 6:
            case 7:
                resultadoElemento = "FUEGO";
                break;
            case 8:
            case 9:
                resultadoElemento = "TIERRA";
                break;
            // EN el caso de existir algún error no comprobado
            default:
                resultadoElemento = "POR RATICULIN";
                break;
        }
        
        // Con los datos obtenidos volcados a variables, exponemos los resultados escribiendo en el documento
        document.write("<p>Tu signo es: " + resultadoSigno + "</p>");
        document.write("<p>Tu elemento es: " + resultadoElemento + "</p>");
        document.write("<iframe id=\"freim\" src=\"" + enlaceSigno + "\"><p>Este navegador no soporta iFrames</p></iframe>");
    } else {
        // En el caso de existir errores a la hora de la introducción de la fecha, lanzamos mensaje de feedback
        document.write("<p>Ha saltado un error, Fiú Fiú!!</p>");
        document.write("<img src=\"http://www.lamentiraestaahifuera.com/wp-content/uploads/2012/02/200pxCarloJesu_thumb.jpg\" \>");
        document.write("<p>Vuelva a recargar la página e introduzca de nuevo la fecha de nacimiento</p>");
    }
}

