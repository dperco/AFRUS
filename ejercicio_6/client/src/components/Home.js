import React from 'react';
import  { useEffect,Fragment} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import { Link } from 'react-router-dom';
import {getPokemon,getTypes} from '../actions';

import Card from './Card'
import SearchBar from './Searchbar';
//import Searchid from './Searchid';

import './styles/Home.css';
export default function Home (){

  const dispatch = useDispatch ();
  const pokemons= useSelector((state)=> state.pokemon);
   

  
    useEffect (()=>{ 
        dispatch(getPokemon());  //traigo los pOKEMON
   },[dispatch]);

   useEffect(() => {             //traigo los types
    dispatch(getTypes());
    },[dispatch]); 

  

   function handleClick(e){   //resetea POKEMON
    e.preventDefault();
    dispatch(getPokemon())
     };


     
   return(
       <div className='body'>
            
           <h1 className='h1'>  Bienvenidos al Home de Pokemon </h1>
           <button onClick={e=>{handleClick(e)}}  className='recarga'> Recargar Pokemon</button>
           <div className='search'>
            <SearchBar/> 
           </div>
      
           {/* <div className='search'>
            <Searchid/> 
           </div>
            */}
  
           <div  className='inicio' ><Link to='/'><button >Volver inicio</button></Link></div>
           <div></div>
           <br></br>
           <br></br>
           <div className='Card'> 
                {console.log(pokemons)}
                {   
                pokemons?.map((c) => {
                
                  return (
                <Fragment   >   
                     <Link  to={"/home/" + c.id}> 
                        <Card  name={c.name} 
                               image={c.image}
                               types={c.types}
                               weight={c.weight}
                               height={c.height}
                               id={c.id}
                               
                                 
                           /> 
                           <Link to={`/home/${c.id}`} className='det'> Detalles</Link>
                     </Link>
                     
                                
                 </Fragment>
                 
                 );
                   }
                )
                
               } 
          </div>
                        
       </div>
   )
}


