#DWEC - Tarea 2

## Enunciado:

Realizar una aplicación en JavaScript que genere una página web con varios contenidos. Cada tarea tendrá una serie de botones que abrirán una nueva ventana (podéis usar `onClick="window.....";` o enlaces simples). Cada tarea se colgará en un archivo en este formato:

- **1.js** para el ejercicio **1** con un documento llamado **1.html**
- **2.js**  para el ejercicio  **2**  con un documento llamado  **2.html**
- El archivo del que todo cuelga tendrá vuestro nombre tal y como aparece en las indicaciones de entrega.

1. **Horóscopo Chino**. Se deberá preguntar por la fecha de nacimiento y deberemos indicarle su signo del zodiaco (dragón, cerdo, perro...) y su elemento (tierra, madera, fuego ....)y utilizando un  **iframe**  mostrar una página que explique el signo.  Podéis utilizar una página externa, no hace falta que escribáis la predicción vosotros. Podéis encontrar más información en recursos necesarios. **(2,5 puntos)**
2. **Repeticiones de caractéres.**  Crea un script te pida introducir un texto y un carácter alfanumérico y te diga el número de repeticiones del mismo en dicho texto (Utilizar objeto String). **(1,5 puntos)**
3. **Invertir mayúsculas**. Leer una cadena por teclado y después mostrar la salida.  **&quot;Hola&quot;**  se convertiría en  **&quot;hOLA&quot;** , y si la cadena fuera  **&quot;HOLA&quot;**  la cadena salida sería **&quot;hola&quot;. (2 puntos)**
4. **Números Aleatorios.**  Generar un número aleatorio entre 0 y 5. Con ese número genera otra serie de  **números aleatorios**  entre 12-24 sin decimales para lo cual se ha realizado un truncamiento. **(1,5 puntos)**
5. **Cálculo de áreas de cuadriláteros.**  Se calcularán rombo o romboide, trapecios y paralelogramos. Necesitáis un  **prompt**  para recibir los datos. Los parámetros que necesitáis los averiguáis de la página que aparece en el punto 4 (recursos necesarios). No tenéis que calcular perímetros.  Comprobar las operaciones que pueden dar problemas como la división por 0. **(2 puntos).**

Observaciones:

Se utilizarán los objetos predefinidos en JavaScript vistos en la unidad. Si necesitáis algún método o propiedad que no se encuentre en los apuntes deberéis comprobar que funciona en todos los navegadores principales (Chrome, Mozilla y otro de vuestra elección). Aquellos que no dispongáis de Internet Explorer por vuestro sistema operativo (Linux o Mac) podréis utilizar la versión 11 de Windows 7 u 8 que podéis encontrar legalmente en  [http://modern.ie](http://modern.ie/) y  no con versiones anteriores al menos en esta práctica.

Utilizar arrays para recorrer las cadenas o utilizar JQuery u otra librería sin autorización previa supondrá un 0 en esa pregunta.

## Criterios de corrección
Los puntos que tiene esta tarea están asignados de la siguiente forma:

- Las tareas con números 3 y 5   **2 puntos cada**.
- La tarea con número 1 vale  **2,5 puntos**.
- La tarea 2 y  4 valen  **1,5 puntos**.
- Claridad, comentarios y limpieza del código.  **0,5 puntos.**  Por ejemplo si se quiere hacer un  **if**  no utilizar un operador ternario `?:`  aunque se pueda utilizar para mostrar una salida. Ya discutiremos en el foro como podemos mejorar todos nuestro código e iremos creando una guía de estilo.  La  Calidad de los comentarios es importante.  Los comentarios deben ser significativos y útiles. No vale, por ejemplo, por ejemplo poner lo mismo que está en el `document.write()`.
- La ortografía puede quitar hasta un máximo de **1,5 puntos**. Por cada acento o vulgarismo - **0,05**. Por cada falta más grave **-0,1**. Si tienes varias veces la misma falta de ortografía se multiplicará por el número de ocurrencias. Esto se aplicará a los comentarios y a los resultados.
- No seguir la estructura de archivos baja  **0,5 puntos**.
- Si en el foro se ha aclarado una duda sobre una tarea y no la lees y la haces mal tienes un 0 en esa tarea.
- Si se hace otra cosa que la que se pide en esa tarea se tiene un 0 en esa tarea.
- Deberéis verificar que las entradas sean correctas. Por ejemplo no me vale aceptar un espacio como cadena.
- Utilizar  **arrays**   o utilizar  **JQuery**  u otra librería  **sin autorización**  previa supondrá un  **0**  en esa pregunta.

**Total: 10 puntos máximo.**

## Recursos necesarios:

 - Ordenador personal. 
 - Editor web para teclear el código de la aplicación.
 - Navegador web para probar el funcionamiento de la aplicación.

Para la información oficial del horóscopo chino:

 - [https://es.wikipedia.org/wiki/Astrolog%C3%ADa\_china](https://es.wikipedia.org/wiki/Astrolog%C3%ADa_china)

Para calcular el área de los cuadriláteros:

 - [http://recursostic.educacion.es/descartes/web/Descartes1/1y2\_eso/Los\_cuadrilateros/Cuadrilateros2.htm](http://recursostic.educacion.es/descartes/web/Descartes1/1y2_eso/Los_cuadrilateros/Cuadrilateros2.htm)
 - [http://www.icarito.cl/2010/08/102-8671-9-calculando-areas.shtml/](http://www.icarito.cl/2010/08/102-8671-9-calculando-areas.shtml/)
