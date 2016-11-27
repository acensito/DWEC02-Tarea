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
 * Funciones correspondientes ejercicio 5.
 */

/**
 * Función rombo() que calcula el área de un rombo tras introducir sus dos diagonales.
 */
function rombo(){
    // Se muestra un mensaje indicando a que se va a proceder y los datos que se van a requerir
    alert("Se va a proceder a calcular el área de un rombo, introduzca los valores que se le solicitan," 
          + " serán necesarios los datos referentes a las dos diagonales del rombo ");
    
    // Se solicitan los diversos valores necesarios, las diagonales del rombo. Se parsea lo introducido a float y se vuelcan en variables
    var diagonal1 = parseFloat(prompt("Introduzca el valor de una diagonal:"));
    var diagonal2 = parseFloat(prompt("Introduzca el valor de la otra diagonal:"));
    
    // Se controla que no se haya introducido otra cosa que no haya sido un número, si no, se indica con un mensaje y no se calcula
    // También se controla que no metan numeros menores o igual a cero
    if (isNaN(diagonal1) || isNaN(diagonal2) || (diagonal1 <= 0) || (diagonal2 <= 0)) {
        //Mostramos mensaje feedback
        document.write("Ha introducido incorrectamente uno de los valores, refresque la página y vuelva a introducirlos.");
    } else {
        //Calculamos el área mediante su fórmula
        var resultado = ((diagonal1 + diagonal2) / 2);
        //Escribimos el resultado
        document.write(resultado + " cm<sup>2</sup>");
    }   
}

/**
 * Función trapecio() que calcula el área de un trapecio tras introducir sus dos bases y la altura.
 */
function trapecio(){
    // Se muestra un mensaje indicando a que se va a proceder y los datos que se van a requerir
    alert("Se va a proceder a calcular el área de un trapecio, introduzca los valores que se le solicitan," 
          + " serán necesarios los datos referentes a las dos bases y la altura del trapecio.");
    
    // Se solicitan los diversos valores necesarios, base mayor y menor del trapecio asi como su altura. Se parsea lo introducido a float y se vuelcan en variables
    var base1 = parseFloat(prompt("Introduzca el valor de una base:"));
    var base2 = parseFloat(prompt("Introduzca el valor de la otra base:"));
    var altura = parseFloat(prompt("Introduzca el valor de la altura:"));
    
    // Se controla que no se haya introducido otra cosa que no haya sido un número, En caso positivo, se indica con un mensaje
    if (isNaN(base1) || isNaN(base2) || isNaN(altura) || (base1 <= 0) || (base2 <= 0) || (altura <=0)) {
        // Mostramos mensaje de feedback
        document.write("Ha introducido incorrectamente uno de los valores, refresque la página y vuelva a introducirlos.");
    } else {
        // Calculamos el área mediante su fórmula
        var resultado = ((base1+base2)*altura)/2;
        // Escribimos el resultado
        document.write(resultado + " cm<sup>2</sup>"); 
    }; 
}

/**
 * Función paralelogramo() que calcula el area de un paralelogramo tras introducir su base y la altura
 */
function paralelogramo(){
    // Se muestra un mensaje indicando a que se va a proceder y los datos que se van a requerir
    alert("Se va a proceder a calcular el área de un paralelogramo, introduzca los valores que se le solicitan," 
          + " serán necesarios los datos referentes a la base y la altura del paralelogramo.");
    
    var base1 = parseFloat(prompt("Introduzca el valor de la base:"));
    var altura = parseFloat(prompt("Introduzca el valor de la altura:"));
    
    // Se controla que no se haya introducido otra cosa que no haya sido un número, si no, se indica con un mensaje y no se calcula
    if (isNaN(base1) || isNaN(altura) || (base1 <= 0) || (altura <= 0)) {
        //Mostramos mensaje feedback
        document.write("Ha introducido incorrectamente uno de los valores, refresque la página y vuelva a introducirlos.");
    } else {
        // Calculamos el área mediante su fórmula
        var resultado = (base1*altura);
        // Escribimos el resultado
        document.write(resultado + " cm<sup>2</sup>"); 
    } 
    

}