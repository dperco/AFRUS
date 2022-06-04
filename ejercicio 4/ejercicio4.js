// Problema 4: Dado un arreglo de números cualesquiera sacar la siguiente información:

// Cantidad de elementos del arreglo.
// Porcentaje de números pares e impares.
// Porcentaje de números mayores a 1000.
// Cuál es el mayor y menor valor.
// Asuma los siguientes indicadores: Tome en cuenta que el mayor número representa el 100%, indique cual es el porcentaje del número mínimo y el porcentaje del promedio de todos los números.


function ArrayData(arr){

    let cant=0 ;
    let par=0;
    let impar=0;
    let mayor=0;
    let max=0;
    let menor=arr[0];
    let prom=0;

    for(let i=0 ; i < arr.length ;i++){
        cant++;
        prom=prom+arr[i];
        if(arr[i] > 1000){mayor++};
        if(arr[i] > max){max=arr[i]};
        if(arr[i] < menor){menor=arr[i]};
        if(arr[i] % 2 === 0){par++}else{impar++}
    }

    console.log('Cantidad de elementos es = ',cant);
    console.log('El porcentale de Numeros mayores a 1000 es = ',(mayor/cant)*100 ,'%');
    console.log('El numero maximo es =',max);
    console.log('El numero menor es =',menor);
    console.log('El porcentale de Numeros pares es del',(par/cant)*100 ,'%');
    console.log('El porcentale de Numeros impares es del ',(impar/cant)*100 ,'%');
    console.log('Para el caso mayor numero es=100%  , porcentaje del Numero minimo es del ',(Math.abs(menor)/max)*100 ,'%');
    console.log('Para el caso mayor numero es=100%  , porcentaje del promedio es del ',(prom/max)*100 ,'%');
    
    
}

let arr=[2,3,1,-3,1003,5,7,8,9,1001,1002];

ArrayData(arr);

