// Problema 1: Se debe crear una solución que dado 2 números X y Y cualesquiera, se 
// obtenga la multiplicación de los mismos SIN usar el operador de multiplicación *.



function multiplicar(a,b){
             let result=0;
             let i=Math.abs(a);
             let j=Math.abs(b)
             function prod (i,j){
                            let sum=0
                             for(let d=0; d<j;d++){
                             sum=sum+i;
                              }
                             return sum
                            }
              if((a >0 && b > 0 ) || (a<0 && b < 0 )){result=prod(i,j)};
              if(a< 0 || b<0){result=-prod(i,j)};
              if(a === 0 || b === 0){result=0};
             
              return result
           };

let x=2,y=-3;

let result=multiplicar(x,y);

console.log('resultado de multiplicar x*y = ',result);



