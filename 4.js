/* 
 * CODIGO CREADO BAJO LICENCIA CREATIVE COMMONS
 * Reconocimiento - NoComercial - CompartirIgual (by-nc-sa): 
 * No se permite un uso comercial de la obra original ni de las posibles obras
 * derivadas, la distribución de las cuales se debe hacer con una licencia igual
 * a la que regula la obra original.
 */

/**
 * Función que calcula matemáticamente el valor del area de una elipse introduciéndose
 * los dos radios que conforman la misma. Alertara de que tipo de figura geométrica se
 * trata y posteriormente mostrará su resultado.
 * 
 * @returns {Number|area.radio2|area.radio1}
 */
function area() {
    //Pedimos los datos correspondientes por prompt
    var radio1 = prompt ("Introduzca el valor del primer radio");
    var radio2 = prompt ("Introduzca el valor del segundo radio");
    
    //En el caso de que alguno de los dos no sea un número....
    if (isNaN(radio1) || isNaN(radio2)){
        alert("ERROR: Uno de los valores no es un número, pruebe de nuevo"); //Mostramos un mensaje de advertencia
        location.reload(); //Recargamos la página para que vuelva a pedir los datos
    } else {
        if (radio1 === radio2) { //Si los dos radios son iguales
            alert("Con estos datos, el área a calcular es de un CÍRCULO"); //Se trata de un círculo
        } else { //En otro caso...
            alert("Con estos datos, el área a calcular es de una ELIPSE"); //Se trata de una elipse
        } 
    }
    
    var resultado = (Math.PI * radio1 * radio2).toFixed(2); //Hacemos el cálculo (Pi por los radios), y redondeamos a dos decimales.

    return resultado; //Devolvemos el resultado
}



