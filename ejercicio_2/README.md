## Enunciado

La idea general es crear unas funciones ,sobre la Api de Pokemon , utilizando la api externa y a partir de ella poder, entre otras cosas:

  - - Suma total de pokemones por tipo, debe recibir el tipo en string.
     -Dado 2 tipos de pokémon retornar todos los pokemones que cumplen con esos 2 tipos.
     -Dado el nombre de un pokémon retornar el número del mismo.
     -Dado el número de un pokémon retornar un objeto con sus 6 stats base.
     -Realizar una función que reciba un arreglo de números (Ids de pokémon) y un ordenador y retorne los pokémon  en un arreglo con su nombre, tipo y peso ordenados según se indique por la función por uno de estos 3 indicadores.
     -Recibir un número y un tipo (de pokémon) y retornar un true o false si el pokémon de ese número posee este tipo.
*******************************************************************************************************************
# # # # # ###########################################################

Observaciones :  se toman los primeros 200  pokemon , para  muestreo  ya que son mas 2000 los pokemones de la Api .
###### ##############################################

*******************************************************************************************************************


Se iran  probando  cada funcion  mediante el uso de la herramienta Postman ,lo que nos permitira  documentar 
cada funcion .
Se adjunta un archivo formato PDF ,con las respuestas de todas las pruebas 
******************************************************************************************************+

Verificar librerias y programas  instalados  ,necesarios  para que la apliacion  funcione
Se debe tener instalado :

 Node.js y NPM 
Actualmente las versiónes necesarias son:

 * __Node__: 12.18.3 o mayor
 * __NPM__: 6.14.16 o mayor

 con este comando desde la consola  se ven las versiones 
 > node -v
> npm -v

                      PUESTA EN MARCHA  del servidor 
*******************************  


Para verificar ,lo mejor  es abrir desde el Editor de Codigo ,pararse  en l carpeta  api del  ejercicio_6  ,y desde ahi  ejecutar  :

 > npm i  express  sequellize  morgan  axios dotenv

luego en el archivo pakage.jon ,que se creo ,  cargar esto :

 "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },

luego guardar los cambios .

Ahora  ,desde  la consola de la carpeta api ejecutamos:  -- > npm start 
esto  levanta el servidor local de la aplicacion y cuando todo esta correcto nos deberia aparecer este mensaje 

...  [nodemon] watching extensions: js,mjs,json
     [nodemon] starting `node index.js`
     %s listening at 3001  ...
si queda esto  el servidor  levanto bien 
******************************************************


  Si esto  no tiene  errores , ya  se  puede buscar en la pagina la funcionalidad  ,por ejemplo para este caso colocando  un nombre  en el campo de busqueda nos dira si esta ese pokemon y nos muestra sus caracteristicas .



  Si aparece algun errores ,hay que revisar los mensajes de error ,y revisar cada caso .


  Funcionamiento  de la pruebas  

  1- se trabaja sobre el archivo ..." /api/src/routes/pokemon.js ".... ,ahi esta el codigo  de todas las funciones 
  2- se utiliza la herramient Postman para  probar cada funcion 
  3- para poder realizar las pruebas el servidor debe estar funcioanndo  ,hay que ejecutar el comando :
                        -->" npm star"
  4- se documenta cada prueba en el archivo adjunto 

  Funciones 

        1- Suma total de pokemones por tipo, debe recibir el tipo en string.

        2-Dado 2 tipos de pokémon retornar todos los pokemones que cumplen con esos 2 tipos.

        3-Dado el nombre de un pokémon retornar el número del mismo.

        4-Dado el número de un pokémon retornar un objeto con sus 6 stats base.

        5-Realizar una función que reciba un arreglo de números (Ids de pokémon) y un ordenador y retorne los pokémon  en un arreglo con su nombre, tipo y peso ordenados según se indique por la función por uno de estos 3 indicadores.

        6-Recibir un número y un tipo (de pokémon) y retornar un true o false si el pokémon de ese número posee este tipo.

     Para cada una  de estas  funciones se realiza una  peticion Get ,desde la herramienta Postman :

                          1- Get: http://localhost:3001/pokemons?tipe='string'
                          2- Get : http://localhost:3001/pokemons?type1='string'&type2='string'
                          3- Get : http://localhost:3001/pokemons?name='string'
                          4- Get : http://localhost:3001/pokemons?id=number
                          5- Get : http://localhost:3001/pokemons?arrayPoke=[number,number,...]&orden='ordenador'
                          6- Get : http://localhost:3001/pokemons?id_bis=number&tipe_bis='string'

     al  ejecutar  cada uno de estos Get , aparecera en la  ventana Response del Postman el resultado que se adjunta en cada  caso en el archivo PDF adjunto.