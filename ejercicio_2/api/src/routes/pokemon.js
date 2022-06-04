const { Router } = require('express');
const {Pokemons,Types}=require('../db');
const {Op, BOOLEAN}=require('sequelize');
const router = Router();
const axios = require('axios');


function cap(s){

    return s&&s[0].toUpperCase() + s.slice(1);

};   

async function getDbData(){  //consulta a la base de datos local
    try{
       const pokeData=  await Pokemons.findAll({
           include : {
               model:Types,
               attributes:['name'],
               through:{attributes:[],}
           }
       });
       const formateData = pokeData.map(pk=>{
           return {
              id:pk.id,
              name:cap(pk.name),
              types:pk.type,
              image:pk.image,
              lifes:pk.lifes,
              attack:pk.attack,
              defense:pk.defense,
              speed:pk.speed,
              height:pk.height,
              weight:pk.weight
           }
       })
       
       return formateData;
     
    }catch(error){console.log(error)}
};

async function getApiData(){      //pedido a la Api externa
    const resp= await axios.get("https://pokeapi.co/api/v2/pokemon?limit=200")
            .then((data)=>{return data.data.results;})
            .then((results)=>{ return Promise.all(results.map((res)=>axios.get(res.url)))})
            .then((data)=>{return data.map((res)=>res.data)});
        //console.log('hola');
        //console.log(resp);
        let pokData= resp.map((result)=>{
            return{
                id:result.id,
                name:cap(result.name),
                types: result.types.map((t)=> cap(t.type.name)),
                image: result.sprites.front_default,
                lifes:result.stats[0].base_stat,
                attack:result.stats[1].base_stat,
                defense:result.stats[2].base_stat,
                speed:result.stats[3].base_stat,
                height:result.height,
                weight:result.weight,

            };
        });
        //console.log(pokData);
    return pokData;

}; 

async function loadPokeData(){
    let pokeApi=await getApiData();
    //console.log(pokeApi);
    let pokedb= await getDbData();
   //console.log(pokedb);
    //let allPokdata=[];
    if (pokeApi && pokedb){
        allPokdata=[...pokeApi,...pokedb];
    }else{
        allPokdata=[...pokeApi];
    }
    //console.log(allPokdata);
  return allPokdata
};
////////////////////////////////////////////////////////////////7************************************
router.get('/',async (req,res,next)=>{  // primera consulta  a la API trae 200 pokemon 
    const datapok=await loadPokeData();
    let tipe=req.query.tipe;
    let type1=req.query.type1;
    let type2=req.query.type2;
    let id=req.query.id;
    let id_bis=req.query.id_bis;
    let tipe_bis=req.query.tipe_bis;
    let {arrayPoke,orden}=req.query;
    const {name}= req.query;
    if(!tipe && !type1 && !type2 && !id && !name && !id_bis && !tipe_bis && !arrayPoke && !orden){
        res.send(datapok);
    };
    try{
        //console.log('hola');
        //const datapok=await loadPokeData();
        // console.log('hola');
        //console.log(datapok);
////////////////////--- #3-Dado el nombre de un pokémon retornar el número del mismo.///////////////////////////

        
        if(name){
        if(name){
            const pokem= datapok.filter(p=> p.name.toLowerCase() === name.toLowerCase());
            console.log(pokem)
            let id=pokem[0].id;
            console.log(id)
            if(pokem.length === 0){
                res.send({message: 'no existe el pokemon'});
                
            }else{
            return res.send({message: 'el id del pokemon es =',id});}
        }else{
            res.send({message: 'no existe el pokemon'});
        }
       }
    }catch(error){console.log(error), next(error)};

    //################################################################################################

    //funcion  #1 --   obtener total  por tipo 
    //console.log(tipe);
    //res.send(datapok);
    if(tipe){ 
       let totalType=0;
      // let greaterTen = [];
      for (let i = 0; i< datapok.length; i++) {
               var currentNumber1= datapok[i].types[0];
               var currentNumber2=datapok[i].types[1]
               //console.log(currentNumber,tipe);
               if (currentNumber1 === req.query.tipe || currentNumber2 === req.query.tipe) {
                //console.log('hola');
                 
                  totalType++;                
                }
         };
            
      
         console.log(totalType);
               if ( totalType != 0){
                 //res.json(tot);
                  res.send({message: 'el total de pokemon es =',totalType});
                 }
      }else{ 
//########################################################################################################

    //**********// #2-Dado 2 tipos de pokémon retornar todos los pokemones que cumplen con esos 2 tipos.//** */
     //---------------------------------------------------------------------------------------------------/
         if(type1 && type2){
             console.log(type1,type2);
                  let totalType= [];
                   // let greaterTen = [];
              for (let i = 0; i< datapok.length; i++) {
                        var currentNumber1= datapok[i].types[0];
                          var currentNumber2=datapok[i].types[1]
                          //console.log(currentNumber,tipe);
                        console.log('hola');
                      if (currentNumber1 === req.query.type1 || currentNumber1 === req.query.type2) 
                      {
                         if(currentNumber2 === req.query.type1 || currentNumber2 === req.query.type2){
                          //console.log('hola');
                            totalType.push(datapok[i].name)
                         }                 
                      }
                 };
                  //let tot=totalType.lengt
                  //  if ( tot != 0){
                     //res.json(tot);
                    res.send(totalType);
                   // }
             console.log(totalType)
        }}
      // res.send(datapok);
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////


////////--- # 4-Dado el número de un pokémon retornar un objeto con sus 6 stats base.

   if(id){

        const pokem= [];
        console.log(id);
        for(let i=0;i < datapok.length;i++){
            //console.log('hola');
            //console.log(datapok[i].id);
            if(datapok[i].id == id){
                pokem.push(datapok[i].lifes);
                pokem.push(datapok[i].attack);
                pokem.push(datapok[i].defense);
                pokem.push(datapok[i].speed);
                pokem.push(datapok[i].height);
                pokem.push(datapok[i].weight);
            
            
            }


        }

        console.log(pokem);

        let Stats={
                lifes:pokem[0],
                attack:pokem[1],
                defense:pokem[2],
                speed:pokem[3],
                height:pokem[4],
                weight:pokem[5]
        }

        res.send({message: 'los stats del pokemon son =',Stats});

      }

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////#-5-Realizar una función que reciba un arreglo de números (Ids de pokémon) y un ordenador 
//                   y retorne los pokémon  en un arreglo con su nombre, tipo y peso ordenados según se indique 
//                   por la función por uno de estos 3 indicadores.

//////////----------------------------

if(arrayPoke && orden){
        console.log(arrayPoke,orden);

        let arrayFilter=[];
        let Pokeweight=[];
        for (let i=0; i < arrayPoke.length;i++){  //  arreglo  con todas las propiedades de  los Pokemon cuyo
                                                  //id esta en el array de Id
                 console.log()
                for(let j=0 ; j < datapok.length;j++){
                        console.log(datapok[j].id);
                        if(datapok[j].id == arrayPoke[i]){

                            arrayFilter.push(datapok[j]);
                        }
                }
        };

        if (orden === 'ASC'){

                  Pokeweight= arrayFilter.sort(function(a,b){
                        if(a.weight > b.weight){
                            return -1;
                         }
                        if(b.weight > a.weight){
                               return 1;
                          }
                      return 0;
                    }) 

                   }else{
                        Pokeweight=  arrayFilter.sort(function(a,b){
                                    if(a.weight> b.weight){
                                       return 1;
                                      }
                                     if(b.weight > a.weight){
                                       return -1;
                                      }
                                      return 0;    
                                    });
        }

        console.log(Pokeweight);
        res.send(Pokeweight);

}



////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//------   6-Recibir un número y un tipo (de pokémon) y retornar un true o false si el pokémon 
//            de ese número posee este tipo. 
//----------------------

  if(id_bis && tipe_bis){
        let est=0;
        console.log(id_bis,tipe_bis);
        for(let i=0; i < datapok.length;i++){
            
               if(datapok[i].id == id_bis ){
                console.log('hola');
                console.log(id_bis,tipe_bis);
                console.log(datapok[i].types[0],datapok[i].types[1]);
                   if(datapok[i].types[0] === tipe_bis | datapok[i].types[1] == tipe_bis){
                       est=1;
                   
                       }     
                }
            }
        console.log(est);
        if(est === 1){
            res.send({message: 'True'});
        }else{
            res.send({message: 'False'});
        }
        
        }
  
});









module.exports = router;