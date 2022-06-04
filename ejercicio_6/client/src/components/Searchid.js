import React from 'react';
 import { useState ,} from 'react';
 import {useDispatch ,useSelector} from 'react-redux';

 import { getIdPokemon} from '../actions';


export default function Searchid(){
    const pokemons= useSelector((state)=> state.pokemon);
      
      const dispatch=useDispatch();
      const [id,setId]= useState('');

      function handleInputChange(e){
          e.preventDefault();
          setId(e.target.value)
          console.log(id)
      };
      function handleSubmit(e) {
        e.preventDefault();
        console.log(pokemons);
        let aux1=pokemons.filter(e=>e.id === id);
          console.log(id);
          console.log(aux1);
        if(aux1.length === 0 ) {
            alert("Ingreso Id incorrecto o Pokemon no existe");
            
       }else{
        if ( id !== "" && aux1){
          console.log (id, "BUSCAR");
          dispatch(getIdPokemon(id));
          
          setId("");
             
        }
      }
         
    };

     

      return(
        <div> 
            
             
               <div>
        <input type = 'text' value ={id} placeholder = 'Buscar Id' onChange= {(e)=> handleInputChange(e)}/>
        <button  type = 'submit' onClick = {(e)=> handleSubmit(e)}>Buscar</button>
    </div>
             
        </div>
      )

}
