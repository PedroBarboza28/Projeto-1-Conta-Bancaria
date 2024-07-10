
let arrayNumeros: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9];
 
console.log("Exibir os itens\n");
 
/**
 * Exibir os itens da Lista sem Arrow Functions
 */

arrayNumeros.forEach(numero => console.log(numero))
 
console.log("\nExibir os itens somados com eles mesmos\n");
 
/**
 * Exibir os itens da Lista dobrados sem Arrow Functions
 */

 
   arrayNumeros.forEach(numero => console.log(numero + numero));
 
 
console.log("\nExibir somente os elementos pares da lista\n");
 
/**
 * Exibir apenas os elementos pares da Lista sem Arrow Functions
 */
    
        arrayNumeros.forEach(numero => { if(numero % 2 === 0)
            console.log(numero)
        });

        /* let pares: Array<number> = arrayNumeros.filter(numero => numero % 2 == 0)
           console.log(pares); */