/* 
 * CODIGO CREADO BAJO LICENCIA CREATIVE COMMONS
 * Reconocimiento - NoComercial - CompartirIgual (by-nc-sa): 
 * No se permite un uso comercial de la obra original ni de las posibles obras
 * derivadas, la distribución de las cuales se debe hacer con una licencia igual
 * a la que regula la obra original.
 */

/**
 * Función diaDelAnyo que devuelve el dia del año de una fecha que solicite.
 * 
 * @returns {Number|String}
 */
function diaDelAnyo() {
    //Pedimos por prompt los datos del cumpleaños
    var dia = prompt("Indique el dia de nacimiento:");
    var mes = prompt("Indique el mes de nacimiento (en número):");
    var anio = prompt("Indique el año de nacimiento:");

    var cumple = new Date(mes + "/" + dia + "/" + anio); //Conformamos la fecha del cumpleaños con date
    
    var anioCumple = cumple.getFullYear();
    var finAnio = new Date("12/31/" + anioCumple);

    var adia; //Variable del dia del año.
    if (parseInt(dia) === cumple.getDate() && (mes-1) === cumple.getMonth()) {
        adia = Math.floor(( cumple.getTime() - finAnio.getTime()) / 86400000 + 365);
    } else {
        adia = "errorFch"; //Asignamos un flag de error de la fecha, para control
    }

    /**
     * Corregimos si es bisiesto el rango de fechas, dado que si el año es bisiesto, 
     * ya que empieza a contar con el dia 0 (1 de enero) para asi incluir el dia 59 
     * (29 de febrero). Por lo que podria generar errores de cara al horóscopo.
     * 
     * Como esto hay que tenerlo en cuenta, lo que hacemos es sumar 1 al rango del
     * 1 de enero al 29 de febrero en bisiesto. De esta manera, el programa 
     * asignara dia 60 al 29 de febrero compartiendolo con el dia 1 de marzo
     * cuando sea bisiesto al igual que si fuera no bisiesto.
     * 
     * Posteriormente, filtramos si se pretende dar el dia 
     */ 
    if (((anio % 4 === 0 && anio % 100 !== 0) || (anio % 400 === 0)) && (adia <= 59)) { //Si es bisiesto y tenemos un dia entre el 1 de enero y el 29 de febrero...
        adia = adia + 1; //Le sumamos un dia (para que enero no comience en 0)
    } else if (dia === 29 && mes === 2) { //Si se introduce un dia 29 de febrero no bisiesto...
        adia = "errorBi"; //Asignamos flag de error por haber introducido fecha incorrecta.
    } else if ((dia === 29 && mes === 2) && ((anio % 4 === 0 && anio % 100 !== 0) || (anio % 400 === 0))) { //Si la fecha introducida es el 29 de febrero en bisiesto...
         adia = 0; //Le asignamos el valor cero como valor único para el 29 de febrero
    } //Para el resto de casos se queda el valor del día tal como está
    
    return adia; //Retornamos el valor calculado
}

/**
 * Función horoscopo que devuelve un enlace con el horoscopo celta del dia del año introducido
 * 
 * @param {type} adia
 * @returns {String}
 */
function horoscopo (adia) {
    var msg;
    if (((adia >= 2) && (adia <=11)) || ((adia >= 186) && (adia <= 195))) { //RANGO DE FECHAS DEL ABETO
        msg = "http://horoscopo.horoscopomania.com/signos-celtas/abeto";
    } else if (((adia >= 12) && (adia <=24)) || ((adia >= 196) && (adia <= 206))) { //RANGO DE FECHAS DEL OLMO
        msg = "http://horoscopo.horoscopomania.com/signos-celtas/olmo";
    } else if (((adia >= 25) && (adia <=34)) || ((adia >= 207) && (adia <= 216))) { //RANGO DE FECHAS DEL CIPRES
        msg = "http://horoscopo.horoscopomania.com/signos-celtas/cipres";
    } else if (((adia >= 35) && (adia <=39)) || ((adia >= 121) && (adia <=134)) || ((adia >= 217) && (adia <= 225))) { //RANGO DE FECHAS DEL ALAMO
        msg = "http://horoscopo.horoscopomania.com/signos-celtas/alamo";
    } else if (((adia >= 40) && (adia <=49)) || ((adia >= 226) && (adia <= 235))) { //RANGO DE FECHAS DEL CEDRO 
        msg = "http://horoscopo.horoscopomania.com/signos-celtas/cedro";
    } else if (((adia >= 50) && (adia <=59)) || (adia === 0) || ((adia >= 236) && (adia <= 245))) { //RANGO DE FECHAS DEL PINO (incluimos aqui el 29 de febrero)
        msg = "http://horoscopo.horoscopomania.com/signos-celtas/pino";
    } else if (((adia >= 60) && (adia <=69)) || ((adia >= 246) && (adia <= 255))) { //RANGO DE FECHAS DEL SAUCE LLORÓN
        msg = "http://horoscopo.horoscopomania.com/signos-celtas/sauce-lloron";
    } else if (((adia >= 70) && (adia <=79)) || ((adia >= 256) && (adia <= 265))) { //RANGO DE FECHAS DE LA LIMA 
        msg = "http://horoscopo.horoscopomania.com/signos-celtas/lima";
    } else if (adia === 80) { //RANGO DE FECHAS DEL ROBLE 
        msg = "http://horoscopo.horoscopomania.com/signos-celtas/roble";
    } else if (((adia >= 81) && (adia <=90)) || ((adia >= 267) && (adia <= 276))) { //RANGO DE FECHAS DEL AVELLANO 
        msg = "http://horoscopo.horoscopomania.com/signos-celtas/avellano";
    } else if (((adia >= 91) && (adia <=100)) || ((adia >= 277) && (adia <= 286))) { //RANGO DE FECHAS DEL SERBAL 
        msg = "http://horoscopo.horoscopomania.com/signos-celtas/serbal";
    } else if (((adia >= 101) && (adia <=110)) || ((adia >= 287) && (adia <= 296))) { //RANGO DE FECHAS DEL ARCE
        msg = "http://horoscopo.horoscopomania.com/signos-celtas/arce";
    } else if (((adia >= 111) && (adia <=120)) || ((adia >= 297) && (adia <= 315))) { //RANGO DE FECHAS DEL NOGAL
        msg = "http://horoscopo.horoscopomania.com/signos-celtas/nogal";
    } else if (((adia >= 135) && (adia <=144)) || ((adia >= 316) && (adia <= 325))) { //RANGO DE FECHAS DEL CASTAÑO
        msg = "http://horoscopo.horoscopomania.com/signos-celtas/castano";
    } else if (((adia >= 145) && (adia <=254)) || ((adia >= 326) && (adia <= 335))) { //RANGO DE FECHAS DEL FRESNO
        msg = "http://horoscopo.horoscopomania.com/signos-celtas/fresno";
    } else if (((adia >= 225) && (adia <=264)) || ((adia >= 336) && (adia <= 345))) { //RANGO DE FECHAS DEL CARPE
        msg = "http://horoscopo.horoscopomania.com/signos-celtas/carpe";
    } else if (adia === 226) { //RANGO DE FECHAS DEL OLIVO
        msg = "http://horoscopo.horoscopomania.com/signos-celtas/olivo";
    } else if (((adia >= 265) && (adia <=274)) || ((adia >= 346) && (adia <= 355))) { //RANGO DE FECHAS DE LA HIGUERA
        msg = "http://horoscopo.horoscopomania.com/signos-celtas/higuera";
    } else if (adia === 275) { //RANGO DE FECHAS DEL ABEDUL
        msg = "http://horoscopo.horoscopomania.com/signos-celtas/abedul";
    } else if (adia === 356) { //RANGO DE FECHAS DE LA HAYA
        msg = "http://horoscopo.horoscopomania.com/signos-celtas/haya";
    } else if (((adia >= 357) && (adia <=365)) || (adia === 1) || ((adia >= 176) && (adia <= 185))) { //RANGO DE FECHAS DEL MANZANO
        msg = "http://horoscopo.horoscopomania.com/signos-celtas/manzano";
    } else {
        msg = "http://img.desmotivaciones.es/201012/Labrujalola.jpg"; //Caso de otros errores extraños...
    }
    return msg;
}



