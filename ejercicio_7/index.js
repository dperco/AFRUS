
let ingreso=[];

function agregar (){

    let  nombre_tarea=document.getElementById('Nombre_Tarea').value;
    let  fecha_prioridad=document.getElementById('Fecha_prioridad').value;
    let  descripcion=document.getElementById('Descripcion').value;
    

    ingreso.push([nombre_tarea,fecha_prioridad,descripcion]);

    hacer_tabla();
}
function borrar(){
    document.getElementById('Nombre_Tarea').value="";
    document.getElementById('Fecha_prioridad').value="";
    document.getElementById('Descripcion').value="";
    
    //document.getElementByName("Nombre_Tarea").innerHtml ="";
    
}
function hacer_tabla(){

        let cabezal="<thead><tr><td>Tarea</td><td></td><td>Prioridad</td><td></td><td>Descripcion</td></tr></thead><body>";

        for(let i=0; i < ingreso.length;i++){
             cabezal+=`<tr><td>${ingreso[i][0]}</td><td></td><td>${ingreso[i][1]}</td><td></td><td>${ingreso[i][2]}</td></tr>`

        }

        cabezal +=`<tr><td>---</td> <td>---</td> <td>---</td></tr></body>`

        document.getElementById('tabla').innerHTML=cabezal;
}



//document.getElementById('tabla').innerHTML=cabezal;

