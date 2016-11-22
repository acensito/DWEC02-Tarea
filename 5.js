/* 
 * CODIGO CREADO BAJO LICENCIA CREATIVE COMMONS
 * 
 * Reconocimiento - NoComercial - CompartirIgual (by-nc-sa):
 * 
 * No se permite un uso comercial de la obra original ni de las posibles obras
 * derivadas, la distribución de las cuales se debe hacer con una licencia igual
 * a la que regula la obra original.
 */

function rombo() {
    var diagonal1 = 0; 
    var diagonal2 = 0; 
    
    function pedirDatos(){
        diagonal1 = prompt("Introduzca el valor de la diagonal mayor:");
        diagonal2 = prompt("Introduzca el valor de la diagonal menor:");
    }
    
    pedirDatos();
    
    if (isNaN(diagonal1 || diagonal2) || (diagonal1 || diagonal2) == 0) {
        document.write("Ha introducido incorrectamente los valores, vuelva a introducirlos.");
        pedirDatos();
    } else {
        var resultado = (diagonal1 + diagonal2) / 2;
        document.write(resultado);
    };   
}