/* 
 * CODIGO CREADO BAJO LICENCIA CREATIVE COMMONS
 * Reconocimiento - NoComercial - CompartirIgual (by-nc-sa): 
 * No se permite un uso comercial de la obra original ni de las posibles obras
 * derivadas, la distribución de las cuales se debe hacer con una licencia igual
 * a la que regula la obra original.
 */


function obtenerFecha(){
    // Pedimos y volcamos en variables los datos del cumpleaños
    var dia = parseInt(prompt("Indique el dia de nacimiento:"));
    var mes = parseInt(prompt("Indique el mes de nacimiento (en número):"));
    var anio = parseInt(prompt("Indique el año de nacimiento:"));
    
    var cumple = new Date(mes + "/" + dia + "/" + anio);
    
    if ((dia) === cumple.getDate() && (mes - 1) === cumple.getMonth() && (anio) === cumple.getFullYear()) {
        
        var signoOpc = parseInt(((anio - 4) % 12) + 1);
        
        var elementoOpc = parseInt(anio % 10);
        
        if (mes === 1) {
            if (signoOpc === 1) {
                signoOpc = 12;
                elementoOpc = 9;
            } else {
                signoOpc = signo - 1;
                elementoOpc = elementoOpc - 1;
            } 
        }
        
        var resultadoSigno, enlaceSigno, resultadoElemento, enlaceElemento;
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
            default:
                resultadoSigno = "¡CARLOS JESÚS, AYUDANOS! NO DAMOS CON LA TECLA";
                enlaceSigno = "http://1.bp.blogspot.com/-VauJMec7F3Y/VMsy5jwHbYI/AAAAAAAAqLU/iheDbApePC8/s1600/CARLOS.jpg";
                break;
        }
        
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
        }
        
        document.write("<p>Tu signo es: " + resultadoSigno + "</p>");
        document.write("<p>Tu elemento es: " + resultadoElemento + "</p>");
        document.write("<iframe id=\"freim\" src=\"" + enlaceSigno + "\"><p>Este navegador no soporta iFrames</p></iframe>");
          
    } else {
        document.write("<p>Ha saltado un error, Fiú Fiú!!</p>");
        document.write("<img src=\"http://www.lamentiraestaahifuera.com/wp-content/uploads/2012/02/200pxCarloJesu_thumb.jpg\" \>");
        document.write("<p>Vuelve a recargar la página e introduzca de nuevo la fecha de nacimiento</p>");
    }
    
    
}

