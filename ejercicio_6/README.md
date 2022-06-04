

-

## Enunciado   

La idea general es crear una aplicación en la cual se puedan ver los distintos Pokemon utilizando la api externa [ y a partir de ella poder, entre otras cosas:

  - Buscar pokemons  por nombre  y muestre en pantalla los siguientes datos:
             Nombre, número, tipo, peso, altura y una imágen.



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

                     FUNCIONAMIENTO  Y PUESTA EN MARCHA  
*******************************  
Ver el Backend :

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
esto  levanta el servidor local de la aplicacion y nos debera aparecer este mensaje 

...  [nodemon] watching extensions: js,mjs,json
     [nodemon] starting `node index.js`
     %s listening at 3001  ...
si queda esto  el servidor  levanto bien 
******************************************************
Para el frontend :

    nos paramos en la carpeta client ,abrimos consola :

    ejecutamos  --> npm i react axios redux react-redux  react-router  react-router-dom  thunk redux-thunk 

    luego en el archivo pakage.jon ,que se creo ,  cargar esto :

 "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },

luego guardar los cambios .

luego  ejecutar  --> npm start 

   esto  nos levantara la  parte viusal de la aplicion ,abriendo una pagina en el navegador  que tengamos ,nos muestra   la aplicacion y las funcionalidades creadas .
   si todo  esta correcto ,por un lado tendremo la pagina en el navegador y por el otro  en la consola debria quedar  un mensaje de la siguiente forma :

   ......  Compiled successfully!

            You can now view client in the browser.

            Local:            http://localhost:3000        
            On Your Network:  http://192.168.100.6:3000  

  ................

  Si esto  no tiene  errores , ya  se  puede buscar en la pagina la funcionalidad  ,por ejemplo para este caso colocando  un nombre  en el campo de busqueda nos dira si esta ese pokemon y nos muestra sus caracteristicas .



  Si aparece algun errores ,hay que revisar los mensajes de error ,y revisar cada caso .